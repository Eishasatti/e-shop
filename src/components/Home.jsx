import React, { useEffect } from 'react';
import backgroundImage from '../assets/back1.png';
import '../assets/style.css';
// import { LordIcon } from '@lordicon/react-lord-icon';
const Home = () => {
    useEffect(() => {
        // Load the Lord Icon script if not already loaded
        const script = document.createElement('script');
        script.src = 'https://cdn.lordicon.com/ritsejru.js';
        script.async = true;
        document.body.appendChild(script);
    }, []);
  const bodyStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
    margin: '0',
    padding: '0',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const contentStyle = {
  
    padding: '20px',
    borderRadius: '10px',
    
    textAlign: 'center',
  };

  return (
    <div style={bodyStyle}>
      <div className="container">
        <div className="row justify-content-center align-items-center" style={{ height: '100vh' }}>
          <div className="col-md-6 items-center" style={contentStyle}>
            <p className=' custom-font'>
              Discover an exciting array of high-quality products tailored to meet all your needs. From the latest tech gadgets to stylish fashion pieces and essential home goods, we have something for everyone. Browse through our extensive collections and find the perfect items to enhance your lifestyle!
            </p>
            <br />
            <button className="btn btn-mine ">
            <lord-icon
                src="https://cdn.lordicon.com/guothkao.json"
                trigger="hover"
                style={{ width: '25px', height: '25px' }}
            ></lord-icon> 
               - Shop Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
