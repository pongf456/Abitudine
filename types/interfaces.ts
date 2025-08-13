import { DaysOfWeek, DifficultyLevel } from "./enums";
export type Trait = string;
export interface User {
  nickname: string; // Apodo del usuario
  birthDate: string; // Fecha de nacimiento
  perfilUri: string;
  email: string;
  identity: Trait[]; // identidad
  // ... otras propiedades
}
export interface Note {
  text: string;
  createdAt: string;
}
export interface Habit extends Pick<User, "identity"> {
  name: string; //Nombre
  description: string; //Descripción
  difficulty: (typeof DifficultyLevel)[number]; // Dificultad
  startedDate: string; // La fecha en la que se empezó
  executionDays: DaysOfWeek[]; // Los días en los que se ejecuta
  daysCompleted: string[];
  startDate: string; // Cuando inicia en el día
  endDate: string; // Cuando termina en el día
  notes: Note[]; // Notas
}
