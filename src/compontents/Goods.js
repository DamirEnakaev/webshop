import React, { Component } from 'react'
import Good from './Good'
export class Goods extends Component {
  render() {
    return (
        <main>
            {this.props.items.map(el => (
               <Good key={el.id} item={el}/>
            ))}
        </main>
    )
  }
}

export default Goods
