import React from 'react';
import CoronaVirus from '../Image/CoronaVirus.jpg'

class Home extends React.Component {
    render() {
        return(
            <div className="top-wrapper" class="alert alert-secondary" role="alert">
                <div className="containe">
                    <div className="top-txt">
                        <img src={CoronaVirus} alt="CoronaVirus"></img>
                        <br></br><br></br><br></br><br></br>
                        <br></br><br></br><br></br>
                    </div>
                </div>
             </div>
        )
    }
}

export default Home;
