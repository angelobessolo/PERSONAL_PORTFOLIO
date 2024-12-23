import { Component } from '@angular/core';
import { CardProjectComponent } from '../../../../shared/components/card-project/card-project.component';
import { ProjectCard } from '../../../../shared/interfaces/project-card.interface';
import { StatusProject } from '../../../../shared/enums/status-project.enum';

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
      videoPath: '/assets/videos/shakti-video.mp4',
      projectName: 'SHAKTI',
      status: StatusProject.InProgress,
      projectDescription: 'SHAKTI es un aplicativo para gestionar el sistema de SST en una compañía, optimizando procesos y cumpliendo con la normativa laboral vigente en Colombia.',
      projectUrl: '/assets/images/cobol.jpg',
      tags: {
        encabezado: 'Tecnologias Utilizadas',
        tags: ['Angular', 'Nest JS', 'PostgreSQL']
      }
    },
    {
      videoPath: '/assets/videos/cashup-video.mp4',
      projectName: 'CASHUP',
      status: StatusProject.InProgress,
      projectDescription: 'CASHUP es un aplicativo para gestionar ingresos y egresos, facilitando el control y organización de gastos personales de manera personalizada y eficiente.',
      projectUrl: '/assets/images/cobol.jpg',
      tags: {
        encabezado: 'Tecnologias Utilizadas',
        tags: ['Angular', 'Nest JS', 'MongoDB']
      }
    },
  ]
}
