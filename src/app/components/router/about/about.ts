import { Component, inject } from '@angular/core';
import { RouterOutlet, Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-about',
  imports: [RouterOutlet],
  templateUrl: './about.html',
  styles: ``,
})
export class About {
  router:Router = inject(Router);
  currentUrl:ActivatedRoute = inject(ActivatedRoute);
  activeRoute:string = 'company';
  public secondLevelBtn(path:string) {
    this.activeRoute = path;
    this.router.navigate([path],{
      relativeTo:this.currentUrl,
    });
  }
}
