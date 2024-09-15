export default function SearchBar() {
  return (
    <form className="mt-4 d-flex search-form">
      <input
        type="search"
        className="form-control me-2"
        placeholder="Search..."
      />
      <button type="submit" className="btn btn-primary">
        Search
      </button>
    </form>
  );
}
