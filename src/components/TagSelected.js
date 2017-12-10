import React from 'react';
import Categories from './Categories';


//It’s a stateless component, so shouldn’t use “this” in it when referring to props.

const TagSelected = (props) => {
    return (
        // extract the categories from the selected tag (tagSelected).
        <div className="container">
            {props.tagSelected.map(category => (
                <Categories
                    key={category.category_name}
                    category={category}
                />
            ))}
        </div>
    );
}

export default TagSelected;