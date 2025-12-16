import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'router-task',
        loadComponent:()=>import('./components/router/router').then(c=>c.Router),
        children: [
            {
                path:'home',
                loadComponent:()=>import('./components/router/home/home').then(c=>c.Home),
            },
            {
                path:'about',
                loadComponent:()=>import('./components/router/about/about').then(c=>c.About),
            },
            {
                path:'contacts',
                loadComponent:()=>import('./components/router/contacts/contacts').then(c=>c.Contacts),
            },
        ]
    },
];
