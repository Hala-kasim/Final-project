import React, { Component } from 'react';
// import SingleTag from './SingleTag';
// import axios from 'axios';

class SearchBar extends Component {
  constructor(props){
    super(props);
    this.state = {
      tags: [],
      search: ''
    }
  }
  
///GET REQUEST ---
//  componentDidMount() {
//   axios.get("/:tag").then(res => {
//     this.setState({ tags: res.data });
//   });
// }
// updateSearch= (event) => {
//   this.setState({
//     tags:res.data,
//   search: event.target.value.substr(0,20)
//   // console.log(event.target.value)
//   })
// }

  // updateSearch= (event) => {
  //    this.setState({
  //       search: event.target.value.substr(0,20)
  //    // console.log(event.target.value)
  //    })
  // }

  render() {
    
    // let filtered = this.props.tags.filter(
    //     (tag) => {
    //       return (tag.tag_name.toLowerCase().indexOf(
    //         this.state.search.toLowerCase()) !== -1
    //       )
    //     }
    // );

    return (
      <div className="container">
             <form>
            <div className="form-group">
                {/* <ul>
                 {filtered.map((tag)=>{
                   return (
                     < SingleTag
                     tag={tag.tag_name}
                     key={tag.tag_id}
                     /> )
                 } )
                 } 

               </ul>  */}
             {/* <input className="form-control input-lg"
             id="myInput" type="text"
             onChange={this.updateSearch.bind(this)}
             value={this.state.search}
             placeholder='Search for categories'/> */}
             <input className="form-control input-sl"
             id="myInput" type="text"
             placeholder='Search for tags'/>
           </div>
              </form>
             
    </div>
    
    );
  }
}

export default SearchBar;