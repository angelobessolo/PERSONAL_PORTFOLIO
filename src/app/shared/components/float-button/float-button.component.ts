import { CommonModule } from '@angular/common';
import { Component, Input, output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FloatButton } from '../../interfaces/float-button-interface';

@Component({
  selector: 'app-float-button',
  standalone: true,
  imports: [
    MatIconModule,
    MatButtonModule,
    CommonModule,
  ],
  templateUrl: './float-button.component.html',
  styleUrl: './float-button.component.css'
})
export class FloatButtonComponent {
  // Shoot action to father
  eventAction = output<FloatButton>(); 
  @Input() buttonActions!: FloatButton;

  public openMenu: boolean = false;
  public isOver = false;


  ngOnInit(): void {
    // console.log(this.buttonActions);
  }

  clickMenu(){
    this.openMenu = !this.openMenu;
  }

  getButtonStyles(index: number): any {
    const positionIncrement = 3.5; // Incremento de posición en rem
    const basePosition = 4; // Posición base en rem
    const bottomPosition = basePosition + index * positionIncrement;
    const animationDelay = 0.1 * index; // Ajusta el retraso de la animación según el índice

    return {
      right: '5px',
      '--bottom-position': `${bottomPosition}rem`,
      bottom: `${bottomPosition}rem`,
      animationDelay: `${animationDelay}s`
    };
  }

  getLabelStyles(index: number): any {
    const positionIncrement = 3.5; // Incremento de posición en rem
    const basePosition = 4.5; // Posición base en rem
    const bottomPosition = basePosition + index * positionIncrement;
    const animationDelay = 0.1 * index; // Ajusta el retraso de la animación según el índice

    return {
      '--bottom-label-position': `${bottomPosition}rem`,
      bottom: `${bottomPosition}rem`,
      animationDelay: `${animationDelay}s`
    };
  }

  emitAction(action: FloatButton) {
    // console.log('Emitiendo acción:', action);
    this.eventAction.emit(action);
  }
}
