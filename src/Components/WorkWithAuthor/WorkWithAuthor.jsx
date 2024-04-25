import React from "react";

const WorkWithAuthor = () => {
  return (
    <div className="bg-black h-auto border">
 <div
      className="h-auto w-auto bg-fixed "
      style={{
        backgroundImage: `url("https://i.ibb.co/K20G808/no.jpg")`,
       backgroundRepeat:'no-repeat',
        objectFit:'cover',
        backgroundSize:'100%',
        minHeight:'100%',
       
      }}
    >
      <div className="text-center text-white lg:w-[60vw] mx-auto py-36">
        <h1 className=" text-3xl lg:text-5xl  my-16">Work With Faria</h1>
        <p className=" text-xl  my-6 bg-black opacity-[.6]">
          A consistent top producer in the Lake Oconee area, Riezl has been
          recognized with numerous awards for her business accomplishments and
          community involvement. Contact Riezl today if you are thinking of
          selling or buying, or both.
        </p>

        <div>
      <button className="btn border-2 h-[36] border-white text-white bg-transparent rounded-none px-20 py-4 my-16 text-center">Let's Connect</button>
      </div>
      </div>
      
    </div>
    
    </div>
   
  );
};

export default WorkWithAuthor;
