import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ToolbarComponent } from "./shared/components/toolbar/toolbar.component";
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    TranslateModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'Bienvenido';

  languages: string[] = ['es', 'en'];
  private translate = inject(TranslateService);

  ngOnInit(): void {

    if(typeof window !== 'undefined'){
      localStorage.setItem('language', 'es');
      const defaultLanguage = typeof window !== 'undefined' && localStorage.getItem('language') || 'es';
      this.translate.setDefaultLang(defaultLanguage);
      this.translate.use(defaultLanguage);
    }

  }

  chancheLanguage(lang: string){

  }

}
