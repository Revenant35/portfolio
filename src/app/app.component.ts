import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {FooterComponent} from "./footer/footer.component";
import {ToolbarComponent} from "./toolbar/toolbar.component";
import {TechnologiesCarouselComponent} from "./technologies-carousel/technologies-carousel.component";
import {BioComponent} from "./bio/bio.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FooterComponent, ToolbarComponent, TechnologiesCarouselComponent, BioComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portfolio';
}
