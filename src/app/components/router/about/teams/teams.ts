import { Component, inject } from '@angular/core';
import { CommonService } from '../../../../services/common-service';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-teams',
  imports: [RouterOutlet],
  templateUrl: './teams.html',
  styles: ``,
})
export class Teams {
  teams:CommonService = inject(CommonService);
  teamsDept = this.teams.teamsDepartment;
  teamGuys = this.teams.teamMembers;
  router:Router = inject(Router);
  activeUrl:ActivatedRoute = inject(ActivatedRoute);

  teamDepartment(path:string) {
    this.router.navigate([path], {
      relativeTo: this.activeUrl,
    });
  }
}
