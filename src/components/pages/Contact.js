import React, { useState } from "react";
import { checkEmail } from "../../utils/helpers";

export default function Contact() {
  const [errorMessage, setErrorMessage] = useState("");

  function handleEmpty(e) {
    if (e.target.name === "email") {
      const isValid = checkEmail(e.target.value);
      if (!isValid) {
        setErrorMessage("Your email is not valid.");
      } else {
        setErrorMessage("");
      }
    } else {
      if (e.target.name === "name" || e.target.name === "message") {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage("");
      }
    }
  }

  function formHandler(e) {
    e.preventDefault();
  }

  return (
    <div className="row">
      <div className="col-lg-8 col-md-8 col-sm-8 container justify-content-center">
        <div className="mt-5">
          <h2>Contact Me</h2>
        </div>
        <form onSubmit={formHandler} className="justify-content-center">
          <div className="form-group col-md-6">
            <label for="InputName">Name</label>
            <input
              type="text"
              className="form-control"
              name="name"
              placeholder="Enter name"
              onBlur={handleEmpty}
            />
          </div>

          <div className="form-group col-md-6 mt-3">
            <label for="InputEmail">Email address</label>
            <input
              type="email"
              className="form-control"
              name="email"
              placeholder="Enter email"
              onBlur={handleEmpty}
            />
          </div>

          <div className="form-group col-md-6 mt-3">
            <label for="message">Message</label>
            <textarea
              className="form-control"
              name="message"
              rows="3"
              onBlur={handleEmpty}
            ></textarea>
          </div>
          {errorMessage && (
            <div>
              <p>{errorMessage}</p>
            </div>
          )}
          <button type="submit" className="btn btn-primary mt-2" style={{backgroundColor: '#264653'}}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
