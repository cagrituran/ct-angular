import { Component } from '@angular/core';
import { Model } from './model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ct-angular';
 model = new Model();

 getUser(){
  return this.model.user;
 }
 getItems(){
  return this.model.items;
 }
}
