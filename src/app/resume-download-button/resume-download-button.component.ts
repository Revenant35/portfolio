import { Component } from '@angular/core';
import {faFileDownload} from "@fortawesome/free-solid-svg-icons";
import {FaIconComponent} from "@fortawesome/angular-fontawesome";
import {MatAnchor} from "@angular/material/button";

@Component({
  selector: 'app-resume-download-button',
  standalone: true,
  imports: [
    FaIconComponent,
    MatAnchor
  ],
  templateUrl: './resume-download-button.component.html',
  styleUrl: './resume-download-button.component.scss'
})
export class ResumeDownloadButtonComponent {

    protected readonly faFileDownload = faFileDownload;
}
