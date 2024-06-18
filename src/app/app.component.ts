import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'PDS.SPA';
  message:string = 'Hello, PDS.SPA';
  ngOnInit() {
    window.addEventListener('message', (event) => {
      // Make sure the message is from a trusted source
      if (event.origin === 'http://localhost:62536/') {
        this.message = event.data;
        console.log('Message received from WebForms:', event.data);
        // Handle the message
      }
    });
  }
}
