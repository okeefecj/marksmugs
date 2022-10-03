import Starbucks from "./Starbucks.png";
import Target from "./Target.jpg";
import CircuitCity from "./CircuitCity.png";
import BassProShops from "./BassProShops.png";

const imagePaddingStyle = {
    padding: '12.5px'
}

const Links = () => {
    return (  
        <div className="Links">
            <h2>Our Vendors</h2> 
                <body>
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
                </body>
            </div>
    );
}
export default Links;