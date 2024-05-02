import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import useAxiosPublic from "../../../Hooks/useAxiosPublic/useAxiosPublic";
const EMailSend = ({ date }) => {
  const form = useRef();
  const [inputs, setInputs] = useState({});
  const axiosPublic = useAxiosPublic();
  //handle change
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
    console.log(inputs);
  };

  //send Email
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_c0l0kvy",
        "template_q9b0j7h",
        form.current,
        "zf7KzE3hvzLkVfD3g"
      )
      .then(
        (result) => {
          console.log(result.text, "sent");
          Swal.fire({
            title: "Email Sent!",
            text: "We Will Contact You Soon!",
            icon: "success",
          });
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  const handleStoreData = (e) => {
    e.preventDefault();
     sendEmail(e);

    console.log(inputs);
    axiosPublic.post("/schedules", inputs).then((res) => {
      console.log(res.data);
    });
  };

  return (
    <div className="min-h-screen lg:pl-16">
      <h1 className="text-5xl font-mono mb-6 pt-6 text-start">Send Email</h1>
      <form
        ref={form}
        onSubmit={handleStoreData}
        className="flex-col justify-start font-bold relative"
      >
        <div className=" my-6  text-start">
          <input
            type="text"
            placeholder="NAME"
            name="user_name"
            value={inputs.user_name || ""}
            onChange={handleChange}
            className="w-72 py-4 border-0 border-b-[1px] bg-transparent"
          />
        </div>
        <div className=" my-6  text-start">
          <input
            type="email"
            name="user_email"
            value={inputs.user_email || ""}
            onChange={handleChange}
            placeholder="EMAIL"
            className="w-72 py-4 border-0 border-b-[1px] bg-transparent"
          />
        </div>
        <div className="  my-6 font-bold text-start">
          <input
            type="text"
            placeholder="PHONE NUMBER"
            className="w-72 py-4 border-0 border-b-[1px] bg-transparent"
          />
        </div>

        {date ? (
          <>
            {" "}
            <div className="text-start ">
              <textarea
                name="message"
                value={inputs.message}
                onChange={handleChange}
                className=" w-72 my-6 bg-transparent border-white rounded-none textarea textarea-bordered textarea-md "
              >
                {date}
              </textarea>
            </div>
          </>
        ) : (
          <>
            {" "}
            <div className="text-start ">
              <textarea
                name="message"
                placeholder="MESSAGE"
                className=" w-72 my-6 bg-transparent border-white rounded-none textarea textarea-bordered textarea-md "
              ></textarea>
            </div>
          </>
        )}
        <input
          type="submit"
          className="border border-white bg-transparent text-start py-2 px-6"
        />
      </form>
    </div>
  );
};

export default EMailSend;
