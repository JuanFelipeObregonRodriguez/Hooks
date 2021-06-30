import React,{useState, useLayoutEffect} from 'react'

const LayoutEffect = () => {
    
    const [data, setData] = useState([]);
    const efecto=data.length;
    const newdata = [
        {
            nombre:"juan",
            email:"juanfelipe@gmail.com",
            
        },
    ];
    useLayoutEffect(() => {
        setTimeout(()=>{
            setData(newdata)
        }, 3000)
    }, [])
    
    
    return (
        <div>
              <h1>useLayoutEffect</h1>
              <br />
              <p>{efecto}</p>
        </div>
    )
}

export default LayoutEffect
