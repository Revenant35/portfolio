import { Component } from '@angular/core';
import {ResumeDownloadButtonComponent} from "../buttons/resume-download-button/resume-download-button.component";
import {GithubButtonComponent} from "../buttons/github-button/github-button.component";
import {LinkedinButtonComponent} from "../buttons/linkedin-button/linkedin-button.component";
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [
    ResumeDownloadButtonComponent,
    GithubButtonComponent,
    LinkedinButtonComponent,
    NgOptimizedImage
  ],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss'
})
export class AboutMeComponent {

}
