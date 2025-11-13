import React, { use } from "react";
import { AuthContext } from "../../provider/AuthContext";
import { ToastContainer, toast } from "react-toastify";
const CreateEvent = () => {
  const { userInfo } = use(AuthContext);
  console.log(userInfo.email);
  const notify = () => toast("Your Form submit done");

  const handleForm = (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const desription = e.target.desription.value;
    const location = e.target.location.value;
    const eventType = e.target.eventType.value;
    const name = e.target.name.value;
    const email = e.target.email.value;
    const thumbnilURL = e.target.thumbnilURL.value;

    const time = new Date().toLocaleDateString("en-US");
    const newEvent = {
      title,
      desription,
      time,
      location,
      eventType,
      thumbnilURL,
      name,
      email,
    };

    fetch("https://social-development-event.vercel.app/event", {
      method: "POST",
      headers: { "content-type": "Application/json" },
      body: JSON.stringify(newEvent),
    }).then((res) => res.json());
  };

  return (
    <div className="w-full flex h-full items-center justify-center flex-col ">
      <div>
        <h1 className="text-3xl underline mb-10">Create Event Form</h1>
      </div>
      <form className="w-full px-70" onSubmit={handleForm}>
        <div className="w-full">
          <div className="user-info flex w-full justify-between ">
            <div className="user-name">
              <label htmlFor="">Name</label> <br />
              <input
                className="border-b-2 "
                placeholder="Enter your name"
                type="text"
                name="name"
                id=""
              />
            </div>
            <div className="user-name">
              <label htmlFor="">Email</label> <br />
              <input
                className="border-b-2 "
                placeholder="Enter your email"
                type="text"
                name="email"
                id=""
                required
              />
            </div>
          </div>

          <div className="flex  items-center justify-between">
            <div className="flex flex-col gap-y-2 mb-5 mt-5">
              <label className="title text-xl">Event Name*</label>
              <input
                required
                type="text"
                name="title"
                placeholder="Enter event title"
                className="border-b-2 h-8 w-80"
                id=""
              />
            </div>

            <div className="flex flex-col gap-2 mt-2.5">
              <label className="desription text-xl">Thumbnil URL</label>
              <input
                required
                type="text"
                name="thumbnilURL"
                placeholder="Thumbnil url"
                id=""
                className="border-b-2"
              />
            </div>
          </div>

          <div className="flex justify-between">
            <fieldset className="fieldset">
              <select
                name="eventType"
                defaultValue="Pick a browser"
                className="select my-5 w-80"
              >
                <option disabled={true}>Select Event Type</option>
                <option>Cleanup</option>
                <option>Plantation</option>
                <option>Donation</option>
                <option>Free Health Checkup</option>
                <option>Free Education</option>
              </select>
            </fieldset>

            <div className="flex flex-col gap-2 mt-2.5">
              <label className="desription text-xl">Event location</label>
              <input
                required
                type="text"
                name="location"
                placeholder="Enter location"
                id=""
                className="border-b-2"
              />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label className="desription text-xl">Describe about event</label>
            <textarea
              required
              type="text"
              name="desription"
              placeholder="Describe about event..."
              id=""
              className="border-2 h-30 w-fu pl-2.5 pt-5"
            />
          </div>

          <div>{/* dropDown button add */}</div>
        </div>

        <div className="button-box flex w-full justify-between pr-50">
          <button
            onClick={notify}
            type="submit"
            className="mt-10 itc bg-sky-400 w-40 h-10 hover:duration-200 hover:cursor-pointer rounded-2xl hover:bg-transparent hover:border-2  hover:border-sky-400 text-xl"
          >
            Submit
          </button>

          <button className="mt-10 itc bg-red-500 w-40 h-10 hover:duration-200 hover:cursor-pointer rounded-2xl hover:bg-transparent hover:border-2  hover:border-red-400 text-xl">
            Cancel
          </button>
        </div>

        <ToastContainer />
      </form>
    </div>
  );
};

export default CreateEvent;
