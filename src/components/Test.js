import React from "react";

class Container extends React.Component {
    constructor(props) {
      super(props);
      this.state = { show: true };
    };
    //Функция, удаляющая Child
    handleRemoveChild = () => {
      this.setState({ show: false });
    }
  
    render() {
      let childComponent = null;
  
      if (this.state.show) {
        childComponent = <Child />;
      }
      
      return (
        <>
          {childComponent}
          <button onClick={this.handleRemoveChild}>Remove Child</button>
        </>
      );
      }
    }

class Child extends React.Component {

    componentWillUnmount() {
      alert("The component Child is unmounted.");
    }
      
    render() {
      return ( 
      <>
      <h1>Children!</h1>
      </>
    );
  }
  }

export default Container;