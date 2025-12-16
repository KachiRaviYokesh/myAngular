import { Component, signal } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {  
  isSidePanelExpanded = signal<boolean>(true);
  toggleSidePanel() {
    this.isSidePanelExpanded.update((lastVal)=>{return !lastVal;})
  }
}
