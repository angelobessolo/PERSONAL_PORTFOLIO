import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, inject, Input, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { ProjectCard } from '../../interfaces/project-card.interface';
import { Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-card-project',
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule
  ],
  templateUrl: './card-project.component.html',
  styleUrl: './card-project.component.css'
})
export class CardProjectComponent  implements AfterViewInit{
  @Input() projectCard!: ProjectCard;
  private router = inject(Router);
  @ViewChild('videoPlayer') videoPlayer!: ElementRef<HTMLVideoElement>;

  backgroundColor: string = '#165615';
  tagColors: string[] = [];

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    // Generar los colores aleatorios para las etiquetas
    this.tagColors = this.projectCard.tags.tags.map(() => this.getRandomColor());
  }

  ngAfterViewInit() {
    this.setupHoverControls();
  }

  // Controlar la reproducción con hover
  private setupHoverControls() {
    const videoElement = this.videoPlayer.nativeElement;

    // Pausar video por defecto
    videoElement.pause();

    // Reproducir el video cuando se pasa el mouse sobre él
    videoElement.addEventListener('mouseover', () => {
      videoElement.play();
    });

    // Pausar el video cuando el mouse sale de él
    videoElement.addEventListener('mouseout', () => {
      videoElement.pause();
    });
  }

  getRandomColor(): string {
    const letters = '01234567';  // Solo caracteres para tonos más oscuros
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * letters.length)];
    }
    return color;
  }
}
