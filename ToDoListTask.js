// Todo list task

function TodoListTask(Todo,Completed)
{
    this.Todo=Todo;
    this.Completed=Completed;
    this.add=function (title){
        if(title==="")
        {
            return -1;
        }
        else{
           let obj={
            id:Todo.length+1,
            task:title,
           }
           Todo.push(obj);
           return obj.id;
        }
    }
    this.remove=function(id){
        var isValidId=Todo.some(obj=>obj.id===id);
        if(isValidId)
        {
            var taskToBeRemovedIndex=Todo.findIndex(obj=>obj.id===id);
            Todo.splice(taskToBeRemovedIndex,1);
            return true;
        }
        else{
            return false;
        }
    }
    this.update=function(id,title){
        var isValidId=Todo.some(obj=>obj.id===id);
        if(isValidId)
        {
            var taskToBeUpdatedIndex=Todo.findIndex(obj=>obj.id===id);
            Todo[taskToBeUpdatedIndex].task=title;
            return true;
        }
        else{
            return false;
        }
    }
    this.markAsCompleted=function(id){
        var isValidId=Todo.some(obj=>obj.id===id);
        if(isValidId)
        {
            var taskToBeRemovedIndex=Todo.findIndex(obj=>obj.id===id);
            var taskToBeMoved=Todo.splice(taskToBeRemovedIndex,1);
            let obj={
                id:taskToBeMoved[0].id,
                task:taskToBeMoved[0].task,
            }
            Completed.push(obj);
            return true;
        }
        else{
            return false;
        }
    }
}

let Todo= new Array();
let Completed= new Array();

var todolist=new TodoListTask(Todo,Completed);
var res=todolist.add("learn javascript");
console.log(`A new task with id ${res} is generated`);
var res=todolist.add("learn node");
console.log(`A new task with id ${res} is generated`);
var res=todolist.add("learn express");
console.log(`A new task with id ${res} is generated`);
var res=todolist.remove(2);
res?console.log(`A task with id 2 is deleted`):console.log(`Id no found`);
var res=todolist.update(1,"learn node");
res?console.log(`A task with id 1 is updated`):console.log(`Id no found`);
var res=todolist.markAsCompleted(3);
res?console.log(`A task with id 3 is moved`):console.log(`Id no found`);
var res=todolist.markAsCompleted(1);
res?console.log(`A task with id 3 is moved`):console.log(`Id no found`);
console.log(Todo);
console.log(Completed);

