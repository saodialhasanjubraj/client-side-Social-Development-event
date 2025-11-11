import React, { use } from "react";
import DatePicker from "react-datepicker";
import { AuthContext } from "../../provider/AuthContext";

const CreateEvent = () => {
  const { user } = use(AuthContext);
  
  console.log(user, "user in log");

  const handleForm = (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const desription = e.target.desription.value;
    const location = e.target.location.value;
    const eventType = e.target.eventType.value;

    const time = new Date().toLocaleDateString("en-US");
    const newEvent = { title, desription, time, location, eventType };

    fetch("http://localhost:5101/event", {
      method: "POST",
      headers: { "content-type": "Application/json" },
      body: JSON.stringify(newEvent),
    }).then((res) => res.json());
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
        <div className="modal-box w-400 h-[80vh]">
          {/* <DatePicker
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date)}
          /> */}
          <form onSubmit={handleForm}>
            <div>
              <div className="flex flex-col gap-y-2 mb-5">
                <label className="title text-xl">Event Name*</label>
                <input
                  required
                  type="text"
                  name="title"
                  placeholder="Enter event title"
                  id=""
                />
              </div>

              <div>
                <fieldset className="fieldset">
                  <legend className="fieldset-legend">Browsers</legend>
                  <select
                    name="eventType"
                    defaultValue="Pick a browser"
                    className="select"
                  >
                    <option disabled={true}>Pick a browser</option>
                    <option>Cleanup</option>
                    <option>Plantation</option>
                    <option>Donation</option>
                    <option>Free Health Checkup</option>
                    <option>Free Education</option>
                  </select>
                  <span className="label">Optional</span>
                </fieldset>
              </div>
              <div className="flex flex-col gap-2">
                <label className="desription text-xl">
                  Describe about event
                </label>
                <textarea
                  required
                  type="text"
                  name="desription"
                  placeholder="Enter event information"
                  id=""
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="desription text-xl">Event location</label>
                <input
                  required
                  type="text"
                  name="location"
                  placeholder="Enter location"
                  id=""
                />
              </div>

              <div>{/* dropDown button add */}</div>
            </div>
            <button
              type="submit"
              className="mt-20 bg-sky-400 w-full h-10 hover:duration-200 hover:cursor-pointer rounded-2xl hover:bg-transparent hover:border-2  hover:border-sky-400 text-xl"
            >
              Submit
            </button>
          </form>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn bg-red-400 w-30 text-center">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default CreateEvent;
