import React, {Component} from 'react';
import { Link } from 'react-router-dom';


class Title extends Component {
    

    render() {
        return(
            <div className="container">
                <div className='row'>
                    <div className="col-xs-6">
                        <Link to='/App' >Back</Link>
                            </div>
                    <div className="col-xs-6"><h2 className='text-center' >Quinoa</h2></div>
                </div>
            </div>
        );
    }
}

export default Title;