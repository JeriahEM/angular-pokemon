import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
const http = '';
@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  //Injecting HttpClient is a dependacny
  //HttpClient is a class that allows us to preform Http requests (GET PST)
  http = inject(HttpClient)

  getPokemon(userInput = 'bulbasaur') {
    return this.http.get(`https://pokeapi.co/api/v2/pokemon/${userInput}`)
  }
}
