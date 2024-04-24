import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { IPokemon } from '../interfaces/ipokemon';
const http = '';
@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  //Injecting HttpClient is a dependacny
  //HttpClient is a class that allows us to preform Http requests (GET PST)
  http = inject(HttpClient)

  getPokemon(userInput = 'blaziken') {
    return this.http.get<IPokemon>(`https://pokeapi.co/api/v2/pokemon/${userInput}`)
  }
}
