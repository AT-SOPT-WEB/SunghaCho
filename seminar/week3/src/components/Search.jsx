const Search = ({ search, handleSearchChange }) => {
  return (
    <div>
      <input type="text" value={search} onChange={handleSearchChange} />
    </div>
  );
};

export default Search;
