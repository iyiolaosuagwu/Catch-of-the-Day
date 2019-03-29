import React from 'react';

const Header = props => {
   const {show} = props;

   const backToHome = props => {
      props.history.push(`/`);
   }

   return (
      <header className="top">
         <h1>Meal
         <span className="ofThe">
            <span className="of">of</span> 
            <span className="the">the</span> 
         </span>
          
          day</h1>
         <h3 className="tagline">
            <span>Fresh Daily from {show} </span>         
         </h3> <br/>
         <button onSubmit={backToHome} >Back Home</button>
      </header>
   );
}


export default Header;