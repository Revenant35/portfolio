import { Component } from '@angular/core';
import {TechnologiesCardComponent} from "../technologies-card/technologies-card.component";
import {MatIconModule} from "@angular/material/icon";

@Component({
  selector: 'app-technologies-carousel',
  standalone: true,
  imports: [
    TechnologiesCardComponent,
    MatIconModule
  ],
  templateUrl: './technologies-carousel.component.html',
  styleUrl: './technologies-carousel.component.scss'
})
export class TechnologiesCarouselComponent {

}
