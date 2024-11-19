import {ChangeDetectionStrategy, Component, signal} from '@angular/core';
import {provideNativeDateAdapter} from '@angular/material/core';
import { CardsComponent } from '../../../../shared/components/cards/cards.component';
import { CardJob } from '../../../../shared/interfaces/card-job.interface';
import { CommonModule } from '@angular/common';
import { BreadCrumbComponent } from '../../../../shared/components/bread-crumb/bread-crumb.component';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [
    CardsComponent,
    CommonModule,
    BreadCrumbComponent
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})
export class ExperienceComponent {
  cardJob: CardJob[] = [
    {
      primaryPathImage: '/assets/images/cobol.jpg',
      secondaryPathImage: '/assets/images/home_profile.svg',
      frontCard: [
        // { label: 'CARGO:', icon: 'badge', description: 'Ingeniero Desarrollo y Soporte' },
        { label: 'EMPRESA:', icon: 'apartment', description: 'Taylor & Johnson Ltda' },
        { label: 'PERIODO:', icon: 'date_range', description: '03/2022 - 03/2024' },
      ], 
      role: 'Ingeniero Desarrollo y Soporte',
      tags: {
        main: '',
        arraytags: ['Cobol', 'Db2', 'AS400']
      },
      backCard: [
        {
          title: 'FUNCIONES',
          items: [
            'Durante mi tiempo en la empresa, me desempeñé en el análisis, desarrollo, soporte e implementación de nuevas funcionalidades para el sistema de la compañía, que era utilizado por nuestros clientes.',
            'Trabajé bajo la metodología ágil Scrum, colaborando en la entrega continua de mejoras y actualizaciones del producto. Utilicé herramientas clave como Db2 para la gestión y administración de bases de datos, así como el entorno COBOL en AS/400, incluyendo los formatos CBL, CBLLE, SQLCBLLE, CL y SDA.',
            'Además, me apoyé en todo el conjunto de herramientas ofrecidas por IBM para la integración de sistemas, con un enfoque en la optimización de procesos y la mejora del core bancario.'
          ]
        },
        {
          title: 'LOGROS',
          items: [
            'AdquirÍ los conocimientos necesarios en un periodo de 3 meses relacionados con programación COBOL destacando dentro del equipo como uno de los mas.',
            'AAbstraert del core bancario y los arquitectos conociemiento y logica del sector bancario',
          ]
        },
      ]
    },
    {
      primaryPathImage: '/assets/images/angular.jpg',
      secondaryPathImage: '/assets/images/home_profile.svg',
      frontCard: [
        // { label: 'CARGO:', icon: 'badge', description: 'Desarrollador Fullstack' },
        { label: 'EMPRESA:', icon: 'apartment', description: 'SkinaTech S.A.S' },
        { label: 'PERIODO:', icon: 'date_range', description: '03/2024 - Actualidad' },
      ], 
      role: 'Desarrollador Fullstack',
      tags: {
        main: '',
        arraytags: ['Html5', 'Css3', 'Js', 'Ts', 'Angular', 'Yii2', 'Mysql', 'Boostrap', 'Jquery']
      },
      backCard: [
        {
          title: 'FUNCIONES',
          items: [
            'Analisis, desarrollo, soporte e implementación de funcionalidades para el aplicativo insignia de la compañia llamado ORFEO NG',
            'Mantenimiento y ajustes de issues existentes en el software.',
            'Control y versionaminto de codigo mediante Gitlab.',
            'Actualización y paso a producción de cambios en servidor del cliente.',
          ]
        },
        {
          title: 'LOGROS',
          items: [
            'Durante un largo tiempo estuve capacitandome en tecnologias como Angular la cual gracias a la oportunidad de la compañia pude poner en practica todo lo adquirido de forma autonoma y tambien pude aprender nuevos conceptos por parte de los ingenieros.',
            'Desarrollar una funcionalidad para un cliente en la cual pude trabajar de la mano con tecnologias como Yii2 y php para enrutamiento, creación de vistas e integración con basses de datos mysql.',
          ]
        }
      ]
    },
  ]
}
