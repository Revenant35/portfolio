import { Component } from '@angular/core';
import {MatIconAnchor} from "@angular/material/button";
import {MatIcon} from "@angular/material/icon";

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    MatIconAnchor,
    MatIcon
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

}
