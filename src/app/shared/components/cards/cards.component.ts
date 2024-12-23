import { Component, Input, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { CardJob } from '../../interfaces/card-job.interface';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule
  ],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css'
})
export class CardsComponent implements OnInit { 

  @Input() cardJob!: CardJob;
  disableHover = false;

  ngOnInit() {

  }

  getRandomColor(): string {
    const letters = '01234567';  // Solo caracteres para tonos más oscuros
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * letters.length)];
    }
    return color;
  }

  rotateCard(){
    this.disableHover = !this.disableHover;
  }

}
