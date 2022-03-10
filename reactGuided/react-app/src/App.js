import './App.css';
import React from 'react';
import BasicInfo from './components/BasicInfo'

class App extends React.Component{
  constructor(props){
    super(props)
    this.state ={
      person:[
      {
        name:"Samuel Rivas Ramirez",
        number: "704-999-9999",
        birthday: "1/1/2020"
      },
      {
        name:"Barack Obama",
        number: "999-999-9999",
        birthday: "8/4/1961"
      },
      {
        name:"John F Kennedy",
        number: "333-333-3333",
        birthday: "5/29/1917"
      }
    ]
    }
  }
  render(){
    let peoples = this.state.person;
    return (
      <BasicInfo data={peoples}/>
    );
  }
}

export default App;
