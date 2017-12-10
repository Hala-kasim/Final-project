import React, { Component } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';

class SimpleChart extends Component {
  constructor(props) {
    super();
  }
    render(){
      return(
        <div className='container'>
           {/* margin: is the char position according to the page. */}
           {/* data: the tagSelected, which it means the categories. */}
           
          <BarChart width={400} height={300} data={this.props.tagSelected}
          margin={{top: 20, right: 90, bottom: 20, left: 2}}>

          {/* category_name will be the x-axis */}
           <XAxis dataKey="category_name"/> 
           <YAxis/>
           <CartesianGrid strokeDasharray="3 3"/>
           <Tooltip/>
           <Legend />

         {/* dataKey: according to the shap in the chart. */}
           <Bar dataKey="water_consumption" stackId="a" fill="#82ca9d" unit=" MB" />
            </BarChart>
      </div>
    )
    }
}
export default SimpleChart;
