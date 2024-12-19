// import { useState } from "react";

import { useState } from "react";

// const Test2 = () => {

//   // ---METHOD 1---
//   // const [left, setLeft] = useState(0)
//   // const [right, setRight] = useState(0)
  
//   //---METHOD 2---
//   const [clicks, setClicks] = useState({
//     left: 0,
//     right: 0
//   })

//   const [allClicks, setAllClicks] = useState([])

//   //--LONGER METHOD
//   // const handleLeftClicks = () => {
//   //   const newClicks = {
//   //     ...clicks,
//   //     left: clicks.left + 1
//   //   }
//   //   setClicks(newClicks)
//   // }

//   // const handleRightClicks = () => {
//   //   const newClicks = {
//   //     ...clicks,
//   //     right: clicks.right + 1
//   //   }
//   //   setClicks(newClicks)
//   // }

//   //SHORTER METHOD
//   const handleLeftClicks = () => {
//     setClicks({...clicks, left: clicks.left + 1})
//   }
  
//   const handleRightClicks = () => {
//     setClicks({...clicks, right: clicks.right + 1})
//   };


//   return (
//     <div>

//       {/* ---METHOD 1--- */}
//       {/* {left}
//       <button onClick={()=> setLeft(left + 1)}>
//         Left
//       </button>
//       <button onClick={() => setRight(right + 1)}>
//         Right
//       </button>
//       {right} */}

//       {/* ---METHOD 2--- */}
//       {clicks.left}
//       <button onClick={handleLeftClicks}>
//         Left
//       </button>
//       <button onClick={handleRightClicks}>
//         Right
//       </button>
//       {clicks.right}
//       <p>{allClicks.join(" ")}</p>

//     </div>
//   )
// }

// export default Test2;


//--HANDLING ARRAYS SECTIONS--
// const Test2 = () => {

//   const [left, setLeft] = useState(0)
//   const [right, setRight] = useState(0)
//   const [allClicks, setAll] = useState ([])
//   const [total, setTotal] = useState(0)

//   const handleLeftClick = () => {
//     setAll(allClicks.concat("L"))
//     // console.log("left before", left)
//     const updatedLeft = left +1
//     setLeft(updatedLeft)
//     // console.log("left after", left)
//     setTotal(updatedLeft + right)
//   }

//   const handleRightClick = () => {
//     setAll(allClicks.concat("R"))
//     const updatedRight = right + 1
//     setRight(updatedRight)
//     setTotal(left + updatedRight)
//   }

//   return (
//     <div>
//       {left}
//       <button onClick={handleLeftClick}>
//         Left
//       </button>
//       <button onClick={handleRightClick}>
//         Right
//       </button>
//       {right}

//       <p>{allClicks.join(" ")}</p>
//       <p>Total {total}</p>
//     </div>
//   )

// }

// export default Test2;




// ---CONDITIONAL RENDERING---
// const History = (props) => {
//   if (props.allClicks.length === 0) {
//     return (
//       <div>
//         the app is used by pressing the buttons
//       </div>
//     )
//   }
//   return (
//     <div>
//       button press history: {props.allClicks.join(' ')}
//     </div>
//   )
// }

// const Button = ({ handleClick, text }) => (
//   <button onClick={handleClick}>
//     {text}
//   </button>
// )

// const Test2 = () => {

//   const [left, setLeft] = useState(0)
//   const [right, setRight] = useState(0)
//   const [allClicks, setAll] = useState ([])

//   const handleLeftClick = () => {
//     setAll(allClicks.concat("L"))
//     // console.log("left before", left)
//     const updatedLeft = left +1
//     setLeft(updatedLeft)
//     // console.log("left after", left)
//   }

//   const handleRightClick = () => {
//     setAll(allClicks.concat("R"))
//     const updatedRight = right + 1
//     setRight(updatedRight)
//   }


//   return (
//     <div>
//       {left}
//       <Button handleClick={handleLeftClick} text="Left"/>
//       <Button handleClick={handleRightClick} text="Right" />
//       {right}

//       <History allClicks={allClicks} />
//     </div>
//   )
// }

// export default Test2