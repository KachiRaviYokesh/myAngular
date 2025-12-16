import { Component } from '@angular/core';
import { RouterOutlet, RouterLinkWithHref, RouterLinkActive } from "@angular/router";

@Component({
  selector: 'app-router',
  imports: [RouterOutlet, RouterLinkWithHref, RouterLinkActive],
  templateUrl: './router.html',
})
export class Router {

}
