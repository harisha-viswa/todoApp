import { Component,OnInit } from '@angular/core';
import { TodoService } from '../shared/todo.service';
import { log } from 'console';
import { title } from 'process';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styles:[]
})
export class TodoComponent implements OnInit{
  todos: any[]=[];
  constructor(private todoServie:TodoService) {}
  
  ngOnInit(): void {
    this.todoServie.firestoreCollection.valueChanges({idField:'id'}).subscribe(item=>{this.todos=item.sort((a:any,b:any) => 
      {return a.isDone -b.isDone } );

    })
  }
  
  onClick(titleInput:HTMLInputElement){
    if(titleInput.value){

  this.todoServie.addTodo(titleInput.value);
  //title;
  titleInput.value="";
  
  }
}
onStatusChange(id:string,newstatus:boolean){
  this.todoServie.updateTodoStatus(id,newstatus);

}
onDelete(id:string){
this.todoServie.deleteTodo(id)
}

}

