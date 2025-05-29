import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainComponent } from './main/main';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,CommonModule,MainComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
  
})
export class App {
  protected title = 'systemnawykow';
}
