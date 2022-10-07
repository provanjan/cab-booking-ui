import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { useEffect,useState } from 'react';

function ViewAdmins(){

    const[search,setSearch]=useState([]);
    const[record,setRecord]=useState([]);

    const loadRecords=async()=>{
        axios.get("http://localhost:8080/api/v1/admins/").then(response=>{
            setSearch(response.data);
        });
    }

    useEffect(()=>{
        loadRecords();
    },[]);

    const searchRecords=(event)=>
    {
        const id = event.target.userId.value;
        axios.get(`http://localhost:8080/api/v1/admins/${id}`)
        .then(response=>{
            setSearch(response.data);
        });
    }

    return (
        <div class="container">
        <h4 className="text-center text-success mt-5"><b>Admin Information</b></h4>
          <div class="input-group mb-4 mt-3">
           <div class="form-outline">
              <input type="text" id="form1" onChange={(e)=>setRecord(e.target.value)} class="form-control" placeholder="search record" style={{backgroundColor:"#ececec"}}/>
         </div>
         <button type="button" onClick={searchRecords} class="btn btn-success">
             Search Admin
         </button>
        </div>                   
        <table class="table table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>User Name</th>
              <th>Password</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Address</th>
            </tr>
          </thead>
          <tbody>
            {search.map((name)=>
            <tr>
              <td>{name.userId}</td>  
              <td>{name.userName}</td>
              <td>{name.password}</td>
              <td>{name.email}</td>
              <td>{name.mobile}</td>
              <td>{name.address}</td>    
            </tr>
            )}  
       
          </tbody>
        </table>
      </div>
       
        );
}

export default ViewAdmins;