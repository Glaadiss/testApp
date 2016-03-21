import React from 'react';

class HelloWorld extends React.Component {
  render() {
    	const name = "barteee";

    return(
      <div className="container">
        <h1 >Hello World {name} </h1>
      </div>
    );
  }
}

export default HelloWorld;
