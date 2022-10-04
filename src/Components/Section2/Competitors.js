import './Table.css';

function Competitors() {
  return (
    <section id="table">   
      <h1>There's No Competition.</h1>
      <table>
        <tr className="first">
          <th>Features</th>
          <th>Mark's Mugs</th>
          <th>Yeti</th>
          <th>Kevin's Kups</th>
        </tr>
        <tr className='odd'>
          <td>Max Capacity</td>
          <td>1 Gallon</td>
          <td>32 fl. oz</td>
          <td>32 fl. oz</td>
        </tr>
        <tr className='even'>
          <td>Bluetooth Capability</td>
          <td>Yes</td>
          <td>No</td>
          <td>No</td>
        </tr>
        <tr className='odd'>
          <td>Patented SmartCup© Technology</td>
          <td>Yes</td>
          <td>No</td>
          <td>No</td>
        </tr>
        <tr className='even'>
          <td>Temperature Range</td>
          <td>-459.67°F - 1300°F</td>
          <td>-30°F - 185°F</td>
          <td>65°F - 100°F</td>
        </tr>
      </table>
    </section>
 
  );
}
export default Competitors;