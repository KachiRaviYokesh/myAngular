import { Component, inject } from '@angular/core';
import { CommonService } from '../../../../services/common-service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-team-members',
  imports: [],
  templateUrl: './team-members.html',
  styles: ``,
})
export class TeamMembers {
  teams:CommonService = inject(CommonService);
  currentUrl:ActivatedRoute = inject(ActivatedRoute);
  teamMember?: { id: number; members: string[] };
  ngOnInit(): void {
    const id = Number(this.currentUrl.snapshot.paramMap.get('id'));
    this.teamMember = this.teams.teamMembers.find(
      team => team.id === id
    );
  }
}
