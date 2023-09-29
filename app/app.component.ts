import { Component } from '@angular/core';
import { Pokemon } from '../module/pokemon';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Pokedex';
  logo = '../assets/pokemon-logo-4-1.png';
  imgProfile = '../assets/profile.png'
  links:string[] = ['Home', 'Pokedex', 'Video Game', 'Card Games', 'Eventos'];

  pokemons: Pokemon[] = [
    new Pokemon(1, 'Pikachu', ['Elétrico'], 'Esse é o Pikachu. ', 'https://w7.pngwing.com/pngs/8/891/png-transparent-pikachu-thumbnail.png'),
    new Pokemon(1, 'Bulbasaur', ['Grama', 'Veneno'], 'Esse é o Bulbasaur', 'https://w7.pngwing.com/pngs/984/841/png-transparent-bulbasaur-bulbasaur-pokemon-animation-thumbnail.png'),
    new Pokemon(1, 'Ivysaur', ['Phantom'], 'Esse é o Ivysaur', 'https://w7.pngwing.com/pngs/735/930/png-transparent-pokemon-yellow-pokemon-x-and-y-ivysaur-venusaur-bulbasaur-ivysaur-leaf-grass-fictional-character-thumbnail.png'),
    new Pokemon(1, 'Geodude', ['Pedra'], 'Esse é o Geodude', 'https://w7.pngwing.com/pngs/803/462/png-transparent-pikachu-brock-pokemon-sun-and-moon-pokemon-go-geodude-pikachu-mammal-hand-vertebrate.png'),
  ];

  selectedPokemon?: Pokemon;

  showDetails(pokemon: Pokemon){

    this.selectedPokemon = pokemon;
  }

  closeModal(){
    this.selectedPokemon = undefined;
  }

  filterValue: string = '';
filteredPokemons(): Pokemon [] {
  if(!this.filterValue){
    return this.pokemons;
  }
  return this.pokemons.filter(Pokemon => Pokemon.name.toLowerCase().includes(this.filterValue.toLowerCase()));
}
}