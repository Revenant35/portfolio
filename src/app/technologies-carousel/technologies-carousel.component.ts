import { Component } from '@angular/core';
import {TechnologiesCardComponent} from "../technologies-card/technologies-card.component";
import {MatIconModule} from "@angular/material/icon";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {faAngular, faAws, faPython} from "@fortawesome/free-brands-svg-icons";

@Component({
  selector: 'app-technologies-carousel',
  standalone: true,
  imports: [
    TechnologiesCardComponent,
    MatIconModule,
    FontAwesomeModule
  ],
  templateUrl: './technologies-carousel.component.html',
  styleUrl: './technologies-carousel.component.scss'
})
export class TechnologiesCarouselComponent {

  protected readonly faAws = faAws;
  protected readonly faAngular = faAngular;
  protected readonly faPython = faPython;
}
