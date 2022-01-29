import React, { useState } from "react";

const Foams = () => {
  const [fullName, setFullName] = useState({
    fName: " ",
    lName: " ",
   });
 
  const inputEvent = (event) => {
    console.log(event.target.value);
    console.log(event.target.name);

    const value = event.target.value;
    const name = event.target.name;


    setFullName((preValue) =>{
      if(name === 'fName'){
        return{

          fName: value,
          lName: preValue.lName,
        }
      }
      else if(name === 'lName'){
        return{

          fName: preValue.fName,
          lName: value,
        }
      } 
    })
  };
  const onSubmit = (event) => {
    event.preventDefault();
    alert("form submitted");
  };
  return (
    <>
      <div>
        <form onSubmit={onSubmit}>
          <div>
            <h1>
              Hello {fullName.fName} {fullName.lName}
            </h1>
            <input
              type="text"
              placeholder="Enter Your Name"
              name="fName"
              onChange={inputEvent}
              // value={fullName.fName}
            />
            <input
              type="text"
              placeholder="Enter Your Last Name"
              name="lName"
              onChange={inputEvent}
              // value={fullName.lName}
            />
            <button type="submit">Click Me</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Foams;




//  two field



 


// import React, { useState } from "react";

// const Foams = () => {
//   const [name, setName] = useState();
//   const [fullName, setFullName] = useState();

//   const [lastName, setLastName] = useState();
//   const [lastNameNew, setLastNameNew] = useState();

//   const inputEvent = (event) => {
//     // console.log(event.target.value);
//     setName(event.target.value);
//   };
//   const inputEventTwo = (event) => {
//     // console.log(event.target.value);
//     setLastName(event.target.value);
//   };
//   const onSubmit = (event) => {
//     event.preventDefault();
//     setFullName(name);
//     setLastNameNew(lastName);
//   };
//   return (
//     <>
//       <div>
//         <form onSubmit={onSubmit}>
//           <div>
//             <h1>
//               {" "}
//               Hello {fullName} {lastNameNew}{" "}
//             </h1>
//             <input
//               type="text"
//               placeholder="Enter Your Name"
//               onChange={inputEvent}
//               value={name}
//             />
//             <input
//               type="text"
//               placeholder="Enter Your Last Name"
//               onChange={inputEventTwo}
//               value={lastName}
//             />
//             <button type="submit">Click Me</button>
//           </div>
//         </form>
//       </div>
//     </>
//   );
// };

// export default Foams;










// one field

// import React, { useState } from "react";

// const Foams = () => {
//   const [name, setName] = useState();
//   const [fullName, setFullName] = useState();
//   const inputEvent = (event) => {
//     // console.log(event.target.value);
//     setName(event.target.value);
//   };
//   const onSubmit = (event) => {
//     event.preventDefault();
//     setFullName(name);
//   };
//   return (
//     <>

//     <div>

//     <form onSubmit={onSubmit}>
//     <div>
//       <h1> Hello {fullName} </h1>
//       <input
//         type="text"
//         placeholder="Enter Your Name"
//         onChange={inputEvent}
//         value={name}
//       />
//       <button type="submit">Click Me</button>
//     </div>
//     </form>
//     </div>
//     </>
//   );
// };

// export default Foams;
