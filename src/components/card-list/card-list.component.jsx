import { Component } from 'react';
import Card from '../card/card.component';
import './card-list.styles.css'

const CardList = ({cats}) => (
    //console.log("Render from card list");
    //if there is no destructure in parameters
    //const { cats } = props;

    <div className="card-list">
        {cats.map((cat) => {
            return(
                <Card cat={cat}/>
            )
        })}
    </div>
)

export default CardList;

// export default class CardList extends Component {

//     render() {
//         console.log("Render from card list");
//         const { cats } = this.props;
        
//         return (
//             <div className="card-list">
//                 {cats.map((cat) => {
//                     return(
//                         <Card cat={cat}/>
//                     )
//                 })}
//             </div>
//         )
//     }
// }

