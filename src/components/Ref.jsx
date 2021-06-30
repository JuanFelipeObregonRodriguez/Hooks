import React,{useRef} from 'react'

const Ref = () => {
    
    const ref = useRef(null);
    
    const handleRef =()=>{
       ref.current.value = "hola mundo"
    }
    return (
        <div>
         <h1 onClick={handleRef}>useRef</h1>
         <br />   
         <textarea ref={ref} placeholder="escribe un mensaje"></textarea>
        </div>
    )
}

export default Ref
