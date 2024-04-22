import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PokemonComponent } from './components/pokemon/pokemon.component';

// the @ Component decorator marks this file as a  component
@Component({
  // The component tag name, <app-root></app-root>
  selector: 'app-root',

  // marking a component as standalone, makes it so that it handles its own dependancys
  standalone: true,

  // This is where we add our imports and dependancys
  imports: [RouterOutlet, PokemonComponent],

  // The file paths to template and stylesheet
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

// 
export class AppComponent {
  title = 'Jacob';
}
