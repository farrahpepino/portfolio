import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar-mobile',
  imports: [CommonModule],
  templateUrl: './sidebar-mobile.html',
  styleUrl: './sidebar-mobile.css',
})
export class SidebarMobile {

  @Output() sidebarToggled = new EventEmitter<boolean>();

  menuOpen = false;

  toggleMenu(){
    this.menuOpen = !this.menuOpen;
    this.sidebarToggled.emit(this.menuOpen);
  }

  constructor(private route: Router){}

  home(){
    this.route.navigateByUrl('/home');
    this.toggleMenu();
  }

  about(){
    this.route.navigate(['']);
    this.toggleMenu();
  }
}
