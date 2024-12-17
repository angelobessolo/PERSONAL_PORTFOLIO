import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, inject, Inject, OnInit, ViewChild } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { ToolbarComponent } from "../../../../shared/components/toolbar/toolbar.component";
import { BreadCrumbComponent } from "../../../../shared/components/bread-crumb/bread-crumb.component";
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSidenav, MatSidenavModule} from '@angular/material/sidenav';
import { MatMenuModule } from '@angular/material/menu';
import { Language } from '../../../../shared/interfaces/language.interface';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { BehaviorSubject, filter } from 'rxjs';

@Component({
  selector: 'app-home-layout',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule, 
    MatFormFieldModule, 
    MatSelectModule, 
    MatButtonModule,
    RouterModule,
    MatMenuModule,
    MatSelectModule,
    ToolbarComponent,
    BreadCrumbComponent,
    TranslateModule
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './home-layout.component.html',
  styleUrl: './home-layout.component.css'
})
export class HomeLayoutComponent implements OnInit{

  private router = inject(Router);
  private translate = inject(TranslateService);


  stars: Array<{ left: string, animationDelay: string, size: string }> = [];

  sidenavStatus: boolean = false;

  @ViewChild('drawer') drawer: MatSidenav | undefined;

  // Internationalization values countries
  lenguages: Language[] = [
    {
      code: 'en',
      name: 'En',
      flag: '/assets/icons/usa_flg.png'
    },
    {
      code: 'es',
      name: 'Es',
      flag: '/assets/icons/spain_flg.png'
    },
  ];

  // Idioma seleccionado por defecto
  selectedLanguage!: Language; // Por defecto seleccionamos el primer idioma (English)

  showBredcrumb: boolean = false;

  showBredcrumb$ = new BehaviorSubject<boolean>(true);

  constructor(
    private ref: ChangeDetectorRef,
  ){}

  ngOnInit(): void {
    // this.createStars();
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        const currentRoute = this.router.url;
        if (currentRoute === 'home/main'){
          this.showBredcrumb = false;
        } else{
          this.showBredcrumb = true;
        }

        this.ref.detectChanges();
      });
      
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

  // Método que maneja el cambio de estado
  openCloseSidenav(status: boolean) {
    this.sidenavStatus = status;  // Actualizar el estado con el valor recibido
    this.drawer!.toggle();
  }

  // Cambiar el idioma
  detectLanguage(){
    const defaultLanguage = typeof window !== 'undefined' && localStorage.getItem('language') || 'es';
    this.translate.setDefaultLang(defaultLanguage);
    this.translate.use(defaultLanguage);
  }

  eventAction(event: any){
    event === 'home/main' ? this.showBredcrumb = false: this.showBredcrumb = true;
  }

}
