import reviews from "./reviewsData";

export default function Reviews() {
  return (
    <>
      {reviews.map((current, index) => (
        <div
          className={`carousel-item ${index === 0 ? "active" : ""} `} // Add active class to the first item
          key={index}
        >
          <div className="review-item">
            <p>{current.review}</p>
            <h5>{current.name}</h5>
            <p>{current.stars}</p>
          </div>
        </div>
      ))}
    </>
  );
}
