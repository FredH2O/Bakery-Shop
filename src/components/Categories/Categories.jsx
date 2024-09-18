import { useState } from "react";
import ItemList from "../ItemCards/ItemLists";
import { itemList } from "../ItemCards/Items";

export default function Categories() {
  const [category, setCategory] = useState("cakes");
  return (
    <>
      <p className="d-inline-flex gap-1">
        <button
          className="btn btn-primary"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseExample"
          aria-expanded="false"
          aria-controls="collapseExample"
          onClick={() => setCategory("cakes")}
        >
          Cakes
        </button>
        <button
          className="btn btn-primary"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseExample"
          aria-expanded="false"
          aria-controls="collapseExample"
          onClick={() => setCategory("pastries")}
        >
          Pastries
        </button>
      </p>
      <div className="collapse" id="collapseExample">
        <div className="card card-body">
          <ItemList category={category} />
        </div>
      </div>
    </>
  );
}
