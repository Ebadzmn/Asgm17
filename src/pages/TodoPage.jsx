import TodoCreate from "../components/TodoCreate.jsx";
import TodoList from "../components/TodoList.jsx";


const TodoPage = () => {
    return (
        <div className='container my-5'>
            <div className='row'>
                <div className='col-12'>
                    <div className='card'>
                        <div className='card-header'>
                            <h4 className='card-title'>Todo List</h4>
                        </div>
                        <div className='card-body'>
                                <TodoCreate />
                            <TodoList />

                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
};

export default TodoPage;