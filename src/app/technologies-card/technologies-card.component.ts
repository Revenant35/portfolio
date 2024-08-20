import {Component, Input} from '@angular/core';
import {MatCardModule} from "@angular/material/card";
import {MatIconModule} from "@angular/material/icon";

@Component({
  selector: 'app-technologies-card',
  standalone: true,
  imports: [
    MatCardModule,
    MatIconModule,
  ],
  templateUrl: './technologies-card.component.html',
  styleUrl: './technologies-card.component.scss'
})
export class TechnologiesCardComponent {
  @Input({required: true}) src!: string;
  @Input({required: true}) title!: string;

}
