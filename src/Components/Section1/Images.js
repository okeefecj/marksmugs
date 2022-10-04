import React from 'react';
import mug1 from './pictures/mug1.jpeg';
import mug2 from './pictures/mug2.jpeg';
import mug3 from './pictures/mug3.jpeg';
import mug4 from './pictures/mug4.jpeg';
import mug5 from './pictures/mug5.jpeg';

const imagePaddingStyle = {
    padding: '12.5px'
}

function Image() {
    return (
      <div>
        
        <img src={mug1} width="175" height="175" alt="mug1"  style={imagePaddingStyle}/>
        <img src={mug2} width="175" height="175" alt="mug2"  style={imagePaddingStyle}/>
        <img src={mug3} width="175" height="175" alt="mug3" style={imagePaddingStyle}/>
        <img src={mug4} width="175" height="175" alt="mug4" style={imagePaddingStyle}/>
        <img src={mug5} width="175" height="175" alt="mug5" style={imagePaddingStyle}/>
        
      </div>

    );
  }
  
  export default Image;