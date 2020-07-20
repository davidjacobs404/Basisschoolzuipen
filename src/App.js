import React from 'react';
import logo from './logo.svg';
import './App.css';

export default class App extends React.Component{
  state={
    imgArray:["melk.jpg", "melk1.jpg", "melk2.jpg", "melk3.jpg"],
    count: 1,
    inputText:"",
    generatedNumber: 0,
    incrementNumber: 0,
  }


  componentDidMount(){
    const length=this.state.imgArray.length
     setInterval(()=>{
       this.setState(({count}) => (
        {count: count===length? 0 : Math.min(count +1, length)}
      ))
     }, 3000)
   }


  render(){
    const {count, imgArray, inputText, generatedNumber, incrementNumber}=this.state
    const numbersArray=[...Array(imgArray.length).keys()]
    console.log({generatedNumber, incrementNumber})
    return(
      <div className="box">
        <div className="kleinebal"


        />

          <div className="grootebal"
          style={{
            transform: `rotate(${generatedNumber}deg)`

          }
          }>
            <img className="helo wolf" src="melk1.jpg"/>
            <img className="helo david" src="melk1.jpg"/>
            <img className="helo olav" src="melk1.jpg"/>
            <img className="helo joosep" src="melk1.jpg"/>
            <img className="helo ruben" src="melk1.jpg"/>
            <img className="helo roeland" src="melk1.jpg"/>



        </div>
        <button onClick={() =>{
            this.setState({generatedNumber:Math.floor(Math.random() * 3000) + 1000})

        }}>ZUIPUHHHH</button>
      {/*  <div className="slider">
          <img src={imgArray[count]}/>
          <div className="buttons">{numbersArray.map((number) =>
            <div className="dot" onClick={() => (
              this.setState({count:number})
            )}/>
          )}</div>
        </div>
        <div className="input">
        <input onChange={event => this.setState({inputText:event.target.value})}/>
        <button onClick={() => this.setState(
          {inputText:"",imgArray:[...imgArray,inputText]}
      )}>
        add
        </button>
        </div>*/}


          <div className="doosje">
            <div className="dvd"/>
            <div className="ball"/>
          </div>






      </div>
    )
  }
}
