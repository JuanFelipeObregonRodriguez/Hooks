import { useState, useEffect } from 'react'
const Effect = () => {

    const [users, setUsers] = useState([]);
    const [id, setId] = useState(null);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((res) => res.json())
            .then((data) => {
                setUsers(data);
            })
    }, [])
    useEffect(()=>{}, [id])

    console.log(users);

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <>
            <h1>Effect</h1>
            <br />
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Search</label>
                    <input 
                    value={id} 
                    onChange={(e)=>(e.target.value)}
                    type="text"
                    className="form-control" 
                    id="exampleInputEmail1" 
                    aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text"></div>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </>
    )
}

export default Effect
