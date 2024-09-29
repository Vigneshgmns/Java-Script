let input = document.getElementById("input");
let button = document.getElementById("add");
let todoList = document.getElementById("todoList");

let todos = []

window.onload = () => {
    todos = JSON.parse(localStorage.getItem('Todos')) || []
    todos.map(todo => addToDo(todo)) 
}



button.addEventListener('click',()=>{
    todos.push(input.value)
    localStorage.setItem("Todos",JSON.stringify(todos))
    console.log(todos)
    if(input.value ===''){
        alert("Enter the Task in ToDoList....!")
    }else{
        addToDo(input.value)
        input.value=''
    }
})



const addToDo = ( todo ) =>{
     let list = document.createElement('li')
     list.innerHTML = todo
     todoList.appendChild(list)

     list.addEventListener('click',()=>{
        list.style.textDecoration = 'line-through'
        remove(todo)
     })

     list.addEventListener('dblclick',()=>{
        todoList.removeChild(list)
        remove(todo)
     })
}

const remove = (todo) =>{
      let index = todos.indexOf(todo)
      if(index>-1){
        todos.splice(index,1)
      }
      localStorage.setItem("Todos",JSON.stringify(todos))
}