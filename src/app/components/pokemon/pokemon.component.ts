import { Component, OnInit, inject } from '@angular/core';
import { PokemonService } from '../../.service/pokemon.service'
import { IPokemon } from '../../interfaces/ipokemon';
import { DisplayPokemonComponent } from '../display-pokemon/display-pokemon.component';

@Component({
  selector: 'app-pokemon',
  standalone: true,
  imports: [DisplayPokemonComponent],
  templateUrl: './pokemon.component.html',
  styleUrl: './pokemon.component.css'
})
export class PokemonComponent implements OnInit {
  pokemonService = inject(PokemonService)
  pokemonData: IPokemon | null = null;

pokemonName = 'blaziken';
hint = "";

  loadPokemon() {
    this.pokemonService.getPokemon(this.pokemonName).subscribe((pokemon) => {
      console.log(pokemon);
      this.pokemonData = pokemon;
    })
  }

  ngOnInit() {
    this.loadPokemon();
  }

  setName(userInput: string) {
    this.pokemonName = userInput;
    this.loadPokemon();
  }
}
