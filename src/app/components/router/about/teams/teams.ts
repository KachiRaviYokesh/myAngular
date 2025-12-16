import { Component, inject } from '@angular/core';
import { CommonService } from '../../../../services/common-service';

@Component({
  selector: 'app-teams',
  imports: [],
  templateUrl: './teams.html',
  styles: ``,
})
export class Teams {
  teams:CommonService = inject(CommonService);
  teamsDept = this.teams.teamsDepartment;
}
