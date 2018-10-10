import React from "react";
import Menu from "../../components/navigation/Menu";
import styled from "styled-components";
import Footer from '../../components/ui/footer/Footer';
import SearchBar from '../../components/ui/search_bar/SearchBar';
import Carousel from '../../components/ui/carousel/Carousel';

var slides = [
  'https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?fit=crop&fm=jpg&h=825&q=80&w=1325',
  'https://images.unsplash.com/photo-1445251836269-d158eaa028a6?fit=crop&fm=jpg&h=825&q=80&w=1325',
  'https://images.unsplash.com/photo-1443926818681-717d074a57af?fit=crop&fm=jpg&h=825&q=80&w=1325'
];

const H2 = styled.h2`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, 50%);
  color: white;
  font-family: "Great Vibes", cursive;
  font-weight: 300;
  text-shadow: 0 0 3px white;
  font-size: 4rem;
  text-align: center;
  letter-spacing: 1rem;
  z-index: 2000;
`;

const H3 = styled.h3`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, 50%);
  margin-top: 21rem;
  color: white;
  font-family: "Lato", sans-serif;
  font-weight: 300;
  text-shadow: 0 0 3px white;
  font-size: 2rem;
  text-align: center;
  letter-spacing: 1rem;
`;
class Landing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      authenticated: true
    };
    // this.logout = this.logout.bind(this);
  }
  //AUTH
  // logout() {
  //     this.props.auth.logout();
  //     this.setState({ authenticated: false });
  // }

  render() {
    //const { isAuthenticated } = this.props.auth;
    //console.log(isAuthenticated());
    return (
      <div style={{ position: "relative" }}>
        <H2>City of Troy</H2>
        {/* <H3>Visit this link from time to time. You'll see updates here. :)</H3> */}
        <Carousel slides={slides} />
        <Menu />
        <SearchBar />
        <Footer />
      </div>
    );
  }
}

export default Landing;
