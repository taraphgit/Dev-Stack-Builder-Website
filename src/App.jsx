import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TechnologyCard from "./components/TechnologyCard";
import StackSidebar from "./components/StackSidebar";
import Footer from "./components/Footer";

function App() {
  const [technologies, setTechnologies] = useState([]);
  const [stack, setStack] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}data/technologies.json`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to load technologies");
        }

        return response.json();
      })
      .then((data) => {
        setTechnologies(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setError("Unable to load technologies. Please try again.");
        setLoading(false);
      });
  }, []);

  const addToStack = (technology) => {
    const alreadyAdded = stack.some(
      (item) => item.id === technology.id
    );

    if (alreadyAdded) {
      toast.warning(`${technology.name} is already in your stack!`);
      return;
    }

    setStack([...stack, technology]);
    toast.success(`${technology.name} added to your stack!`);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center px-4 text-center">
        <div className="text-4xl mb-4">⚙️</div>

        <h2 className="text-2xl font-semibold text-gray-700">
          Loading technologies...
        </h2>

        <p className="text-gray-500 mt-2">
          Please wait while we load the technology list.
        </p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center px-4 text-center">
        <div className="text-4xl mb-4">⚠️</div>

        <h2 className="text-2xl font-semibold text-red-500">
          Something went wrong
        </h2>

        <p className="text-gray-500 mt-2">
          {error}
        </p>
      </div>
    );
  }

  return (
    <>
      <Navbar />

      <Hero />

      <main
        id="technologies"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14"
      >
        <div className="mb-8">
          <p className="text-orange-500 font-semibold mb-2">
            EXPLORE YOUR OPTIONS
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Explore Technologies
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-8">
          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
              {technologies.map((technology) => (
                <TechnologyCard
                  key={technology.id}
                  technology={technology}
                  addToStack={addToStack}
                  isAdded={stack.some(
                    (item) => item.id === technology.id
                  )}
                />
              ))}
            </div>
          </div>

          <StackSidebar
            stack={stack}
            setStack={setStack}
          />
        </div>
      </main>

      <Footer />

      <ToastContainer
        position="top-right"
        autoClose={2500}
        newestOnTop
        closeOnClick
        pauseOnHover
      />
    </>
  );
}

export default App;