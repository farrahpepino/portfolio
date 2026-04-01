import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { About } from '../Components/Main/about/about';

@Component({
  selector: 'app-root',
  imports: [About],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('static');
}
