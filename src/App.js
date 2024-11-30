import React, {useState} from 'react';
import './App.css';
import TodoTable from "./components/TodoTable";
import NewTodoForm from "./components/NewTodoForm";

function App() {

    const [showAddTodoForm, setShowAddTodoForm] = useState(false);

    const [todos, setTodos] = useState([
            {rowNumber: 1, rowDescription: 'Feed cing', rowAssigned: 'Tommy'},
            {rowNumber: 2, rowDescription: 'Wash dishes', rowAssigned: 'Billy'},
            {rowNumber: 3, rowDescription: 'Do laundry', rowAssigned: 'Nina'}
        ]
    )

    const addTodo = (description, assigned) => {
        let rowNumber = 0;
        if (todos.length > 0) {
            rowNumber = todos[todos.length - 1].rowNumber + 1;
        } else {
            rowNumber = 1;
        }
        const newTodo = {
            rowNumber: rowNumber,
            rowDescription: description,
            rowAssigned: assigned
        }
        setTodos(todos => [...todos, newTodo]);
    }

    const deleteTodo = (deleteRowNumber) => {
        let filtered = todos.filter(function (value) {
            return value.rowNumber !== deleteRowNumber;
        });
        setTodos(filtered);
    }

    return (
        <div className='mt-5 container'>
            <div className='card'>
                <div className='card-header'>
                    Your Todos
                </div>
                <div className='card-body'>
                    <TodoTable todos={todos} deleteTodo={deleteTodo}/>
                </div>
            </div>
            <button className='btn btn-primary' onClick={() => setShowAddTodoForm(!showAddTodoForm)} style={{marginTop: 10}}>
                {showAddTodoForm ? 'Close New Todo' : 'New Todo'}
            </button>
            {showAddTodoForm &&
                <NewTodoForm addTodo={addTodo}/>
            }
        </div>
    );
}

export default App;
