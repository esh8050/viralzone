import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-clients',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './clients.component.html',
  styleUrl: './clients.component.css'
})
export class ClientsComponent {
  logos = [
    { src: '../../assets/logos/samsung.png', alt: 'Logo 1' },
    { src: '../../assets/logos/Asus.png', alt: 'Logo 18' },
    { src: '../../assets/logos/upstox.png', alt: 'Logo 3' },
    { src: '../../assets/logos/lenovo.png', alt: 'Logo 4' },
    { src: '../../assets/logos/nordvpn.png', alt: 'Logo 5' },
    { src: '../../assets/logos/udictionary.png', alt: 'Logo 6' },
    { src: '../../assets/logos/meesho.png', alt: 'Logo 2' },
    { src: '../../assets/logos/exness.png', alt: 'Logo 8' },
    { src: '../../assets/logos/plotx.png', alt: 'Logo 9' },
    { src: '../../assets/logos/dominos.png', alt: 'Logo 10' },
    { src: '../../assets/logos/smallcase.png', alt: 'Logo 11' },
    { src: '../../assets/logos/drfone.png', alt: 'Logo 12' },
    { src: '../../assets/logos/nostragamus.png', alt: 'Logo 13' },
    { src: '../../assets/logos/winzo.png', alt: 'Logo 14' },
    { src: '../../assets/logos/probo.png', alt: 'Logo 15' },
    { src: '../../assets/logos/relevel.png', alt: 'Logo 16' },
    { src: '../../assets/logos/happn.png', alt: 'Logo 17' },
    { src: '../../assets/logos/gamezop.png', alt: 'Logo 7' },
    // Add all logos here
  ];
}
