import React from "react";
import "./Modal.css";

export default function Modal({ cartItems }) {
  const groupedItems = cartItems.reduce((acc, item) => {
    const existingItem = acc.find((i) => i.title === item.title);
    if (existingItem) {
      existingItem.quantity += 1;
      existingItem.totalPrice += item.price;
    } else {
      acc.push({ ...item, quantity: 1, totalPrice: item.price });
    }
    return acc;
  }, []);

  // Calculate grand total
  const grandTotal = groupedItems.reduce(
    (total, item) => total + item.totalPrice,
    0
  );

  return (
    <>
      <div
        className="modal fade"
        id="cartBtn"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Cart:
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              {cartItems.length > 0 ? (
                <>
                  {cartItems.map((item, index) => (
                    <div key={index} className="item-row">
                      <span className="item-title">{item.title}</span>
                      <span>{item.price}</span>
                    </div>
                  ))}
                </>
              ) : (
                <p> Cart is empty. </p>
              )}
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Continue Shopping
              </button>
              <button type="button" className="btn btn-primary">
                Proceed to Payment
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
