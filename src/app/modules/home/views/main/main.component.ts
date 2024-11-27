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
    color: '#004b04',
    subActions: [
      { action: 'experience', 
        icon: 'work', 
        label: 'Experiencia', 
        color: '#004b04' 
      },
      { action: 'projects', 
        icon: 'sports_score', 
        label: 'Proyectos', 
        color: '#004b04' 
      },
      { action: 'about-me', 
        icon: 'person', 
        label: 'Acerca de mi', 
        color: '#004b04' 
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
    // switch (event.action){
    //   case 'delete':
    //     this.spinner.show();
    //     setTimeout(() => {
    //       this.configurationService.deleteCompany(this.rowCompany).subscribe({
    //         next: (response: any) => {
    //           if(response.statusCode === 200){
    //             this.spinner.hide();
  
    //             const title = 'Eliminacion Responsable';
    //             const message = response.message;
    //             this.toastr.showSucces(title, message);

    //             this.rowCompany = [];

    //             this.reloadList();

    //             this.showButton = false;
    //           }   
    //         },
    //         error: err => {
    //           this.spinner.hide();
  
    //           const title = 'Eliminacion Empresa';
    //           const message = err.error.error;
    //           this.toastr.showSucces(title, message);
    //         }
    //       });
    //     }, 
    //     1000
    //     );

    //   break; 

    //   case 'view':
    //     this.viewCompany(this.rowCompany);
    //   break;
    // }
  }
}
