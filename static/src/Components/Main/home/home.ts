import { Component } from '@angular/core';
import { Sidebar } from '../../Shared/sidebar/sidebar';
import { SidebarMobile } from '../../Shared/sidebar-mobile/sidebar-mobile';
import { CommonModule } from '@angular/common';
import { YouTubePlayerModule } from '@angular/youtube-player';

@Component({
  selector: 'app-home',
  imports: [Sidebar, SidebarMobile, CommonModule, YouTubePlayerModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

  isSidebarOpen = false;

  onSidebarToggle(state: boolean) {
    this.isSidebarOpen = state;
  }

  ux = [
    {
      "videoId": "epMv6NNm7LM",
      "github": "https://github.com/farrahpepino/relationship-gpt",
      "title": "RelationshipGPT"
    },
    {
      "videoId": "AoDgb6FLF0o",
      "github": "https://github.com/farrahpepino/ecommerce-app",
      "title": "E-commerce application"
    },
    {
      "videoId": "U8A_GpiDMRo",
      "github": "https://github.com/farrahpepino/social-networking-app",
      "title": "Social Networking application"
    }
  ]

}
