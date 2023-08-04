import {useDispatch} from 'react-redux';
import {AddTodo} from "../redux/slice/TodoSlice.jsx";
import {useRef} from "react";

const TodoCreate = () => {

    const dispatch = useDispatch();
    const taskinput = useRef()
    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-md-10'>
                    <input ref={taskinput} type='text' className='form-control' placeholder='Enter your todo' />

                </div>
                <div className='col-md-2'>
                    <button onClick={()=>dispatch(AddTodo(taskinput.current.value))} className='btn btn-primary'>Add</button>
                </div>

            </div>

        </div>
    );
};

export default TodoCreate;