import React, {Component} from 'react';
import './App.css';
import Searchbox from './components/Searchbox';
import CardList from './components/CardList';
import Bag from './components/Bag';

class App extends Component
{
  constructor()
  {
    super()
    this.state =
    {
      Basket:
      [
        {name: 'Mango', price: 100, image: './images/mango.jpeg'},
        {name: 'Orange', price: 110, image: './images/orange.jpg'},
        {name: 'Apple', price: 120, image: './images/apple.jpg'},
        {name: 'Raspberry',price: 130, image: './images/berries.jpg'},
        {name: 'Grapes', price: 140, image: './images/grape.jpg'},
        {name: 'Banana',price: 150, image: './images/banana.jpg'},
        {name: 'Grapes', price: 120, image: './images/grapes.jpg'},
        {name: 'Lemon', price: 20, image: './images/lemon.jpg'},
        {name: 'Mandarina', price: 180, image: './images/mandarina.jpg'},
        {name: 'Papaya', price: 120, image: './images/papaya.jpg'},
        {name: 'Red Grapes', price: 130, image: './images/redgrapes.jpg'},
        {name: 'Tomato', price: 50, image: './images/tomato.jpg'},
        {name: 'Breadfruit', price: 140, image: './images/breadfruit.jpg'},
        {name: 'Clementine', price: 115, image: './images/clementine.jpg'},
        {name: 'Grapes', price: 200, image: './images/freshgrapes.jpg'},
        {name: 'Grapefruit', price: 185, image: './images/grapefruit.jpg'},
        {name: 'Green Limes', price: 125, image: './images/green_limes.jpg'},
        {name: 'Grapes', price: 130, image: './images/growing_grapes.jpg'},
        {name: 'Mandarin', price: 120, image: './images/Mandarin.jpg'},
        {name: 'Apple', price: 100, image: './images/mini_apples.jpg'},
        {name: 'Tomato', price: 60, image: './images/redyellowtomato.jpg'},
        {name: 'Banana', price: 80, image: './images/spotted_bananas.jpg'},
        {name: 'Strawberries', price: 220, image: './images/strawberries.jpg'},
        {name: 'Sweetcorn', price: 200, image: './images/sweetcorn.jpg'},
        {name: 'Watermelon', price: 110, image: './images/watermelon.jpg'},
        {name: 'Yellow pear', price: 195, image: './images/yellow_pear.jpg'}
      ],
      searchfield: ''
    }
  }
  onSearch = (e)=>
  {
    this.setState({searchfield: e.target.value});
  }
  render()
  {
    const filteredBasket = this.state.Basket.filter
    (
      e =>
      {
        return e.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
      }
    );

    filteredBasket.sort((a,b)=>(a.name < b.name) ? -1 : (a.name > b.name) ? 1 : 0);
    return(
      <div>
      <div className='App-link'><marquee>Buying facility is not available now!!</marquee></div>
      <Searchbox SearchChange={this.onSearch} />
      <CardList fruits={filteredBasket}/>
      <Bag />
      </div>
    );
  }
}

export default App;
