import React from "react";

const Newsletter = () => {
  return (
    <div className="h-[80vh]  w-auto p-16 text-center text-white font-serif mt-8 bg-sky-950">
      <h1 className="text-4xl font-semibold pt-8">
        Receive exclusive off-market listings in your inbox.
      </h1>
      <div className="mt-8 w-[80vw] mx-auto p-4">
        <input
          className="mr-4 bg-transparent w-[15vw] border-b-[1px] border-gray-500  text-xl text-start"
          type="text"
          name=""
          id=""
          placeholder="Name"
        />
        <input
          className="mr-4 bg-transparent w-[15vw] border-b-[1px] border-gray-500  text-xl text-start"
          type="email"
          name=""
          id=""
          placeholder="Email"
        />
        <button className="btn border-2 bg-sky-950 text-white rounded-none px-20  py-4 items-center text-xl">
          Submit
        </button>
      </div>
      <div className="w-[50vw] mx-auto text-justify my-6">
        <p>
          By providing Faria Rahman your contact information, you acknowledge and
          agree to our Privacy Policy and consent to receiving marketing
          communications, including through automated calls, texts, and emails,
          some of which may use artificial or prerecorded voices. This consent
          isn’t necessary for purchasing any products or services and you may
          opt out at any time. To opt out from texts, you can reply, ‘stop’ at
          any time. To opt out from emails, you can click on the unsubscribe
          link in the emails. Message and data rates may apply.
        </p>
      </div>
    </div>
  );
};

export default Newsletter;