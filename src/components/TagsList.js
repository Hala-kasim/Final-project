import React from 'react';
import SingleTag from './SingleTag';


//It’s a stateless component, so shouldn’t use “this” in it when referring to props.

const TagsList = (props) => {
    
        return(
            <div className="container">
                <ul>
                    {props.tags.map((tag) => {
                                return (
                                < SingleTag
                                tag={tag.tag_name}
                                key={tag.tag_id}
                                selectingTagsMethod={props.selectingTagsMethod}
                                /> )
                            })
                        }
                       
                </ul>
                
            </div>
        );
    }

export default TagsList;
