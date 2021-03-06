import React from "react";
import history from '../../history';
import axios from 'axios';
import styled from 'styled-components';
import AuthService from '../../utils/AuthService';
import Header from '../../components/ui/header/Header';
import Footer from '../../components/ui/footer/Footer';
import Card from '../../components/ui/blog_card/Card';
import Button from '../../components/ui/Button';

const auth = new AuthService();

const StyledContainer = styled.div`
  margin-bottom: 80px;
`;

class Fashion extends React.Component {
  constructor(props) {
    super(props);
    //console.log(this.props.genre);
    this.state = {
      genre: this.props.genre,
      blogs: []
    }
    this.postButtonHandler = this.postButtonHandler.bind(this);
  }

  componentDidMount() {
    axios.get('/blogs/all/fashion?posted=true').then(res => {
      if (res.data.data.length !== 0) {
        this.setState({
          blogs: res.data.data
        })
      }
    })
  }

  postButtonHandler() {
    axios.post('/blogs/create/fashion').then(res => {
      //console.log(res.data);
      let blogId = res.data.data._id;
      history.push(`/fashion/post/${blogId.toString()}`);
    })
  }

  render() {
    //console.log(this.state.blogs);
    //console.log(auth.loggedIn());
    return (
      <StyledContainer>
        <Header />
        <Footer />
        {
          this.state.blogs.length !== 0 
          ? 
          this.state.blogs.map(blog => {
            return <Card key={blog._id} blog={blog}/>
          })
          : 
          null
        }
        {/* <Card /> */}
        <Button label="MORE" />
        {
          auth.loggedIn() ?
            <div className="post-button">
              <Button className="post-button" clickHandler={this.postButtonHandler} label="POST" />
            </div> : null
        }
        {/* <div className="post-button">
          <Button className="post-button" label="POST" />
        </div> */}
      </StyledContainer>
    );
  }
}

export default Fashion;
