import React, {Component} from 'react';
import TagsList from './TagsList';
import SearchBar from './SearchBar';
//import SimpleChar from './SimpleChar';

class Home extends Component {
    constructor(props) {
        super();
    }

    render() {
        return(
            <div className="container">
                 <SearchBar />
                {/* findTaggedCategories={this.props.findTaggedCategories} />*/} 
                
                   <TagsList tags={this.props.tags}/>
                    {/* <SimpleChar />          */}
            </div>
        );
    }
}

export default Home;