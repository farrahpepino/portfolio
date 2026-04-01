import { Component } from '@angular/core';
import { Sidebar } from '../../Shared/sidebar/sidebar';
import { CommonModule } from '@angular/common';
import { SidebarMobile } from '../../Shared/sidebar-mobile/sidebar-mobile';

@Component({
  selector: 'app-about',
  imports: [Sidebar, SidebarMobile, CommonModule],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {

  isSidebarOpen = false;

  onSidebarToggle(state: boolean) {
    this.isSidebarOpen = state;
  }


  teaching = [
    {
      "role": "STEM Tutor",
      "company": "New Jersey City University",
      "date": "Jul 2022 - Present"
    },
    {
      "role": "Coding Instructor",
      "company": "SummerTech",
      "date": "Jun 2024 - Aug 2025"
    }
  ]

  research = [
    {
      "role": "Research Fellow",
      "company": "NASA Mosaics",
      "date": "Dec 2024 - May 2025"
    },
    {
      "role": "ML Researcher",
      "company": "New Jersey City University",
      "date": "Jul 2023 - Aug 2023"
    }
  ]

  education = [
    {
      "degree": "B.S. Computer Science",
      "university": "New Jersey City University"
    },
    {
      "degree": "Certificate, Human-Computer Interaction",
      "university": "Georgia Institute of Technology"
    }
  ]

  tools = [
    {
      "category": "Design & UI/UX",
      "tools": "Figma, Adobe Illustrator, Human-Computer Interaction (HCI)"
    },
    {
      "category": "Frontend & Creative Coding",
      "tools": "React, React Native, Angular, TypeScript, JavaScript, HTML/CSS"
    },
    {
      "category": "Backend & AI/ML",
      "tools": "Python, Node.js, .NET Core, Reinforcement Learning, OpenAI API"
    }
  ]
}
