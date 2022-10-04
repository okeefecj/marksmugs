import Starbucks from "./pictures/Starbucks.png";
import Target from "./pictures/Target.jpeg";
import CircuitCity from "./pictures/CircuitCity.png";
import BassProShops from "./pictures/BassProShops.png";
import './Links.css'
const imagePaddingStyle = {
    padding: '12.5px',
   
}

const Links = () => {
    return (  
        <section id="imglinks">
          <h1>Where To Find Us </h1> 
          <p>  
                <a href="https://www.starbucks.com/">
                <img src={Starbucks} width="150" height="150" style={imagePaddingStyle}/>
                </a>
                <a href="https://www.target.com/">
                    <img src={Target} width="150" height="150" style={imagePaddingStyle}/>
                </a>
                <a href="https://circuitcity.com/"> 
                    <img src={CircuitCity} width="150" height="150" style={imagePaddingStyle}/>
                </a>
                <a href="https://www.basspro.com/shop/en#">
                    <img src={BassProShops} width="150" height="150" style={imagePaddingStyle}/>
                </a>
          </p>      
        </section>
    );
}
export default Links;