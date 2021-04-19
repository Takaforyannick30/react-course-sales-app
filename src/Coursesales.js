import React, { Component } from 'react';


class Coursesales extends Component {
  sumPrice(price){
      this.setState({total: this.state.total + price});
  }

  constructor(props){
      super(props);

      this.state = {
          total: 0
      }
  }

  render() {
    
    let courses = this.props.items.map((item,i) => {
        return

    });

    return (
      <div className="">
          
        
      </div>
    );

  }
 
}

export default Coursesales;