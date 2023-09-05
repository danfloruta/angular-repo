import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogServiceService } from '../blog-service.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
constructor(private route: ActivatedRoute, private blogS: BlogServiceService){}

blog: any = '';
blogId: number = 0;
ngOnInit(): void {
  this.route.params.subscribe((params: any) => {
    const id = params['id']
    this.blogId = +params['id']
    this.blog = this.blogS.blogList.find((item: any) => item.id === +id)
  })
}
submitReview(text: any){
if(this.blog.id === this.blogId){
  console.log(text);
  
  this.blog.comments.push(text);
}
}
}
//if the item from the blogList is the same as the one that is active push comment to comment array of the item
