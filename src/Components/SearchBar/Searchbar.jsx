import React, { useState } from 'react';

const Searchbar = () => {
    const [inputText,setInputText] = useState("");
    let inputHandler = (e) => {
      let lowarCase = e.target.value.toLowerCase();
      setInputText(lowarCase)
    }
    return (
        <div>
<div className="bg-transparent mt-8 ">
               <div className="form-control">
      <input    onChange={inputHandler} type="text" placeholder="Search Colleges" className="input input-bordered border-blue-600 text-blue-500 sm:w-1/2 md:w-[30%] mx-auto" />
    </div>
        </div>
           {/* <Colleges input={inputText}></Colleges> */}

           {/* <div>
           const [colleges,setColleges] = useState([]);
    useEffect(()=>{
        fetch('https://college-pods-server.vercel.app/collegeList')
        .then(res => res.json())
        .then(data =>{
            setColleges(data)
        })
    },[]);
    const filteredData = colleges.filter((el) => {
        if (props.input === '') {
            // return el;
         
        }  
        else {
            return el.name.toLowerCase().includes(props.input)
        }
    })

    return (
        <div>
            <div className='grid grid-cols-2 gap-2 w-[90vw] mx-auto my-16 py-6'>
            {
                filteredData.map(college => <CollegeCard key={college._id} college={college}></CollegeCard>)
            }
            </div>
           
        </div>
    );
           </div> */}
        </div>
        
    );
};

export default Searchbar;