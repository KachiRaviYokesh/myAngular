import { Component, inject } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-about',
  imports: [RouterOutlet],
  templateUrl: './about.html',
})
export class About {
  private router:Router = inject(Router);
  private currentUrl:ActivatedRoute = inject(ActivatedRoute);
  activeRoute!:string;
  
  constructor() {
    this.router.events
      .pipe(filter(eve => eve instanceof NavigationEnd))
      .subscribe(() => {
        this.activeRoute =
          this.currentUrl.firstChild?.snapshot.url[0]?.path || 'company';
      });
  }

  // If we are using this method then we are facing change.detection(Multiple time calling)
  // get activeRoute(): string {
  //   return this.currentUrl.firstChild?.snapshot.url[0]?.path || 'company';
  // }

  secondLevelBtn(path: string) {
    this.router.navigate([path], {
      relativeTo: this.currentUrl
    });
  }
}