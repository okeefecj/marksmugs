import React from 'react';
import './Image.css';
import mug1 from './pictures/mug1.jpg';
import mug2 from './pictures/mug2.jpg';
import mug3 from './pictures/mug3.jpg';
import mug4 from './pictures/mug4.jpg';
import mug5 from './pictures/mug5.jpg';

function Image() {
    return (
      <div>
        <table>
          <tr>
            <td>
              <img src={mug1} alt="mug1" />
              <p>Test Test Test</p>
              </td>
            <td>
              <img src={mug2} alt="mug2" />
              <p>Test Test Test</p>
              </td>
            <td>
              <img src={mug3} alt="mug3" />
              <p>Test Test Test</p>
              </td>
          </tr>
          </table>
          <table>
          <tr>
            <td>
              <img src={mug4} alt="mug4" />
              <p>Test Test Test</p>
              </td>
            <td>
              <img src={mug5} alt="mug5" />
              <p>Test Test Test</p>
              </td>
          </tr>
        </table>
      </div>
    );
  }
  
  export default Image;