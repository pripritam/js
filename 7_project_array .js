const todolist=[{
    name:'sdfsdf',
    date: '2022-23-22'},
{
    name:'ksdsbb',
    date:'2022-34-33'
}];
rendertodolist();
function rendertodolist(){

         let todolisthtml='';
        for(let i=0;i<todolist.length;i++){
            const todoobject=todolist[i];                             //${}use when value is change,change js means doesn not change html
            const name=todoobject.name;
            const date=todoobject.date;
            const html=               //at first we use p tag then div use beacuse in p tag name date grid can not devide in 3 part
            `<div> ${name}</div>
            <div> ${date}</div>
           
             <button onclick="
             todolist.splice(${i},1)         
             rendertodolist();
             " class="delete-todo-button"> Delete </button>
             `;//generate html in js 
            // const html=todo;
            todolisthtml+=html;
        }
        console.log(todolisthtml);

        document.querySelector('.js-todo-list')
            .innerHTML=todolisthtml;
}



function addtodo(){
const inputelement=    document.querySelector('.js-name-input');
const name=inputelement.value;
                                                                                             // console.log(name);


const dateinputele=document.querySelector(".js-due-date-input");
const date=dateinputele.value



todolist.push(
   { name:name,
    date:date
}
);
                                                   // console.log(todolist);




inputelement.value='';

rendertodolist();

}