import  React  from "react";

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
        const [value, setValue]= React.useState ('');
        const handleSubmit = e => {
            e.preventDefault ();
            if (!value) return;
            const newTodos = [...todos, {text: value, isCompleted: false}];
            setTodos (newTodos);
            setValue ('');
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
            
        return (
            <>
             
            <h1 className = "card col-sm-4 mx-auto " style = {{ backgroundColor: "teal", textAlign : "center", color: "white", marginTop : "200px"}}> ToDos List</h1>
            
            <div className=" card col-sm-4 mx-auto   bg-info w-25  p-5 shadow-sm border-success "  style =  {{ fontSize: "30px"}}>
            <div className="mt-3 mr-3 textAlign-right   list-group-item " >
                    <ul    style =  {{ color: "purple", listStyleType: "decimal"}}>
                        {todos.map ((item, i) => 
                        <li 
                         key = {i} id = {i} onClick = {removeTodo}>{item.text}</li>)} 
                    </ul>
                </div>
            </div>

            <form onSubmit = { handleSubmit}>
                <div style = {{ textAlign : "center" }}>
                <div className="  col-sm-4 mx-auto bg-primary
                  w-25  p-3 mt-3 shadow-sm border-success "  style =  {{ fontSize: "30px"}}>
                <div class="mt-3 mr-3 textAlign-right shadow-sm --bs-info-text-emphasis list-group ">
                   

                    <input
                    
                        type="text" 
                        className= "form-control  " 
                        value = {value} 
                        placeholder = " Add todo...." 
                        onChange = {(e) => setValue(e.target.value)} />


                </div>
                </div> 
                </div>                
            </form>
            </>

        );
    }
        
        
    export default MyApp