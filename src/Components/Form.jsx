import React from "react";

export default function Form() {
  return (
    <div className=" border border-red-400 flex justify-center">
      <form action="">
        <p className=" text-4xl">Contact US</p>
        <div className=" flex">
          <div>
            <label htmlFor="firstName">First Name</label>
            <input type="text" id="firstName" name="firstName" />
          </div>
          <div>
            <label htmlFor="lastName">Last Name</label>
            <input type="text" id="lastName" name="lastName" />
          </div>
        </div>
        <label htmlFor="emailAddress">Email Address</label>
        <input type="text" id="emailAddress" name="emailAddress" />

        {/* Query type */}
        <div className="flex">
          <label htmlFor="queryType">Query Type</label>
          <div>
            <input
              type="radio"
              id="generalInquiry"
              name="queryType"
              value="generalInquiry"
              className="mr-2"
            />
            <label htmlFor="generalInquiry">General Inquiry</label>
          </div>
          <div>
            <input
              type="radio"
              id="supportRequest"
              name="queryType"
              value="supportRequest"
              className="mr-2"
            />
            <label htmlFor="supportRequest">Support Request</label>
          </div>
        </div>
        {/* Message */}
        <div className="flex flex-col">
          <label htmlFor="message" className="">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows="5"
            placeholder="Enter your message here..."
            className=""
          ></textarea>
        </div>
        {/* check box */}
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            id="consent"
            name="consent"
            className="w-4 h-4 accent-green-600 cursor-pointer"
          />
          <label htmlFor="consent" className="text-sm">
            I consent to be contacted by the team.
          </label>
        </div>
        {/* submit */}
        <button type="submit" className="">
          Submit
        </button>
      </form>
    </div>
  );
}
