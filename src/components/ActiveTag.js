import React from 'react';


//It’s a stateless component, so shouldn’t use “this” in it when referring to props, just 'props.activeTag'
//we've declared the active tag in the parent component(App) as 'state',
//and pass it to the child component as a 'props'

const ActiveTag = (props) => {
    return (
        <div>
        <h4 className="py-2 my-2">The <span className="text-capitalize">
            {props.activeTag}
            </span> categories is :  </h4>
        </div>
    )
}

export default ActiveTag;