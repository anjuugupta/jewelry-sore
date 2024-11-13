
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";

const Contact = () => {
  const location = useLocation();
  const [prevLocation, setPrevLocation] = useState("");
  useEffect(() => {
    setPrevLocation(location.state?.data || "Home"); // Default to "Home" if no previous location data
  }, [location]);

  const [clientName, setClientName] = useState("");
  const [email, setEmail] = useState("");
  const [messages, setMessages] = useState("");
  const [phone, setPhone] = useState("");
  
  // Error messages
  const [errClientName, setErrClientName] = useState("");
  const [errEmail, setErrEmail] = useState("");
  const [errMessages, setErrMessages] = useState("");
  const [errPhone, setErrPhone] = useState("");

  const [successMsg, setSuccessMsg] = useState("");

  const handleName = (e) => {
    setClientName(e.target.value);
    setErrClientName("");
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
    setErrEmail("");
  };
  const handleMessages = (e) => {
    setMessages(e.target.value);
    setErrMessages("");
  };
  const handlephone = (e) => {
    setPhone(e.target.value);
    setErrPhone("");
  };

  // Email validation
  const EmailValidation = (email) => {
    return String(email)
      .toLowerCase()
      .match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i);
  };

  const handlePost = (e) => {
    e.preventDefault();
    if (!clientName) setErrClientName("Enter your Name");
    if (!email) {
      setErrEmail("Enter your Email");
    } else if (!EmailValidation(email)) {
      setErrEmail("Enter a Valid Email");
    }
    if (!messages) setErrMessages("Enter your Message");

    if (clientName && email && EmailValidation(email) && messages) {
      setSuccessMsg(
        `Thank you, ${clientName}. Your message has been received. We will get back to you at ${email}.`
      );
    }
  };

  return (
    <div className="max-w-container mx-auto px-4">
      <Breadcrumbs title="Contact" prevLocation={prevLocation} />
      {successMsg ? (
        <p className="pb-20 w-full font-medium text-green-500">{successMsg}</p>
      ) : (
        <div className="flex flex-col lg:flex-row gap-8 py-20">
          {/* Left Side: Company Details */}
          <div className="w-full lg:w-1/2 bg-[#d9c599] p-8 rounded-md shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
            <p className="text-base text-gray-700 mb-6">
              Feel free to get in touch with us. We are always open to discuss
              new projects, creative ideas, or opportunities to be part of your
              visions.
            </p>
            <div className="space-y-4">
              <p>
                <span className="font-semibold">Address:</span> 123 Jewelry Street,
                Goldtown, CA 12345
              </p>
              <p>
                <span className="font-semibold">Phone:</span> +91 (234) 567-8901
              </p>
              <p>
                <span className="font-semibold">Email:</span>{" "}
                contact@jewelrystore.com
              </p>
              <p>
                <span className="font-semibold">Working Hours:</span> Mon - Fri,
                9am - 6pm
              </p>
            </div>
          </div>

          {/* Right Side: Contact Form */}
          <form onSubmit={handlePost} className="w-full lg:w-1/2">
            <h1 className="font-titleFont font-semibold text-3xl mb-6">
              Fill up the Form
            </h1>
            <div className="w-full space-y-6">
              <div>
                <p className="text-base font-titleFont font-semibold px-2">
                  Name
                </p>
                <input
                  onChange={handleName}
                  value={clientName}
                  className="w-full py-2 border-b-2 px-2 text-base font-medium placeholder:font-normal placeholder:text-sm outline-none focus-within:border-primeColor"
                  type="text"
                  placeholder="Enter your name here"
                />
                {errClientName && (
                  <p className="text-red-500 text-sm font-titleFont font-semibold mt-1 px-2">
                    {errClientName}
                  </p>
                )}
              </div>
              <div>
                <p className="text-base font-titleFont font-semibold px-2">
                  Email
                </p>
                <input
                  onChange={handleEmail}
                  value={email}
                  className="w-full py-2 border-b-2 px-2 text-base font-medium placeholder:font-normal placeholder:text-sm outline-none focus-within:border-primeColor"
                  type="email"
                  placeholder="Enter your email here"
                />
                {errEmail && (
                  <p className="text-red-500 text-sm font-titleFont font-semibold mt-1 px-2">
                    {errEmail}
                  </p>
                )}
              </div>
              <div>
                <p className="text-base font-titleFont font-semibold px-2">
                  Phone Number
                </p>
                <input
                  onChange={handlephone}
                  value={phone}
                  className="w-full py-2 border-b-2 px-2 text-base font-medium placeholder:font-normal placeholder:text-sm outline-none focus-within:border-primeColor"
                  type="email"
                  placeholder="Enter your contcat number here"
                />
                {errEmail && (
                  <p className="text-red-500 text-sm font-titleFont font-semibold mt-1 px-2">
                    {errEmail}
                  </p>
                )}
              </div>
              <div>
                <p className="text-base font-titleFont font-semibold px-2">
                  Message
                </p>
                <textarea
                  onChange={handleMessages}
                  value={messages}
                  cols="30"
                  rows="4"
                  className="w-full py-2 border-b-2 px-2 text-base font-medium placeholder:font-normal placeholder:text-sm outline-none focus-within:border-primeColor resize-none"
                  placeholder="Enter your message here"
                ></textarea>
                {errMessages && (
                  <p className="text-red-500 text-sm font-titleFont font-semibold mt-1 px-2">
                    {errMessages}
                  </p>
                )}
              </div>
              <button
                type="submit"
                className="w-44 bg-primeColor text-gray-200 h-10 font-titleFont text-base tracking-wide font-semibold hover:bg-black hover:text-white duration-200"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default Contact;
