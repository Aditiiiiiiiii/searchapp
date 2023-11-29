import { Component } from "react";
import './cardlist.style.css';
import './cards.style.css';

class CardList extends Component{
    render(){
        const {monsters} =  this.props ;
        return(
            
            <div className ='card-list'> 
            {monsters.map((monster) => (

                <div className="card-container">
                <img alt ={`monster ${monster.name}`} 
                src={`https://robohash.org/${monster.id}?set=set2&size=180x180`}
                ></img>
                <h2>{monster.name}</h2>
                <p>{monster.email}</p>
                <h1 key={monster.id}> {monster.name}</h1>
                
                </div> 

                ))
            }
            </div>
        )
    }
}

export default CardList;