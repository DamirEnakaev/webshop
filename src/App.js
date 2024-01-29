import React from "react";
import Header from "./compontents/Header";
import Footer from "./compontents/Footer";
import Goods from "./compontents/Goods";

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      items: [
        {
        id: 1,
        title: 'apartment on the 1st floor',
        img: 'first.jpg',
        desc: "One room apartment with a sea view",
        category: 'apartments',
        price: '50.00 $'
        },
        {
          id: 2,
          title: 'apartment on the 2nd floor',
          img: 'second.jpg',
          desc: "One room apartment with a sea view",
          category: 'apartments',
          price: '50.00 $'
        },
        {
        id: 3,
        title: 'apartment on the 3rd floor',
        img: 'third.jpg',
        desc: "One room apartment with a sea view",
        category: 'apartments',
        price: '50.00 $'
        },
        {
          id: 4,
          title: 'apartment on the 4th floor',
          img: 'fourth.jpg',
          desc: "One room apartment with a sea view",
          category: 'apartments',
          price: '50.00 $'
        },
        

      ]
    }
  }
  render () {
    return (
      <div className="wrapper">
        <Header/>
        <Goods items={this.state.items}/>
        <Footer/>
      </div>
    );
  }

}

export default App;
