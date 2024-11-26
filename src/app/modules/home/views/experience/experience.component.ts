import {ChangeDetectionStrategy, ChangeDetectorRef, Component, inject, OnInit, signal} from '@angular/core';
import {provideNativeDateAdapter} from '@angular/material/core';
import { CardsComponent } from '../../../../shared/components/cards/cards.component';
import { CardJob } from '../../../../shared/interfaces/card-job.interface';
import { CommonModule } from '@angular/common';
import { BreadCrumbComponent } from '../../../../shared/components/bread-crumb/bread-crumb.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [
    CardsComponent,
    CommonModule,
    TranslateModule
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})
export class ExperienceComponent implements OnInit{
  private translate = inject(TranslateService);
  private cdRef = inject(ChangeDetectorRef);

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
            'Durante mi trayectoria en la empresa, participé activamente en el análisis, desarrollo, soporte e implementación de nuevas funcionalidades para el sistema corporativo, optimizando su uso y asegurando su efectividad para nuestros clientes.',
            'Desempeñé mis funciones siguiendo la metodología ágil Scrum, colaborando en la entrega continua de mejoras y actualizaciones del producto. Mi trabajo incluyó el uso de herramientas avanzadas como Db2 para la gestión y administración de bases de datos, así como el desarrollo en el entorno COBOL sobre AS/400, abarcando formatos como CBL, CBLLE, SQLCBLLE, CL y SDA.',
          ]
        },
        {
          title: 'LOGROS',
          items: [
            'Adquirí sólidos conocimientos en programación COBOL en un período de tres meses, lo que me permitió integrarme rápidamente al equipo y contribuir de manera efectiva a los proyectos asignados.',
            'Logré abstraer del core bancario, junto con los arquitectos, conocimientos y lógica clave del sector bancario, consolidando mi comprensión del negocio.',
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
        { label: 'PERIODO:', icon: 'date_range', description: '03/2024 - Actual' },
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
            'Análisis, desarrollo, soporte e implementación de funcionalidades para el aplicativo principal de la compañía, ORFEO NG.',
            'Mantenimiento y resolución de issues en el software.',
            'Gestión de control y versionamiento de código mediante GitLab.',
            'Actualización y despliegue de cambios en producción en los servidores del cliente.',
          ]
        },
        {
          title: 'LOGROS',
          items: [
            'Me capacité de manera continua en tecnologías como Angular, aplicando los conocimientos adquiridos de forma autónoma y aprendiendo nuevos conceptos con el apoyo de los ingenieros de la compañía.',
            'Desarrollé una funcionalidad para un cliente, utilizando tecnologías como Yii2 y PHP para el enrutamiento, creación de vistas e integración con bases de datos MySQL.',
          ]
        }
      ]
    },
  ]

  ngOnInit(): void {
    const defaultLanguage = typeof window !== 'undefined' && localStorage.getItem('language') || 'es';
    this.translate.setDefaultLang(defaultLanguage);
    this.translate.use(defaultLanguage);
    this.translateValues(); // Traducir valores

    // Escuchar cambios de idioma
    this.translate.onLangChange.subscribe(() => {
      this.reloadComponent(); // Recargar componente cuando el idioma cambie
    });
  }

  // Método para traducir los valores del array cardJob
  translateValues() {
    this.cardJob = this.cardJob.map(job => {
      return {
        ...job,
        frontCard: job.frontCard.map(item => ({
          label: this.translate.instant(item.label), // Traducir las etiquetas
          icon: item.icon,
          description: item.description, // Suponiendo que no necesitas traducir las descripciones
        })),
        backCard: job.backCard.map(section => ({
          title: this.translate.instant(section.title), // Traducir los títulos de las secciones
          items: section.items.map(item => this.translate.instant(item)), // Traducir los ítems de cada sección
        }))
      };
    });

    this.cdRef.detectChanges();  // Forzar la actualización de la vista
  }

  reloadComponent(): void {
    this.ngOnInit()
  }
}
