import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BlogServiceService } from '../blog-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  constructor(private blogS: BlogServiceService, private router: Router){}
form: FormGroup = new FormGroup({
  'title': new FormControl(null, Validators.required),
  'author': new FormControl(null, Validators.required),
  'publishDate': new FormControl(null, Validators.required),
  'summary': new FormControl(null, Validators.required)
})

onSubmit(){
  if(this.form.valid){
    this.blogS.blogList.push({id: this.blogS.blogList.length, title: this.form.get('title')?.value, author: this.form.get('author')?.value, publishDate: this.form.get('publishDate')?.value, summary: this.form.get('summary')?.value, comments: []})
    this.router.navigate(['/'])
  }
}
}
