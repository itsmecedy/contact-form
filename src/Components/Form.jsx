import React from "react";
import { useState } from "react";

export default function Form() {
  const [selectedQueryType, setSelectedQueryType] = useState("");

  const handleQueryTypeChange = (event) => {
    setSelectedQueryType(event.target.value);
  };

  return (
    <div className=" border border-red-400 flex justify-center items-center h-screen">
      <form
        action=""
        className=" sm:p-10 p-4 m-4 lg:w-3/6 bg-[var(--white)] rounded-2xl"
      >
        <p className=" text-4xl font-bold mb-10">Contact Us</p>

        {/* Name */}
        <div className="flex flex-col space-x-0 xl:flex-row xl:space-x-2">
          <div className=" flex flex-1 flex-col ">
            <label htmlFor="firstName">
              First Name<span className="pl-2 text-[var(--green-600)]">*</span>
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              required
              className="max-w-lg h-10 text-xl my-2 px-4 py-6  border border-[var(--grey-500)] focus:outline-[var(--green-600)] rounded capitalize"
            />
          </div>
          <div className=" flex flex-1 flex-col">
            <label htmlFor="lastName">
              Last Name<span className="pl-2 text-[var(--green-600)]">*</span>
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              required
              className="max-w-lg h-10 text-xl my-2 px-4 py-6  border border-[var(--grey-500)] focus:outline-[var(--green-600)] rounded capitalize"
            />
          </div>
        </div>

        {/* email address */}
        <div className=" flex flex-col mt-4">
          <label htmlFor="emailAddress">
            Email Address<span className="pl-2 text-[var(--green-600)]">*</span>
          </label>
          <input
            type="text"
            id="emailAddress"
            name="emailAddress"
            required
            className="w-full h-10 text-xl my-2 px-4 py-6 border border-[var(--grey-500)] focus:outline-[var(--green-600)] rounded "
          />
        </div>

        {/* Query type */}
        <div className="flex flex-col mt-4">
          <label htmlFor="queryType" className="mb-2">
            Query Type <span className="pl-2 text-[var(--green-600)]">*</span>
          </label>

          {/* Query options */}
          <div className="lg:flex lg:space-x-2">
            {/* General Inquiry Option */}
            <div
              className={`flex items-center flex-1 border h-12 text-xl my-2 px-4 py-2 rounded transition-colors ${
                selectedQueryType === "generalInquiry"
                  ? "bg-[var(--green-200)] border-[var(--green-600)]"
                  : "border-gray-500"
              }`}
            >
              <input
                type="radio"
                id="generalInquiry"
                name="queryType"
                value="generalInquiry"
                className="mr-2 hidden-radio"
                onChange={handleQueryTypeChange}
                checked={selectedQueryType === "generalInquiry"}
                required
              />
              <label htmlFor="generalInquiry" className="flex items-center">
                General Inquiry
              </label>
            </div>

            {/* Support Request Option */}
            <div
              className={`flex items-center flex-1 border h-12 text-xl my-2 px-4 py-2 rounded transition-colors ${
                selectedQueryType === "supportRequest"
                  ? "bg-[var(--green-200)] border-[var(--green-600)]"
                  : "border-gray-500"
              }`}
            >
              <input
                type="radio"
                id="supportRequest"
                name="queryType"
                value="supportRequest"
                className="mr-2 hidden-radio"
                onChange={handleQueryTypeChange}
                checked={selectedQueryType === "supportRequest"}
                required
              />
              <label htmlFor="supportRequest" className="flex items-center">
                Support Request
              </label>
            </div>
          </div>
        </div>

        {/* Message */}
        <div className="flex flex-col mt-4 ">
          <label htmlFor="message" className="">
            Message<span className="pl-2 text-[var(--green-600)]">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            rows="5"
            placeholder="Enter your message here..."
            className="h-40 my-2 px-4 py-4  border border-[var(--grey-500)] focus:outline-[var(--green-600)] rounded capitalize"
            required
          ></textarea>
        </div>

        {/* check box / consent*/}
        <div className="flex items-center my-4 gap-2">
          <input
            type="checkbox"
            id="consent"
            name="consent"
            className="w-4 h-4 mr-4 accent-[var(--green-600)] cursor-pointer"
            required
          />
          <label htmlFor="consent" className="text-xl">
            I consent to be contacted by the team.
            <span className="pl-2 text-[var(--green-600)]">*</span>
          </label>
        </div>
        {/* submit */}
        <button
          type="submit"
          className="w-full bg-[var(--green-600)] hover:bg-green-900 text-[var(--white)] py-2 px-4 rounded"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
