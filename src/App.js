import logo from './logo.svg';
import './App.css';
import React from 'react';
import Lifecycles from './lifecycles.componext';
import './lifecycles.css';

class App extends React.Component {
  //Lecture 38
  constructor(){
    super();
    this.state={
     showChild:true,
     text:''
         };
     }
  //////////////////////////////
  // lecture 37
  // 1st method with constructor
  // constructor(props){
  // super(props)
  //   this.state={
  //     numbers: 1+this.props.increment
  //   }
  // }
  // 1st method with constructor
  // incNumb=()=>{
  //   this.setState((prevState,prevProps)=>{
  //    return {numbers:prevState.numbers+prevProps.increment}},
  //     console.log(this.state.numbers)
  //     )
    
  // }
  
  // Now second method without constructor
  // state={
  //   numbers:1
  // }
  // incNumb=()=>{
  //   this.setState((prevState,prevProps)=>{
  //    return {numbers:prevState.numbers+1}},
  //     console.log(this.state.numbers)
  //     )
    
  // }
 render(){
  return (
    // Lecture # 37
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        {/* <p>
         {this.state.numbers}
        </p>
        <button
          onClick={this.incNumb}
        >
          Change State
        </button> */}
        {/* Lecture # 38 */}
        <button
        className='lifecycles_button'
        onClick={()=>this.setState(state=>(
          {showChild: ! state.showChild}
        ))}
        >Toggle Lifecycles
        </button>  
        <button
        className='lifecycles_button'
        onClick={()=>this.setState(state=>({
          text:state.text +'_hello'
        }))}
        >Update Text</button>
        
         {this.state.showChild ? <Lifecycles text={this.state.text}/> :null}
        




      </header>
    </div>
  );
 }

}

export default App;
