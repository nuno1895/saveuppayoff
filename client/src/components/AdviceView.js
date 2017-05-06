import React, { Component } from 'react';



class AdviceView extends Component {
  constructor(props) {
    super(props);
  }

 
  render() {
   

    return (
      <p className="AdviceView">
        { /* this.props.key */ } {/* Warning: Cat: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. */}
        
        {this.props.advice}


      </p>
    );
  }
}



export default AdviceView;
