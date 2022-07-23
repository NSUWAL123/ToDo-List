import logo from './List_logo.svg';
import './heading.css';

function Heading() {
    return ( 
        <div className="header">
            <img src={logo} alt="" srcset="" />
            <h1>Create List</h1>
        </div>
     );
}

export default Heading;