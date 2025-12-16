import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLinkWithHref, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, RouterLinkWithHref, RouterLinkActive],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {  
  isSidePanelExpanded = signal<boolean>(true);
  toggleSidePanel() {
    this.isSidePanelExpanded.update((lastVal)=>{return !lastVal;})
  }
}
