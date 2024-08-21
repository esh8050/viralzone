import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  // Dropdown visibility states
  isOurWorkVisible = false;
  isServicesVisible = false;
  isCountriesVisible = false;
  isAboutVisible = false;

  // List of services for dropdown
  servicesList = [
    {
      heading: 'Youtube',
      iconClass: 'fab fa-youtube',
      options: [
        { label: 'Hire YouTubers', link: '/link1' },
        { label: 'Youtube Video Production', link: '/link2' },
      ],
    },
    {
      heading: 'Instagram',
      iconClass: 'fab fa-instagram',
      options: [
        { label: 'Hire Instagrammers', link: '/link4' },
      ],
    },
    {
      heading: 'Hire Influencers',
      iconClass: 'fas fa-users',
      options: [
        { label: 'Hire Micro Influencers', link: '/link6' },
        { label: 'Hire Nano Influencers', link: '/link6' },
        { label: 'Hire Regional Influencers', link: '/link6' },
        { label: 'Hire Celebrity Influencers', link: '/link6' },
      ],
    },
    {
      heading: 'Others',
      iconClass: 'fas fa-th-list',
      options: [
        { label: 'User-Generated Video', link: '/link8' },
        { label: 'Meme Marketing', link: '/link9' },
        { label: 'LinkedIn Influencer Marketing', link: '/link9' },
        { label: 'Video Production', link: '/link9' },
        { label: 'Twitch Influencer Marketing', link: '/link9' },
        { label: 'Tik Tok', link: '/link9' },
      ],
    },
  ];

  // Toggle visibility functions for dropdowns
  toggleOurWork(isVisible: boolean): void {
    this.isOurWorkVisible = isVisible;
  }

  toggleServices(isVisible: boolean): void {
    this.isServicesVisible = isVisible;
  }

  toggleCountries(isVisible: boolean): void {
    this.isCountriesVisible = isVisible;
  }

  toggleAbout(isVisible: boolean): void {
    this.isAboutVisible = isVisible;
  }
}
