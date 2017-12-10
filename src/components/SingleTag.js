import React from "react";
import FaChevronRight from 'react-icons/lib/fa/chevron-right';
import { Link } from 'react-router-dom'


class SingleTag extends React.Component{
  constructor(){
    super();
   // This binding is necessary to make `this` work in the callback
    this.clickHandler = this.clickHandler.bind(this);
  }

//pass the method from the parent component(App) to the child.
//onClick, the selectingTagsMethod(tag) method will target,
//which will target the get request (in the parent component(App)). 
clickHandler(e){
    e.preventDefault();
    let tag = this.props.tag; //pass the data(tag) from the parent component(App) to the child component(SingleTag)
    this.props.selectingTagsMethod(tag); //method 'selectingTagsMethod(tag)'
}

 render() {
  return (
     <li>
        <div className="row list">
               <div className='col-xs-8 tags'>
                 <strong>{this.props.tag}</strong>  </div>
              
                 <div className='col-xs-4 icon'>
                <Link to='/App' > 
                   <FaChevronRight onClick={this.clickHandler} />
                   </Link>
                        </div>
         </div>
     </li>
    );
  }
};
export default SingleTag;
