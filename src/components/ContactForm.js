import React, { useState } from "react";

export default function ContactUs() {
   // States for contact form fields
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");

  const [message, setMessage] = useState("");

  //   Form validation state
  const [errors, setErrors] = useState({});

  //   Setting button text on form submission
  const [buttonText, setButtonText] = useState("Wyślij");

  // Setting success or failure messages states
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showFailureMessage, setShowFailureMessage] = useState(false);

  // Validation check method
  const handleValidation = () => {
    let tempErrors = {};
    let isValid = true;

    if (fullname.length <= 0) {
      tempErrors["fullname"] = true;
      isValid = false;
    }
    if (email.length <= 0) {
      tempErrors["email"] = true;
      isValid = false;
    }
  
    if (message.length <= 0) {
      tempErrors["message"] = true;
      isValid = false;
    }

    setErrors({ ...tempErrors });
    console.log("errors", errors);
    return isValid;
  };

  //   Handling form submit

  const handleSubmit = async (e) => {
    e.preventDefault();

    let isValidForm = handleValidation();

    if (isValidForm) {
      setButtonText("Wysyłanie...");
      const res = await fetch("/api/sendgrid", {
        body: JSON.stringify({
          email: email,
          fullname: fullname,
          message: message,
        }),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      });

      const { error } = await res.json();
      if (error) {
        console.log(error);
        setShowSuccessMessage(false);
        setShowFailureMessage(true);
        setButtonText("Send");
        return;
      }
      setShowSuccessMessage(true);
      setShowFailureMessage(false);
      setButtonText("Wysłano");
    }
    console.log(fullname, email, message);
  };
  return (
    <form
          onSubmit={handleSubmit}
          className="rounded-lg shadow-xl flex flex-col px-8 py-8 pt-12 bg-white"
        >
          <h1 className="text-2xl font-bold ">
            Wyślij wiadomość <span className="text-4xl">🚀</span>
          </h1>

          <label
            htmlFor="fullname"
            className="text-black  mt-8 "
          >
            Imię lub nazwa firmy<span className="text-red-500 ">*</span>
          </label>
          <input
            type="text"
            value={fullname}
            onChange={(e) => {
              setFullname(e.target.value);
            }}
            name="fullname"
            className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500  text-black"
          />
          {errors?.fullname && (
            <p className="text-red-500">Wpisz imię lub nazwę firmy</p>
          )}

          <label
            htmlFor="email"
            className="text-black  mt-4 "
          >
            E-mail<span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500  text-black"
          />
          {errors?.email && (
            <p className="text-red-500">Wpisz adres email.</p>
          )}

        
          <label
            htmlFor="message"
            className="text-black  mt-4 "
          >
            Wiadomość<span className="text-red-500">*</span>
          </label>
          <textarea
            name="message"
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);
            }}
            className="bg-transparent h-[7rem] border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500  text-black"
          ></textarea>
          {errors?.message && (
            <p className="text-red-500">Wpisz treść wiadomości</p>
          )}
          <div className="flex flex-row items-center justify-start">
            <button
              type="submit"
              className="px-10 mt-[3rem] py-3 bg-black text-white  rounded-md text-lg flex flex-row items-center"
            >
              {buttonText}
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="text-babyblue ml-3"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.00967 5.12761H11.0097C12.1142 5.12761 13.468 5.89682 14.0335 6.8457L16.5089 11H21.0097C21.562 11 22.0097 11.4477 22.0097 12C22.0097 12.5523 21.562 13 21.0097 13H16.4138L13.9383 17.1543C13.3729 18.1032 12.0191 18.8724 10.9145 18.8724H8.91454L12.4138 13H5.42485L3.99036 15.4529H1.99036L4.00967 12L4.00967 11.967L2.00967 8.54712H4.00967L5.44417 11H12.5089L9.00967 5.12761Z"
                  fill="currentColor"
                />
              </svg>
            </button>
          </div>
          <div className="text-left">
            {showSuccessMessage && (
              <p className="text-green-500 font-semibold text-sm my-2">
                Dziękujemy! Otrzymaliśmy Twoją wiadomość.
              </p>
            )}
            {showFailureMessage && (
              <p className="text-red-500">
                Coś poszło nie tak :/
              </p>
            )}
          </div>
        </form>
  );
}