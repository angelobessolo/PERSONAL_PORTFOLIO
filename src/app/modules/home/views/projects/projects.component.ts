import { Component } from '@angular/core';
import { CardProjectComponent } from '../../../../shared/components/card-project/card-project.component';
import { ProjectCard } from '../../../../shared/interfaces/project-card.interface';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    CardProjectComponent,
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  Projects: ProjectCard[] = [
    {
      videoPath: '/assets/videos/pruebas.mp4',
      projectName: 'SHAKTI',
      projectDescription: 'SHAKTI es un aplicativo por medio del cual se puede gestionar dentro de una compañia todo el sistema de SST, ',
      projectUrl: '/assets/images/cobol.jpg',
      tags: {
        encabezado: 'Tecnologias Utilizadas',
        tags: ['cobol', 'proyecto']
      }
    },
    {
      videoPath: '/assets/videos/pruebas.mp4',
      projectName: 'SHAKTI',
      projectDescription: 'SHAKTI es un aplicativo por medio del cual se puede gestionar dentro de una compañia todo el sistema de SST,',
      projectUrl: '/assets/images/cobol.jpg',
      tags: {
        encabezado: 'Tecnologias Utilizadas',
        tags: ['cobol', 'proyecto']
      }
    },
  ]
}
