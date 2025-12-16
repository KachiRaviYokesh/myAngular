import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'router-task',
        loadComponent:()=>import('./components/router/router').then(c=>c.Router)
    },
];
