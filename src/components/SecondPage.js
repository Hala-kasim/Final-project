import React, {Component} from 'react';
import Title from './Title';
import ActiveTag from './ActiveTag';
import SimpleChart from './SimpleChart';
import TagSelected from './TagSelected';

//we've declared the 'activeTag' and 'tagSelected' in the parent component(App) as 'state',
//and pass it to the child component as a 'props

class SecondPage extends Component {
    
    render() {
        return(
            <div className="container">
                <Title />
                <ActiveTag activeTag={this.props.activeTag} />
                <SimpleChart tagSelected={this.props.tagSelected} />
                <TagSelected tagSelected={this.props.tagSelected} />
            </div>
        );
    }
}

export default SecondPage;