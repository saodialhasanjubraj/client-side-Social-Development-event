import React from "react";

const MakePayment = () => {
  const handlePaymentform = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <form onSubmit={handlePaymentform}>
        <div className="make-donation flex flex-col gap-y-4 items-center">
          <div className="name flex flex-col">
            <label>Your Name</label>
            <input
              type="text"
              name="name"
              id=""
              className="input w-60"
              placeholder="Enter your full name"
            />
          </div>
          <div className="email flex flex-col">
            <label>Your Email</label>
            <input
              type="email"
              name="email"
              id=""
              className="input w-60"
              placeholder="Enter your email"
            />
          </div>
          <div className="ammount flex flex-col">
            <label>Add Ammount</label>
            <input
              type="number"
              name="ammount"
              id=""
              className="input w-60"
              placeholder="Enter ammount"
            />
          </div>
          <button type="submit" className="btn bg-success  w-60">
            Make Payment
          </button>
        </div>
      </form>
    </div>
  );
};

export default MakePayment;
