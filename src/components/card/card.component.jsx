import React, { Component } from 'react'
import './card.styles.css'

export default class Card extends Component {
  render() {
    const {id, name, email } = this.props.cat;
    return (
        <div>
            <div 
                className='card-container'
                key={id}>
                <img 
                    src={`https://robohash.org/${id}?set=set2&size=180x180`} 
                    alt={`cat ${name}`}/>
                <div >
                    <p><b>Name:</b>  {name}</p>
                    <p><b>Email:</b>  {email}</p>
                </div>
            </div>
        </div>
    )
  }
}
