import { Component, inject, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { DocsViewerComponent } from "../../../../shared/components/docs-viewer/docs-viewer.component";
import { Router, RouterModule } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { FloatButtonComponent } from "../../../../shared/components/float-button/float-button.component";
import { FloatButton } from '../../../../shared/interfaces/float-button-interface';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    MatIconModule,
    RouterModule,
    TranslateModule,
    FloatButtonComponent
],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent  implements OnInit {
  private router = inject(Router);
  stars: Array<{ left: string, animationDelay: string, size: string }> = [];

  private translate = inject(TranslateService);

  public buttonActions: FloatButton = {
    action: 'none',
    icon: 'add',
    label: '',
    color: 'linear-gradient(-225deg, rgba(0,75,4,1) 5%, rgba(255,248,0,1) 90%)',
    subActions: [
      { action: 'experience', 
        icon: 'work',
        url: 'home/experience',
        label: 'Experiencia', 
        color: 'linear-gradient(-225deg, rgba(0,75,4,1) 5%, rgba(255,248,0,1) 90%)' 
      },
      { action: 'projects', 
        icon: 'sports_score', 
        url: 'home/projects',
        label: 'Proyectos', 
        color: 'linear-gradient(-225deg, rgba(0,75,4,1) 5%, rgba(255,248,0,1) 90%)' 
      },
      { action: 'about-me', 
        icon: 'person', 
        url: 'home/about-me',
        label: 'Acerca de mi', 
        color: 'linear-gradient(-225deg, rgba(0,75,4,1) 5%, rgba(255,248,0,1) 90%)' 
      },
    ]
  };
  // constructor() {
  //   this.translate.addLangs(['en']);
  //   this.translate.setDefaultLang('en');
  //   this.translate.use('en');
  // }



  ngOnInit(): void {
    this.createStars();
    this.detectLanguage();
    this.router.navigateByUrl('home/main');
  }

  // Crear estrellas fugaces con posiciones aleatorias y tiempos de animación
  createStars() {
    const starCount = 100; // Cantidad de estrellas que quieres que caigan

    for (let i = 0; i < starCount; i++) {
      // Generamos un tamaño aleatorio para las estrellas (más grandes y más pequeñas)
      const size = Math.random() * 10 + 1; // Tamaño entre 1px y 4px

      // Generamos una posición aleatoria para la estrella
      const left = Math.random() * 100 + 'vw'; // Posición horizontal aleatoria en vista completa

      // Generamos un retraso en la animación para que no caigan todas al mismo tiempo
      const animationDelay = Math.random() * 5 + 's'; // Retraso entre 0s y 5s

      // Añadir la estrella al array
      this.stars.push({
        left,
        animationDelay,
        size: `${size}px`
      });
    }
  }

  detectLanguage(){
    const defaultLanguage = typeof window !== 'undefined' && localStorage.getItem('language') || 'es';
    this.translate.setDefaultLang(defaultLanguage);
    this.translate.use(defaultLanguage);
  }

  eventAction(event: any){
    console.log(event);
    switch (event.action){
      case 'about-me':
        this.router.navigateByUrl(event.url);
      break; 

      case 'projects':
        this.router.navigateByUrl(event.url);
      break;

      case 'experience':
        this.router.navigateByUrl(event.url);
      break;
    }
  }
}
