import { Injectable } from '@angular/core';
import{AngularFirestore,AngularFirestoreCollection}from'@angular/fire/compat/firestore'

@Injectable({
  providedIn: 'root'
})

export class TodoService {
  firestoreCollection:AngularFirestoreCollection;

  constructor(private firestore:AngularFirestore) { 
    this.firestoreCollection=firestore.collection('todos')
  }

  
addTodo(title:string){
  this.firestoreCollection.add({
    title:title,
    isDone: false
  })
} 
updateTodoStatus(id:string,newstatus:boolean){
  this.firestoreCollection.doc(id).update({isDone:newstatus});
}
deleteTodo(id:string){
  this.firestoreCollection.doc(id).delete();
}
}

export interface Todo {
  title: string;
  isDone: boolean;
  id?: string;
}