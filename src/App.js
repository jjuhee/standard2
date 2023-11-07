import './App.css';
import {useState} from "react"
import uuid from 'react-uuid'

function App() {
  const initTodos = [
    {id:1, title:"제목", contents:"내용", isDone:false},
    {id:2, title:"제목", contents:"내용", isDone:true}];
  
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");
  const [todos, setTodos] = useState(initTodos);


  const addTodo = function () {
    const newTodo = {
      id : uuid(),
      title : title,
      contents : contents,
      isDone : false,
    }

    setTodos([...todos, newTodo]);
  }

  const deleteTodo = function(e) {
    
    const newTodos = todos.filter((item)=>{
      if(item.id!==e.target.id)
        return item;
    })
    console.log(newTodos, e);
    setTodos(newTodos);
  }

  return (
    <div>
    <header>
      제목 <input value={title} onChange={(e) => setTitle(e.target.value)}/>
      내용 <input value={contents} onChange={(e) => setContents(e.target.value)}/>
      <button onClick={addTodo}>확인</button>
    </header>

    <main>
      <div>
        <h1>할일 목록</h1>
        {
          todos.filter((item)=>(!item.isDone))
          .map(function (item) {
            return (
              <div style={{border:"1px solid black", width:"300px"}} >
                <h2>{item.title}</h2>
                <p>{item.contents}</p>
                <button onClick={(e)=> deleteTodo(e)}>delete</button>
              </div>
            )
          })
        }
      </div>

      <h1>완료 목록</h1>
      {
        todos.filter((item)=>(item.isDone))
        .map(function (item) {
          return (
            <div style={{border:"1px solid black", width:"300px"}} >
              <h2>{item.title}</h2>
              <p>{item.contents}</p>
              <button onClick={(e) => deleteTodo(e)}>delete</button>
            </div>
          )
        })
      }

    </main>

    <footer>
      footer
    </footer>
    </div>
  );
}

export default App;
