import React from "react";
import DatePicker from "react-datepicker";

const CreateEvent = () => {
  const handleForm = (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const desription = e.target.desription.value;
    const newEvent = { title, desription };

    fetch("http://localhost:5101/event", {
      method: "POST",
      headers: { "content-type": "Application/json" },
      body: JSON.stringify(newEvent)
    }).then(res=>res.json())    
  };

  return (
    <div>
      <div className="flex w-full justify-center my-4">
        <button
          onClick={() => document.getElementById("my_modal_5").showModal()}
          className="btn w-80"
        >
          Create an Event
        </button>
      </div>

      {/* Open the modal using document.getElementById('ID').showModal() method */}

      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          {/* <DatePicker
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date)}
          /> */}
          <form onSubmit={handleForm}>
            <div>
              <div className="flex flex-col">
                <label className="title">Event Name</label>
                <input
                  type="text"
                  name="title"
                  placeholder="Enter event name"
                  id=""
                />
              </div>

              <div className="flex flex-col">
                <label className="desription">Describe about event</label>
                <input
                  type="text"
                  name="desription"
                  placeholder="Enter event information"
                  id=""
                />
              </div>

              <div className="">
                <button
                  className="btn"
                  popoverTarget="popover-1"
                  style={
                    { anchorName: "--anchor-1" } /* as React.CSSProperties */
                  }
                >
                  Event type
                </button>

                <ul
                  className="dropdown menu w-52 rounded-box bg-base-100 shadow-sm"
                  popover="auto"
                  id="popover-1"
                  style={
                    {
                      positionAnchor: "--anchor-1",
                    } /* as React.CSSProperties */
                  }
                >
                  <li>
                    <a>Clean Up</a>
                  </li>
                  <li>
                    <a>Tree Plantation</a>
                  </li>
                  <li>
                    <a>Donation</a>
                  </li>
                </ul>
              </div>
            </div>
            <button type="submit">Submit</button>
          </form>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default CreateEvent;
