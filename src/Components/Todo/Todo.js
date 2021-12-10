import React , {useState} from 'react';
import {setData, setEdit, setDelete, setUpdate} from '../../Redux/Actions/index';
import { useSelector , useDispatch } from 'react-redux';

const Todo = () => {

    const editable = useSelector(state => state.Reducer.editable)
    const todos = useSelector(state=> state.Reducer.list)
    console.log(editable)
    const dispatch = useDispatch()
    const [state, setState] = useState({
        username: '',
        password: ''
    })

    const editRecord = (id) =>{
        const copy = [...todos]
        setState({
            username: copy[id].username,
            password: copy[id].password
        })
    }

    const onChangeUsername = (e) =>{
        const copy = {...state};
        copy.username = e.target.value
        setState(copy)
    }
    const onChangePassword = (e) =>{
        const copy = {...state};
        copy.password = e.target.value
        setState(copy)
    }
    const emptyFields = () =>{
        setState({
            username: '',
            password: ''
        })
    }

    return (
        <div className='todo'>
            <div className='form-group'>
            <input type='text' className='form-control' placeholder='Username' value={state.username} onChange={onChangeUsername}></input>
            </div>
            <div className='form-group'>
            <input type='password' className='form-control' placeholder='Password' value={state.password} onChange={onChangePassword}></input>
            </div>
            {editable?
            <button onClick={()=>{
                dispatch(setUpdate(state))
                emptyFields()
            }
            
            } className='btn btn-secondary'>
                Update
            </button>
            : 
            <button className='btn btn-success' onClick={()=>
            {
                dispatch(setData(state))
                emptyFields()
            }
                }>Add</button>
            }

                {/* <TableData /> */}
                <table className='table table-hover'>
                <thead>
                    <tr>
                        <th>Username</th>
                        <th>Password</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        todos.map((todo,id)=>{
                            return(
                                <tr>
                                    <td>{todo.username}</td>
                                    <td>{todo.password}</td>
                                    <td><button onClick={
                                        ()=> {
                                            dispatch(setEdit(id))
                                            editRecord(id)
                                        }
                                    } className='btn btn-primary'>Edit</button></td>
                                    <td><button onClick={()=>dispatch(setDelete(id))} className='btn btn-danger'>Delete</button></td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Todo
