/* src/app/habit-tracker/main.component.ts */

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Wymagane dla *ngIf, *ngFor
import { FormsModule } from '@angular/forms'; // Wymagane dla [(ngModel)]

@Component({
  selector: 'app-main', // Zmieniono selektor na 'app-main'
  standalone: true,
  imports: [FormsModule, CommonModule], // Importowanie wymaganych modułów
  templateUrl: './main.html', // Zmieniono nazwę pliku szablonu
  styleUrl: './main.css' // Zmieniono nazwę pliku stylów (zakładając CSS zamiast SCSS)
})
export class MainComponent implements OnInit { // Zmieniono nazwę klasy na MainComponent
  // Właściwość do przechowywania aktualnej wartości pola wprowadzania nawyku
  habitInput: string = '';
  // Właściwość do przechowywania listy nawyków. Każdy nawyk to obiekt z id, tekstem i statusem ukończenia.
  // Typowanie zostało zdefiniowane bezpośrednio w komponencie.
  habits: { id: number; text: string; completed: boolean; }[] = [];

  constructor() { }

  ngOnInit(): void {
    // Logika inicjalizacji może znaleźć się tutaj, jeśli jest potrzebna
  }

  /**
   * Dodaje nowy nawyk do listy.
   * Sprawdza, czy wprowadzona wartość nie jest pusta ani nie składa się tylko z białych znaków.
   */
  addHabit(): void {
    if (this.habitInput.trim() !== '') {
      const newHabit = { // Usunięto odwołanie do interfejsu Habit
        id: Date.now(), // Unikalny ID dla nawyku (użycie znacznika czasu)
        text: this.habitInput.trim(), // Usunięcie białych znaków z tekstu wejściowego
        completed: false, // Początkowy status: nieukończony
      };
      this.habits.push(newHabit); // Dodanie nowego nawyku do istniejącej listy
      this.habitInput = ''; // Wyczyść pole wprowadzania po dodaniu
    }
  }

  /**
   * Usuwa nawyk z listy na podstawie jego ID.
   * @param id ID nawyku do usunięcia.
   */
  deleteHabit(id: number): void {
    this.habits = this.habits.filter((habit) => habit.id !== id);
  }

  /**
   * Przełącza status ukończenia nawyku na podstawie jego ID.
   * @param id ID nawyku do przełączenia.
   */
  toggleComplete(id: number): void {
    this.habits = this.habits.map((habit) =>
      habit.id === id ? { ...habit, completed: !habit.completed } : habit
    );
  }
}
