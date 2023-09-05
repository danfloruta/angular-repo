import { Component, DoCheck, OnInit} from '@angular/core';
import { TaskServiceService } from '../task-service.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements DoCheck, OnInit {
constructor(private taskServ: TaskServiceService){}
listOfTasks: any[] = [];
copyTasks: any[] = [];
totalTasks: number = 0;
completedTasks: number = 0;
// activeList: boolean = false;
// finishedList: boolean = false;

  ngOnInit(): void {
  if(localStorage.getItem('tasks')){
    this.taskServ.taskList = JSON.parse(localStorage.getItem('tasks') as string)
  }
  }

  ngDoCheck(): void {
    this.listOfTasks = this.taskServ.taskList;
    this.totalTasks = this.listOfTasks.length;
    this.completedTasks = this.listOfTasks.filter((item: any) => item.checked === true).length
  }
 
  onDelete(id: number){
    this.taskServ.taskList = this.taskServ.taskList.filter((item: any) => {
      return item.id !== id})
  }
  // showAllTasks(){
  //   this.copyTasks = [...this.listOfTasks];
   
  // }
  // showActiveTasks(){
  //   this.activeList = !this.activeList;
  //   this.finishedList = false;
  //   this.copyTasks = this.taskServ.taskList.filter((item: any) => item.checked === false)
  // }
  // showFinishedTasks(){
  //   this.finishedList = !this.finishedList;
  //   this.activeList = false;
  //   this.copyTasks = this.taskServ.taskList.filter((item: any) => item.checked === true)
  // }
  sortListName(){
    this.taskServ.taskList = this.taskServ.taskList.sort((a, b) => a.name < b.name ? -1 : 1)
  }
}
//