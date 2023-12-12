import { Component } from '@angular/core';
import { UrlShortnenService } from '../_services/url-shortnen.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  originalUrl: string = '';
  shortenedUrl: string = '';

  constructor(private urlShortenerService: UrlShortnenService) {}

  shortenUrl() {
    const longUrl: any = typeof this.originalUrl === 'string'
      ? this.originalUrl
      : { originalUrl: this.originalUrl };

    this.urlShortenerService.shortenUrl(longUrl).subscribe(
      (response: any) => {
        console.log(response);

        // Assuming the response has a 'shortUrl' property
        this.shortenedUrl = response.shortUrl;
      },
      (error) => {
        console.error('Error shortening URL:', error);
      }
    );
  }
}
