import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  id = 123;
  title = 'Hello from App Component'; // property -> {{ title }}
  name = 'Angular';
  age = 30;

  // method -> event binding (click)
  sayHello() {
    alert('Hello from App Component');
    console.log('Hello from App Component');
  }

  delete() {
    console.log('Delete button clicked');
  }
}
