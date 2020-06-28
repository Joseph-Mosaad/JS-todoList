
let button =document.querySelector("button");
let container = document.querySelector("#container");
let inputField = document.querySelector("#task-name");
let todos=[];

//let undobtn = document.getElementsByClassName("undo")[0];

 let removeTodo =(listItem)=>{
        let newTodos = todos.filter((todo) => todo!==listItem.innerText);
        todos =newTodos;
        renderTodos(); 
};



let renderTodos =()=>{
    container.innerHTML ="";
    todos.forEach((todo)=>{
    let listItem = document.createElement("li");
    listItem.innerHTML= (todo);
    container.appendChild(listItem);
    listItem.addEventListener("click", (e)=>{setTimeout(function conf(){
        let answer = confirm ("Confirm delete this item?");
        if (answer==true){
            return removeTodo(listItem);
        } 
    }, 300)})
});
};

button.addEventListener("click",(e)=>{
    e.stopPropagation();
    let taskName =inputField.value;
    todos.push(taskName);
    renderTodos();
    inputField.value ="";

});







// let button =document.querySelector("button");
// let container = document.querySelector("#container");
// let inputField = document.querySelector("#task-name");
// let todos=[];

// let undobtn = document.getElementsByClassName("undo")[0];




//  let removeTodo =(listItem)=>{
//     setTimeout(() => {
//         let newTodos = todos.filter((todo) => todo!==listItem.innerText);
//         todos =newTodos;
//         renderTodos();
        
//     }, 5000);
    

// };






// let undoBtnShow = ()=>{
   
//     undobtn.style.display="inline";
//  setTimeout(() => {undobtn.style.display = "none";
     
//  }, 5000);


// };

 




// let renderTodos =()=>{
//     container.innerHTML ="";
//     todos.forEach((todo)=>{
//     let listItem = document.createElement("li");
//     listItem.innerHTML= (todo);
//     container.appendChild(listItem);
//     listItem.addEventListener("click", (e)=>removeTodo(listItem));

//     listItem.addEventListener("click", (e)=>undoBtnShow());
   
// });
// };



// let undoRender =()=>{
 

//     clearTimeout(removeTodo);

// };






// undobtn.addEventListener("click", undoRender(removeTodo));


 





// button.addEventListener("click",(e)=>{
//     e.stopPropagation();
//     let taskName =inputField.value;
//     todos.push(taskName);
//     renderTodos();
//     inputField.value ="";

// });





