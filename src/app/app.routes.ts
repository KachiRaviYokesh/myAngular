import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'router-task',
        pathMatch: 'full'
    },
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
                children: [
                    {
                        path: '',
                        redirectTo: 'company',
                        pathMatch: 'full'
                    },
                    {
                        path: 'company',
                        loadComponent:()=>import('./components/router/about/company/company').then(c=>c.Company),
                    },
                    {
                        path: 'management',
                        loadComponent:()=>import('./components/router/about/management/management').then(c=>c.Management),
                    },
                    {
                        path: 'teams',
                        loadComponent:()=>import('./components/router/about/teams/teams').then(c=>c.Teams),
                    }
                ]
            },
            {
                path:'contacts',
                loadComponent:()=>import('./components/router/contacts/contacts').then(c=>c.Contacts),
            },
        ]
    },
];
