import React from 'react'

const Header = props => {
   const {show} = props;

   return (
      <header className="top">
         <h1>Catch
         <span className="ofThe">
            <span className="of">of</span> 
            <span className="the">the</span> 
         </span>
          
          day</h1>
         <h3 className="tagline">
            <span>Fresh Daily {show} </span>
            
         </h3>
      </header>
   );
}


export default Header;