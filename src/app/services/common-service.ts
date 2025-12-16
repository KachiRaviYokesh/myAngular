import { Injectable } from '@angular/core';
interface TeamsDepartment {
  id:number,
  team:string,  
}
@Injectable({
  providedIn: 'root',
})
export class CommonService {
  teamsDepartment:TeamsDepartment[] = [
    {
      id: 1,
      team: 'UI/UX'
    },
    {
      id: 2,
      team: 'Frontend'
    },
    {
      id: 1,
      team: 'Backend'
    },
    {
      id: 1,
      team: 'Testing'
    },
  ]  
}
