


import {useDispatch, useSelector} from 'react-redux';
import {DeleteAL} from "./DeleteAL.jsx";
import {EditAL} from "./EditAL.jsx";
import {checkTodo} from "../redux/slice/TodoSlice.jsx";


const TodoList = () => {
    const todoItems = useSelector((state) => state.todo.todoList);
    const dispatch = useDispatch();

    const handleCheckboxChange = (index) => {
        dispatch(checkTodo(index));
    };




    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-12'>
                    <table className='table'>
                        <thead>
                        <tr>
                            <th>No</th>
                            <th>Name</th>
                            <th>Edit</th>
                            <th>Delete</th>
                            <th>Complete</th>
                        </tr>
                        </thead>
                        <tbody>
                        {todoItems.map((item,index) => {
                            return (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{item}</td>
                                    <td>
                                        <button onClick={()=>EditAL(index,item)} className='btn btn-primary'>Edit</button>
                                    </td>
                                    <td>
                                        <button onClick={()=>{DeleteAL(index)}} className='btn btn-danger'>Delete</button>
                                    </td>

                                    <td>
                                        <input
                                            type='checkbox'
                                            checked={item.completed}
                                            onChange={() => handleCheckboxChange(index)}
                                        />
                                    </td>

                                </tr>
                            );
                        })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default TodoList;
