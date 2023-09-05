import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {NgxPaginationModule} from 'ngx-pagination';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { HomeComponent } from './home/home.component';
import { FormComponent } from './form/form.component';
import { CardBlogComponent } from './card-blog/card-blog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
{path: '', component: HomeComponent},
{path: 'details/:id', component: DetailsComponent},
{path: 'form', component: FormComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DetailsComponent,
    FormComponent,
    CardBlogComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    FormsModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
