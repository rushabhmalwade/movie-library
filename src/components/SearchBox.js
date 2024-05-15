// import React, { useState } from 'react';

// const SearchBox = ({ onSearch }) => {
//   const [query, setQuery] = useState('');

//   const handleSearch = () => {
//     onSearch(query);
//   };

//   return (
//     <div className="flex justify-center my-4">
//       <input
//         type="text"
//         className="border p-2 w-1/2"
//         placeholder="Search..."
//         value={query}
//         onChange={(e) => setQuery(e.target.value)}
//       />
//       <button className="bg-blue-500 text-white p-2 ml-2" onClick={handleSearch}>
//         Search
//       </button>
//     </div>
//   );
// };

// export default SearchBox;


import React, { useState } from 'react';

const SearchBox = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <div className="flex justify-center my-4">
      <input
        type="text"
        className="border p-2 w-1/2"
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button className="bg-blue-500 text-white p-2 ml-2" onClick={handleSearch}>
        Search
      </button>
    </div>
  );
};

export default SearchBox;
