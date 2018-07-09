import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  todoInput = '';
  thingsToDo = [];  
  
   createTodo() {
   let trimmedInput = this.todoInput.trim();
   if (trimmedInput !== "") {
     this.thingsToDo.push(this.todoInput);
   } 
   this.todoInput = "";
   }  

   editTodo(chore) {
     let index = this.thingsToDo.indexOf(chore);
     this.thingsToDo[index] = prompt('Please edit chore')
     
   }

    deleteTodo (chore){
      let index = this.thingsToDo.indexOf(chore);
     this.thingsToDo.splice(index,1) 
     
   }

   


}
