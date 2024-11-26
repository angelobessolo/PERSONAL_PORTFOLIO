import { Component, inject, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    MatIconModule,
    MatButtonModule,
    TranslateModule
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent implements OnInit{

  translate = inject(TranslateService)

  ngOnInit(): void {
    this.detectLanguage();
  }

  downloadCv(){
    const link = document.createElement('a');
    link.href = '/assets/documents/CV-ANGELO-BESSOLO.pdf';
    link.download = 'CV-ANGELO-BESSOLO.pdf';
    link.click();
  }

  detectLanguage(){
    const defaultLanguage = typeof window !== 'undefined' && localStorage.getItem('language') || 'es';
    this.translate.setDefaultLang(defaultLanguage);
    this.translate.use(defaultLanguage);
  }
}
