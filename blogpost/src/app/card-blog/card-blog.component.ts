import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-blog',
  templateUrl: './card-blog.component.html',
  styleUrls: ['./card-blog.component.css']
})
export class CardBlogComponent {
@Input() blog: any = '';
}
