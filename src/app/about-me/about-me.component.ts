import { Component } from '@angular/core';
import {ResumeDownloadButtonComponent} from "../Buttons/resume-download-button/resume-download-button.component";
import {GithubButtonComponent} from "../buttons/github-button/github-button.component";
import {LinkedinButtonComponent} from "../buttons/linkedin-button/linkedin-button.component";

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [
    ResumeDownloadButtonComponent,
    GithubButtonComponent,
    LinkedinButtonComponent
  ],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss'
})
export class AboutMeComponent {

}
