import  React  from "react";

import TodoForm from "./TodoForm1.js"




    function MyApp () {
        const [todos, setTodos] = React.useState ([
            {
                text: 'Start reading React files',
                isCompleted:  false,
            },
            {
                text: 'Make some coffee',
                isCompleted:  false,
            },
            {
                text: 'Start Coding React files',
                isCompleted:  false,
            }
        ]);

        const  addTodo = text => {
            const newTodos = [...todos, {text: text, isCompleted: false}];
            setTodos (newTodos);
            }

        const removeTodo = index => {
        let temp = [...todos];
        temp.splice(index,1);
        setTodos(temp);
        }
    /*    
        const completeTodo = index => {
        let temp = [...todos];
        temp[index].isCompleted = true;
        setTodos(temp);
        }
    */  
        return(
            <>
           <div className="app">
              <div className="todo-list">

              
                
                {todos.map ((item, i) => <div  key = {i} id = {i} onClick = {removeTodo}>{item.text}</div>)} 

                <TodoForm addTodo={addTodo} />

            </div>
              
            </div>
                
          

               


            </>
        );
    }
        
        
    export default MyApp