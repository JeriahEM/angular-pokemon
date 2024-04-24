import { Component, OnInit, inject } from '@angular/core';
import { PokemonService } from '../../.service/pokemon.service'

@Component({
  selector: 'app-pokemon',
  standalone: true,
  imports: [],
  templateUrl: './pokemon.component.html',
  styleUrl: './pokemon.component.css'
})
export class PokemonComponent implements OnInit {
  pokemonService = inject(PokemonService)

  loadPokemon() {
    this.pokemonService.getPokemon().subscribe((pokemon) => {
      console.log(pokemon);
    })
  }

  ngOnInit() {
    this.loadPokemon();
  }
}
