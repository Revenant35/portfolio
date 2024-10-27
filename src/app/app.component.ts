import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {FooterComponent} from "./footer/footer.component";
import {ToolbarComponent} from "./toolbar/toolbar.component";
import {TechnologiesCarouselComponent} from "./technologies-carousel/technologies-carousel.component";
import {faFileDownload} from "@fortawesome/free-solid-svg-icons";
import {ResumeDownloadButtonComponent} from "./Buttons/resume-download-button/resume-download-button.component";
import {AboutMeComponent} from "./about-me/about-me.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FooterComponent, ToolbarComponent, TechnologiesCarouselComponent, ResumeDownloadButtonComponent, AboutMeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portfolio';
  protected readonly faFileDownload = faFileDownload;
}
