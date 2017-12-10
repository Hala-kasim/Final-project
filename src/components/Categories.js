import React from 'react';
import logo from '../../src/images/logos/quinoa_logo.jpeg';

const Categories = (props) => {
    return (
        <div className="col-6">
            <img className="img-fluid" src={logo}
                alt={`${props.category.category_name}`}/>
            <span className="font-weight-bold float-left">{props.category.category_name}</span>
            <span className="font-weight-bold float-right">{props.category.water_consumption.toLocaleString()} litres</span>
        </div>
    );
}

export default Categories;