import React, {useState} from 'react'

export default function TodoApp() {

    const[todoCardList,setTodoCardList] = useState([''])

    const createCardComponent= () =>{
        var inputValue = document.getElementById('todoText')?.value;
        if(text !== undefined || text !==null){
            return;
        }
            let result = todoCardList
            result.push(text)
            setTodoCardList(result);
    }

        return (
            <main>
              <section className='createCard'>
                <input type="text" name="" id="todoText"/>
                <button onClick = {() => createCardComponent}>Create</button>
              </section>
              <section className="todoList">
              </section>
            </main>
        );
}
      