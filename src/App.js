import { Component } from "react";
import CardList from "./components/card-list/cardlist.component";
import SearchBox from "./components/search-box/search-box.component";
import './App.css';

//compnents 
class App extends Component {
  //state
  constructor() {
    super();
    //states(intialize the state 1st runs )
    this.state = {
      //array of monsters 
      monsters:[],
      searchField:''
    };
  }
  
  //lifecycle method of component 3rd runs 
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
      .then((users) => 
      this.setState(
      () => {return {monsters : users}},
      ));
  }

  // method for search
  onSearchChange = (event) =>{
    const searchField = event.target.value.toLocaleLowerCase();
          this.setState(() => {return {searchField};})
  }
  // renders determine want to show runs after the constructor 2nd runs
  render() {

    //destructering 
    const {monsters, searchField} = this.state;
    const {onSearchChange} = this;

    const filtermonster = monsters.filter(
      (monster) => {
       return monster.name.toLocaleLowerCase().includes(searchField);
      });
    
    return (
      <div className='App'>
      <h1 className= "app-title">Monsters Rolodex</h1>
      <SearchBox onChangeHandler ={onSearchChange} placeholder='search Monsters' className='monsters-search-box' />
      <CardList monsters={filtermonster}/>
      </div>
    );
  }
}

export default App;