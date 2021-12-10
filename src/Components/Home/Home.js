import React ,{useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as Constants from '../../constants/index';


const Home = () => {
    const [name, setName] = useState('')
    const [age, setAge] = useState('')
  
    const dispatch = useDispatch();
  
    const edit = (id) => {
     const editData = data.filter((e,i)=>i===id)
     setName(editData[0].name)
     setAge(editData[0].age)
    }
    const data = useSelector((state)=>state.a.data);
   
    const editable = useSelector((state)=>state.a.editable);
    
    return (
        <div className="App mt-5">
    <div className="container" style={{width:"50%",height:"400px",
    backgroundColor:"lavender",paddingTop:"50px"}}>
     <div className="row">
      <div className="col-md-4">
      
        <div className="form-group mb-3">
       
          <input type="text"
          value={name}
          className="form-control"
          placeholder="Enter Name"
          // onChange={(e)=>dispatch({type:Constants.SETNAME , name:e.target.value})}
          onChange={(e)=>setName(e.target.value)}
          />
          </div>
          <div className="form-group">
          <input type="text"
          className="form-control"
          placeholder="Enter Age"
          value={age}
          // onChange={(e)=>dispatch({type:Constants.SETAGE , age:e.target.value})}
          onChange={(e)=>setAge(e.target.value)}
          />
        </div>
        {editable?
        <button
        className="btn btn-success d-flex mt-2"
        onClick={()=>dispatch({type:Constants.UPDATEDATA, name ,age},setName(''), setAge(''))}
        >Update</button>:<button
        className="btn btn-success d-flex mt-2"
        onClick={()=>dispatch({type:Constants.SETDATA,name,age}
          ,setName(''), setAge(''))}
        >Add</button>}
        
      </div>
      <div className="col-md-8">
        <table className="table table-striped table-hover">
          <thead>
            <tr>
              <th>Name:</th>
              <th>Age</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {data.map((elem, id)=>{
              return (
            <tr key={elem.id}>
              <td>{elem.name}</td>
              <td>{elem.age}</td>
              <td><button className="btn btn-info"
              onClick={()=>{
                dispatch({type:Constants.EDITDATA,id})
                edit(id);
              }}
              >Edit</button></td>
              <td><button className="btn btn-danger"
              onClick={()=>dispatch({type:Constants.DELETEDATA, id})}
              >Delete</button></td>
            </tr>
              )
            })}
          </tbody>
        </table>
      </div>
     </div>
    </div>
    </div>
    )
}

export default Home
