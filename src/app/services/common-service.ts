import { Injectable } from '@angular/core';
interface TeamsDepartment {
  id:number,
  team:string,  
}
interface TeamMembers {
  id:number,
  members:string[],  
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
      id: 3,
      team: 'Backend'
    },
    {
      id: 4,
      team: 'Testing'
    },
  ];

  teamMembers:TeamMembers[] = [
    {
      id: 1,
      members: ['Kapil Dev', 'Gavaskar', 'krishnamachari Srikkanth']
    },
    {
      id: 2,
      members: ['Sourav Ganguly', 'Sachin Tendulkar', 'Yuvraj Singh']
    },
    {
      id: 3,
      members: ['MS Dhoni', 'Suresh Raina', 'Ravindra Jadeja']
    },
    {
      id: 4,
      members: ['Rohit Sharma', 'Virat Kholi', 'Jasprit Bumrah']
    },
  ]
}
