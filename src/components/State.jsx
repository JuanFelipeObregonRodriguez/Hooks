import React,{useState, useEffect} from 'react'

const State = () => {
   const [state, setState]=useState(0)


   useEffect(()=>{
       console.log(state);
   }, [])

const handleClick=()=>{
    setState(state + 1);
}
    return (
        <div className="container text-center">
            <h1>useState</h1>

            <span>countdown: {state}</span>
            <button onClick={handleClick}>+1</button>
        </div>
    )
}

export default State
