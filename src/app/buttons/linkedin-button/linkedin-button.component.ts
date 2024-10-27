import { Component } from '@angular/core';
import {faFileDownload} from "@fortawesome/free-solid-svg-icons";
import {FaIconComponent} from "@fortawesome/angular-fontawesome";
import {MatAnchor, MatIconAnchor} from "@angular/material/button";
import {faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons";

@Component({
  selector: 'app-linkedin-button',
  standalone: true,
  imports: [
    FaIconComponent,
    MatAnchor,
    MatIconAnchor
  ],
  templateUrl: './linkedin-button.component.html',
  styleUrl: './linkedin-button.component.scss'
})
export class LinkedinButtonComponent {

    protected readonly faLinkedin = faLinkedin;
}
