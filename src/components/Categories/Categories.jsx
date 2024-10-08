import "./Categories.css";

function Categories({ setCategory, id, ...props }) {
  return (
    <div className="categories" id={id}>
      <h2>
        Shop <span>&</span> Catalogue
      </h2>
      <div className="btn-group">
        <button
          className="btn btn-primary"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapse-cakes"
          aria-expanded="false"
          aria-controls="collapse-cakes"
          onClick={() => setCategory("cakes")}
        >
          Cakes
        </button>
        <button
          className="btn btn-primary"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapse-pastries"
          aria-expanded="false"
          aria-controls="collapse-pastries"
          onClick={() => setCategory("pastries")}
        >
          Pastries
        </button>
        <button
          className="btn btn-primary"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapse-cookies"
          aria-expanded="false"
          aria-controls="collapse-cookies"
          onClick={() => setCategory("cookies")}
        >
          Cookies
        </button>
        <button
          className="btn btn-primary"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapse-doughnuts"
          aria-expanded="false"
          aria-controls="collapse-doughnuts"
          onClick={() => setCategory("doughnuts")}
        >
          Doughnuts
        </button>
      </div>
    </div>
  );
}

export default Categories;
