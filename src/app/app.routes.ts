import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        // canActivate: [isNotAuthenticatedGuard],
        loadComponent: () => import('./modules/home/views/home-layout/home-layout.component').then( c => c.HomeLayoutComponent)
    },
    {
        path: 'home',
        // canActivate: [isNotAuthenticatedGuard],
        loadComponent: () => import('./modules/home/views/home-layout/home-layout.component').then( c => c.HomeLayoutComponent),
        children: [
            {
                path: 'main',
                // canActivate: [isNotAuthenticatedGuard],
                loadComponent: () => import('./modules/home/views/main/main.component').then( c => c.MainComponent),
                data: { 
                    titulo: 'Inicio',
                    icon: 'home', 
                },
            },
            {
                path: 'experience',
                // canActivate: [isNotAuthenticatedGuard],
                loadComponent: () => import('./modules/home/views/experience/experience.component').then( c => c.ExperienceComponent),
                data: { 
                    titulo: 'Experiencia',
                    icon: 'work_history', 
                },
            },
            {
                path: 'projects',
                // canActivate: [isNotAuthenticatedGuard],
                loadComponent: () => import('./modules/home/views/projects/projects.component').then( c => c.ProjectsComponent),
                data: { 
                    titulo: 'Proyectos',
                    icon: 'sports_score', 
                },
            },
        ]
    },
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full',
    },
    // {   
    //     path: '**', 
    //     loadComponent: () => import('./modules/auth/pages/none-page/none-page.component').then(c => c.NonePageComponent )  
    // },
];
