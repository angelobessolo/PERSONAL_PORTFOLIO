import { Component, EventEmitter, inject, Inject, OnInit, Output } from '@angular/core';
import { MatIconModule} from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import {MatMenuModule} from '@angular/material/menu';
import { Language } from '../../interfaces/language.interface';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSidenavModule} from '@angular/material/sidenav';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    RouterModule,
    MatMenuModule,
    MatSidenavModule, 
    MatFormFieldModule, 
    MatSelectModule, 
    MatIconModule,
    TranslateModule
  ],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.css'
})
export class ToolbarComponent implements OnInit {
  menuOpen = false;

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

  @Output() openCloseSidenav = new EventEmitter<boolean>();
  isOpen = false;

  translate = inject(TranslateService);

  ngOnInit(): void {
    this.selectedLanguage = this.lenguages[1]; // Por defecto seleccionamos el primer idioma (English)
  }

  // Alterna la visibilidad del menú
  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  // Método para abrir la ventana emergente flotante
  openPopup(url: string) {
    const width = 700;   // Ancho de la ventana emergente
    const height = 500;  // Alto de la ventana emergente
    const left = (window.innerWidth / 2) - (width / 2);  // Centrado en la pantalla
    const top = (window.innerHeight ) - (height+50); // Centrado en la pantalla

    // Abre la ventana emergente con las dimensiones y ubicación especificadas
    window.open(url, 'popup', `width=${width},height=${height},left=${left},top=${top},resizable=yes,scrollbars=yes`);
  }

  // Cambiar el idioma
  changeLanguage(language: Language) {
    this.selectedLanguage = language;
    localStorage.setItem('language', this.selectedLanguage.code);
    this.translate.use(this.selectedLanguage.code);
  }

  // Método para cambiar el estado y emitir el valor
  toggleSidenav() {
    this.isOpen = !this.isOpen;  // Cambiar el estado (abierto/cerrado)
    this.openCloseSidenav.emit(this.isOpen);  // Emitir el nuevo estado al componente padre
  }
}
