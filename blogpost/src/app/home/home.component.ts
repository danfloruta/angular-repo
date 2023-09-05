import { Component, DoCheck, OnInit } from '@angular/core';
import { BlogServiceService } from '../blog-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  constructor(private blogS: BlogServiceService){}

blogs: any[] = [];
copyBlogs: any[] = [];
searchItem: string = '';
p: number = 0;

ngOnInit(): void {
  this.blogs = [...this.blogs, ...this.blogS.blogList];
  this.copyBlogs = [...this.blogs]
}


searchPost(){
  if(this.searchItem.length > 0){
    this.copyBlogs = this.blogs.filter((item: any) => item.title.toLowerCase() === this.searchItem.toLowerCase() || item.author.toLowerCase() === this.searchItem.toLowerCase())
    this.searchItem = '';
  }else{
    this.copyBlogs = this.blogs
  }
}
}
