import React from "react";

const WorkWithAuthor = () => {
  return (
    <div className="bg-black h-[100vh]">
 <div
      className="h-[100vh] w-auto bg-fixed "
      style={{
        backgroundImage: `url("https://i.ibb.co/K20G808/no.jpg")`,
       backgroundRepeat:'no-repeat',
        objectFit:'cover',
        backgroundSize:'100%',
        minHeight:'100%',
       
      }}
    >
      <div className="text-center text-white w-[60vw] mx-auto py-36">
        <h1 className="text-5xl  my-16">Work With Faria</h1>
        <p className=" text-xl  my-6 bg-black opacity-[.4]">
          A consistent top producer in the Lake Oconee area, Riezl has been
          recognized with numerous awards for her business accomplishments and
          community involvement. Contact Riezl today if you are thinking of
          selling or buying, or both.
        </p>
      </div>
    </div>
    
    </div>
   
  );
};

export default WorkWithAuthor;
