import { Component, inject, OnInit, signal } from '@angular/core';
import { RouterOutlet, RouterLinkWithHref, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LoaderService } from './services/loader-service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, RouterLinkWithHref, RouterLinkActive],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit {
  isLoaderVisible = inject(LoaderService);
  isSidePanelExpanded = signal<boolean>(true);
  loaderStatus = signal<boolean>(false);
  ngOnInit(): void {
    this.loaderStatus = this.isLoaderVisible.isLoaderShowing;
  }
  toggleSidePanel() {
    this.isSidePanelExpanded.update((lastVal)=>{return !lastVal;})
  }
}
