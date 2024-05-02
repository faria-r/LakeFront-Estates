import React from "react";
import EMailSend from "../EmailSend/EMailSend";

const ModalButton = ({ value,date }) => {
  return (
    <div>
      <button
        className="btn border-2 border-sky-950 bg-transparent rounded-none px-20 py-4 mb-8 text-center hover:bg-sky-950 hover:text-white "
        onClick={() => document.getElementById("my_modal_5").showModal()}
      >
        {value}
      </button>
      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box bg-sky-900 text-white">
          <EMailSend date={date}></EMailSend>
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

export default ModalButton;
