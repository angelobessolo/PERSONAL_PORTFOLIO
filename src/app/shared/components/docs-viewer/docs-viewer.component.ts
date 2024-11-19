import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { NgxDocViewerModule } from 'ngx-doc-viewer';

@Component({
  selector: 'app-docs-viewer',
  standalone: true,
  imports: [
    NgxDocViewerModule
  ],
  templateUrl: './docs-viewer.component.html',
  styleUrl: './docs-viewer.component.css'
})
export class DocsViewerComponent {

  githubUrl: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {
    // Sanear las URLs para ser utilizadas en los iframes
    this.githubUrl = this.sanitizer.bypassSecurityTrustResourceUrl('www.linkedin.com/in/angelo-mateo-bessolo-🧑‍💻-6b02ab247');
  }

}
