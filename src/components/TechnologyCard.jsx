// function TechnologyCard({ technology }) {
//   return (
//     <div className="border border-gray-200 rounded-2xl p-5 shadow-sm">
      
//       <div className="flex justify-between items-start">
//         <img
//           src={technology.icon}
//           alt={technology.name}
//           className="w-14 h-14"
//         />

//         <span className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-sm">
//           {technology.badge}
//         </span>
//       </div>

//       <h2 className="text-xl font-bold mt-4">
//         {technology.name}
//       </h2>

//       <p className="text-gray-600 mt-2">
//         {technology.description}
//       </p>

//       <div className="flex gap-2 mt-4">
//         <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">
//           {technology.category}
//         </span>

//         <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">
//           {technology.difficulty}
//         </span>
//       </div>

//       <p className="mt-4">
//         ⭐ {technology.rating}
//       </p>

//       <button className="w-full mt-4 bg-black text-white py-2 rounded-lg">
//         Add to Stack
//       </button>

//     </div>
//   );
// }

// export default TechnologyCard;

function TechnologyCard({ technology, addToStack, isAdded }) {
  return (
    <div className="border border-gray-200 rounded-2xl p-5 shadow-sm">
      <div className="flex justify-between items-start">
        <img
          src={technology.icon}
          alt={technology.name}
          className="w-14 h-14"
        />

        <span className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-sm">
          {technology.badge}
        </span>
      </div>

      <h2 className="text-xl font-bold mt-4">
        {technology.name}
      </h2>

      <p className="text-gray-600 mt-2">
        {technology.description}
      </p>

      <div className="flex gap-2 mt-4">
        <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">
          {technology.category}
        </span>

        <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">
          {technology.difficulty}
        </span>
      </div>

      <p className="mt-4">
        ⭐ {technology.rating}
      </p>

      <button
        onClick={() => addToStack(technology)}
        disabled={isAdded}
        className={`w-full mt-4 py-2 rounded-lg ${
          isAdded
            ? "bg-gray-300 text-gray-600 cursor-not-allowed"
            : "bg-black text-white"
        }`}
      >
        {isAdded ? "✓ Added to Stack" : "Add to Stack"}
      </button>
    </div>
  );
}

export default TechnologyCard;