import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  imports: [],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
})
export class Sidebar {
  constructor(private route: Router){}

  home(){
    this.route.navigateByUrl('/home');
  }

  about(){
    this.route.navigate(['']);
  }

}
