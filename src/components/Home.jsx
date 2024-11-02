import React from 'react'
import backgroundImage from '../assets/back1.png';
const Home = () => {
   


  const bodyStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
    margin: '0',
    padding: '0',
  };
  return (
    <div>
        <body style={bodyStyle}>
            
        </body>
    </div>
  )
}

export default Home;