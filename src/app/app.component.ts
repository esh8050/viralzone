import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import {MainIntroComponent} from './main-intro/main-intro.component'
import {FocusContentComponent} from './focus-content/focus-content.component'
import {InfluencersComponent} from './influencers/influencers.component'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, MainIntroComponent, FocusContentComponent, InfluencersComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'viralzone';
}
