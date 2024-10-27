import { Component } from '@angular/core';
import {faFileDownload} from "@fortawesome/free-solid-svg-icons";
import {FaIconComponent} from "@fortawesome/angular-fontawesome";
import {MatAnchor, MatIconAnchor} from "@angular/material/button";
import {faGithub} from "@fortawesome/free-brands-svg-icons";

@Component({
  selector: 'app-github-button',
  standalone: true,
  imports: [
    FaIconComponent,
    MatAnchor,
    MatIconAnchor
  ],
  templateUrl: './github-button.component.html',
  styleUrl: './github-button.component.scss'
})
export class GithubButtonComponent {

    protected readonly faGithub = faGithub;
}
