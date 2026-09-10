// function StackSidebar({ stack, setStack }) {
//   const removeFromStack = (id) => {
//     setStack(stack.filter((technology) => technology.id !== id));
//   };

//   const removeAll = () => {
//     setStack([]);
//   };

//   return (
//     <aside className="border border-gray-200 rounded-2xl p-5 shadow-sm h-fit">
//       <div className="flex justify-between items-center mb-5">
//         <h2 className="text-2xl font-bold text-gray-800">
//           Your Stack
//         </h2>

//         <span className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-sm font-semibold">
//           {stack.length}
//         </span>
//       </div>

//       {stack.length === 0 ? (
//         <p className="text-gray-500 text-center py-8">
//           Your stack is empty. Add technologies to build your stack.
//         </p>
//       ) : (
//         <>
//           <div className="space-y-3">
//             {stack.map((technology) => (
//               <div
//                 key={technology.id}
//                 className="flex items-center gap-3 border border-gray-200 rounded-xl p-3"
//               >
//                 <img
//                   src={technology.icon}
//                   alt={technology.name}
//                   className="w-10 h-10"
//                 />

//                 <div className="flex-1">
//                   <h3 className="font-semibold text-gray-800">
//                     {technology.name}
//                   </h3>

//                   <p className="text-sm text-gray-500">
//                     {technology.category}
//                   </p>
//                 </div>

//                 <button
//                   onClick={() => removeFromStack(technology.id)}
//                   className="text-red-500 font-bold text-lg"
//                 >
//                   ✕
//                 </button>
//               </div>
//             ))}
//           </div>

//           <button
//             onClick={removeAll}
//             className="w-full mt-5 border border-red-500 text-red-500 py-2 rounded-lg"
//           >
//             Remove All
//           </button>
//         </>
//       )}
//     </aside>
//   );
// }

// export default StackSidebar;

import { toast } from "react-toastify";

function StackSidebar({ stack, setStack }) {
  const removeFromStack = (id) => {
    const removedTechnology = stack.find(
      (technology) => technology.id === id
    );

    setStack(
      stack.filter((technology) => technology.id !== id)
    );

    toast.info(`${removedTechnology.name} removed from your stack!`);
  };

  const removeAll = () => {
    if (stack.length === 0) {
      return;
    }

    setStack([]);
    toast.info("All technologies removed from your stack!");
  };

  return (
    <aside className="border border-gray-200 rounded-2xl p-5 shadow-sm h-fit">
      <div className="flex justify-between items-center mb-5">
        <h2 className="text-2xl font-bold text-gray-800">
          Your Stack
        </h2>

        <span className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-sm font-semibold">
          {stack.length}
        </span>
      </div>

      {stack.length === 0 ? (
        <p className="text-gray-500 text-center py-8">
          Your stack is empty. Add technologies to build your stack.
        </p>
      ) : (
        <>
          <div className="space-y-3">
            {stack.map((technology) => (
              <div
                key={technology.id}
                className="flex items-center gap-3 border border-gray-200 rounded-xl p-3"
              >
                <img
                  src={technology.icon}
                  alt={technology.name}
                  className="w-10 h-10"
                />

                <div className="flex-1">
                  <h3 className="font-semibold text-gray-800">
                    {technology.name}
                  </h3>

                  <p className="text-sm text-gray-500">
                    {technology.category}
                  </p>
                </div>

                <button
                  onClick={() => removeFromStack(technology.id)}
                  className="text-red-500 font-bold text-lg"
                >
                  ✕
                </button>
              </div>
            ))}
          </div>

          <button
            onClick={removeAll}
            className="w-full mt-5 border border-red-500 text-red-500 py-2 rounded-lg"
          >
            Remove All
          </button>
        </>
      )}
    </aside>
  );
}

export default StackSidebar;