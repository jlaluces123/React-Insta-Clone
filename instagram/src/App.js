import React, { Component } from 'react';

import dummyData from './dummy-data';
import PostContainer from './components/PostContainer/PostContainer';
import Search from './components/SearchBar/Search';
import Authenticate from './components/Authentication/Authenticate';
import styled from 'styled-components';

import './App.css';

// ------------------- STYLED COMPONENTS ---------------

const AppDiv = styled.div`
  text-align: center;
  background-color: #FAFAFA;
`;

// ------------------- STYLED COMPONENTS ---------------

class App extends Component {
  constructor() {
    super();
    this.state = {
      posts: [],
      search: ''
    }
  }

  componentDidMount() {
    this.setState({
      posts: dummyData
    })
  }

  handleSearchInput = event => {
    console.log(event.target.value);
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    return (
      <AppDiv> 
        <Search handleSearchInput={this.handleSearchInput}/>        
        {this.state.posts.map((eachElement) => {
          return <PostContainer key={eachElement.username} profileObject={eachElement} />;
        })}                  
      </AppDiv>
    );
  }
}

export default Authenticate(App);
