import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {FooterComponent} from "./footer/footer.component";
import {ToolbarComponent} from "./toolbar/toolbar.component";
import {TechnologiesCarouselComponent} from "./technologies-carousel/technologies-carousel.component";
import {faFileDownload} from "@fortawesome/free-solid-svg-icons";
import {ResumeDownloadButtonComponent} from "./buttons/resume-download-button/resume-download-button.component";
import {AboutMeComponent} from "./about-me/about-me.component";
import {MatChip, MatChipSet} from "@angular/material/chips";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FooterComponent, ToolbarComponent, TechnologiesCarouselComponent, ResumeDownloadButtonComponent, AboutMeComponent, MatChipSet, MatChip],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portfolio';
  protected readonly faFileDownload = faFileDownload;
}
