import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './header';
import Hero from './hero';
import Card from './card';
import CardContainer from './card';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);


function App(){
  return (
    <div className='app-container'>
        <Header />
        <Hero />
        <CardContainer /> 
    </div>
  );
}


//Notes

//Diffrent stlyle of displaying or non displaying element
/* <h1 style={ {display : props.setup ? 'block' : 'none'} }></h1> */

{/* <i  style={ {display: props.isPun ? 'block' : 'none'} } className="fa-regular fa-star ispan"></i> */}

// <h1 style={ { display : props.setup ? 'block' : 'none'}}>Setup : { props.setup }</h1>


// function UserGreetings(props){
//   return <h1>Welcome back {props.userName ? props.userName : 'UserName'} !</h1>
// }


// function GuestGreetings(props){
//   return <h1>Please sign up.</h1>
// }


// function Greetings(props){
//   const isLoggedIn = props.isLoggedIn;
//   if(isLoggedIn){
//     return <UserGreetings userName='Fethi Can Sert'/>
//   }
//   return <GuestGreetings />
// }


{/* <Greetings isLoggedIn={false}/> */}



//Main Project 
