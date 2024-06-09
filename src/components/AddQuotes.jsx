import React, { useState } from 'react'
import NavQuotes from './NavQuotes'

const AddQuotes = () => {
    const[data,changeData]=useState(
        {
            "id":"",
            "name":"",
            "email":"",
            "quotename":"",
            "author":""

        }

    )
    const inputHandler=(event)=>{
        changeData({...data,[event.target.name]:event.target.value})
    }
    const readValue=()=>{
        console.log(data)
    }
  return (
    <div>
        <NavQuotes />
        <br>
        </br>
        <center><h1>ADD QUOTES</h1></center>
        <br></br>
        <div className="container">
            <div className="row g-3">
                <div className="col col-12 col-sm-6 col-md-6 col-lg-16 col-xl-6 col-xxl-6">
                    <label htmlFor="" className="form-label">User Id</label>
                    <input type="text" className="form-control" name='id' value={data.id} onChange={inputHandler} />
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-16 col-xl-6 col-xxl-6">
                    <label htmlFor="" className="form-label">Name</label>
                    <input type="text" className="form-control" name='name' value={data.name} onChange={inputHandler}  />
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-16 col-xl-6 col-xxl-6">
                    <label htmlFor="" className="form-label">Email</label>
                    <input type="text" className="date form-control" name='email' value={data.email} onChange={inputHandler}/>
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-16 col-xl-6 col-xxl-6">
                    <label htmlFor="" className="form-label">Quote Name</label>
                    <input type="text" className="form-control" name='quotename' value={data.quotename} onChange={inputHandler} />
                </div>
                
                <div className="col col-12 col-sm-6 col-md-6 col-lg-16 col-xl-6 col-xxl-6">
                    <label htmlFor="" className="form-label">Author</label>
                    <input type="text" className="date form-control" name='author' value={data.author} onChange={inputHandler} />
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-16 col-xl-6 col-xxl-6">
                    <button className="btn btn-success" onClick={readValue}>Submit</button>
                </div>
                
            </div>
        </div>
        
    </div>
  )
}

export default AddQuotes