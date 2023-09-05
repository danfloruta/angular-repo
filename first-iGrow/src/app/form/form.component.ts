import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TaskServiceService } from '../task-service.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  constructor(private taskServ: TaskServiceService){}
form: FormGroup = new FormGroup({
  'name': new FormControl(null, [Validators.required, Validators.minLength(3)]),
  'description': new FormControl(null, Validators.required)
})

onSubmit(){
  if(this.form.valid){
    this.taskServ.taskList.push({name: this.form.get('name')?.value, description: this.form.get('description')?.value, id: this.taskServ.taskList.length , checked: false})
    this.form.reset();
    console.log(this.taskServ.taskList.length);
    localStorage.setItem('tasks', JSON.stringify(this.taskServ.taskList))
  }
}
}
