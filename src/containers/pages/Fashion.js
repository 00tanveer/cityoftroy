import React from "react";
import Header from '../../components/ui/header/Header';
import Footer from '../../components/ui/footer/Footer';
import Card from '../../components/ui/blog_card/Card';
import Button from '../../components/ui/Button';

class Fashion extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log('here in fashion');
    return (
      <div className="fashion_container" style={{marginBottom: 80}}>
        <Header />
        <Footer />
        <Card />
        <Button label="MORE" />
      </div>
    );
  }
}

export default Fashion;
