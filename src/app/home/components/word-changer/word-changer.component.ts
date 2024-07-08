import { animate, style, transition, trigger } from '@angular/animations';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-word-changer',
  templateUrl: './word-changer.component.html',
  styleUrls: ['./word-changer.component.scss'],
  animations: [
    trigger('slideInFromTop', [
      transition(':enter', [
        style({ transform: 'translateX(-10%)', opacity: 0 }),
        animate('0.2s ease-in-out', style({ transform: 'translateX(0)', opacity: 1 }))
      ]),
      transition(':leave', [
        animate('0.2s ease-in-out', style({ transform: 'translateY(20%)', opacity: 0 }))
      ])
    ])
  ]
})
export class WordChangerComponent {
  @Input() words: string[] = [];
  @Output() endOfWords: EventEmitter<void> = new EventEmitter<void>();
  currentWordIndex: number = 0;
  currentWord: string = '';
  isVisible: boolean = false;
  intervalId: any;

  ngOnInit(): void {  
    this.cambiar();
    this.startChangingWords();
  }

  startChangingWords(): void {
    this.intervalId = setInterval(() => {
      this.cambiar();
    }, 1500); 
  } 


  cambiar(){
    this.isVisible = false;
    this.currentWord = this.words[this.currentWordIndex];

    setTimeout(() => {
      this.isVisible = true;
      if (this.currentWordIndex === this.words.length - 1) {
        clearInterval(this.intervalId);
        this.endOfWords.emit();
      }
      this.currentWordIndex++;

    }, 300); 
  }
}
