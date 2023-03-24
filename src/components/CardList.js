import React from 'react'; 
import Card from './Card'; 

// creates an array of cards using map. 
// include a 'key' prop, each time you do an array, to prevent issues with the DOM. 
const CardList = ({ robots }) => {
    return (
        <div>
            {
              robots.map((user, i) => {
                return (
                    <Card 
                        key={i} 
                        id={robots[i].id} 
                        name={robots[i].name} 
                        email={robots[i].email}
                        />
                    );
                })  
            }
        </div>
    );
}

export default CardList; 