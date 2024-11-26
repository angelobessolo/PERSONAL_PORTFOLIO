import { Component, inject, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { DocsViewerComponent } from "../../../../shared/components/docs-viewer/docs-viewer.component";
import { Router, RouterModule } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    MatIconModule,
    RouterModule,
    TranslateModule
],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent  implements OnInit {
  private router = inject(Router);
  stars: Array<{ left: string, animationDelay: string, size: string }> = [];

  private translate = inject(TranslateService);
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
}
