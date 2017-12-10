import React, { Component } from 'react';
import axios from 'axios';
import TagsList from './components/TagsList';
import SecondPage from './components/SecondPage'; 
import SearchBar from './components/SearchBar';
import logo from './../src/images/logos/quinoa_logo.jpeg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
        tags: [], //rendering all the tags
        tagSelected: [], //make it as array, because each selected tag has several categories.
        activeTag: "" //we gonna select one so use '' insted of []
    };
    // This binding is necessary to make `this` work in the callback
    this.selectingTagsMethod = this.selectingTagsMethod.bind(this);
  }

  //fetch the data from express 
   componentDidMount() {
    axios.get("/home").then((res) => {
      console.log(res.data);
      this.setState({
        tags: res.data
      });
    });
    // console.log(this.state.tags);
    // console.log("hellllllllllllllllllo");
  }

  //when we select the tag, it'll make a get reguest to fetch the data
  //from express server in the '/:tag' case, because now we select the tag.

  selectingTagsMethod(tag) {
    this.setState({
      activeTag: tag
    }, function(){
      axios.get(`/${this.state.activeTag}`).then((res) => {
        this.setState({
          tagSelected: res.data //the data will be the categories on each tag.
        });
      });
    });
  }

  render() {
    return (
      <div className='container' >
      
         <img src={logo} className="img-fluid"alt="logo" />

        <SearchBar/>
        {/* each tag with it's own selecting method. */}
        <TagsList tags={this.state.tags} selectingTagsMethod={this.selectingTagsMethod} />
            {/* for the second page */}
        <SecondPage tagSelected={this.state.tagSelected} activeTag={this.state.activeTag} />        
      </div>
    );
  }
}

export default App;