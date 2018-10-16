import React from "react";
import styled from "styled-components";
import Button from "../Button";
// Grid container
const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 500px;

  color: white;
  font-family: "Raleway";
  text-align: center;
  margin: 10px;
  .card_text {
    > * {
      margin-bottom: 10px;
    }
  }
  .thumbnail {
    height: 100%;
    margin: 10px;
    > * {
      margin-bottom: 10px;
    }
  }

  @media (min-width: 600px) {
    flex-direction: row;
    max-width: 1100px;
    margin: 100px auto;
    .card_text {
      height: 100%;
      margin: 0 30px;
      align-content: center;
      padding: 30px 0;
    }
    .thumbnail {
      /* margin: 0 50px;
      align-content: center; */
      div {
        img {
          width: 100%;
          height: auto;
        }
      }
    }
  }
`;

const Tags = styled.div`
  font-size: 2rem;
  //margin-bottom: 10px;
`;
const Title = styled.p`
  font-size: 4rem;
  //margin-bottom: 10px;
`;
const Meta = styled.div`
  font-size: 1.5rem;
  font-family: "Raleway", cursive;
  //margin-bottom: 10px;
`;
const Excerpt = styled.p`
  font-size: 1.5rem;
  line-height: 1.4;
`;

const TitleImage = styled.div`
  height: 100%;
  img {
    height: 100%;
  }
`;

class Card extends React.Component {
  render() {
    return (
      //<LayoutWrapper>
      <CardContainer>
        <div className="thumbnail">
          <TitleImage>
            <img
              src={
                "https://2.bp.blogspot.com/-TJZnqUmbZnw/W24HZ2Gx0eI/AAAAAAAArGQ/ou2sE4dVvHontzMksOGSCehRp8UDP4x9gCLcBGAs/s1600/IMG_20180628_121913_HDR.jpg"
              }
            />
          </TitleImage>
        </div>
        <div className="card_text">
          <Tags>Routine Health</Tags>
          <Title>How To Be A Morning Person</Title>
          <Meta>October 3, 2018 5 minutes 32 comments</Meta>
          <Excerpt>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation
          </Excerpt>
          <Button label="Read More" />
          <socialIcon>socialIcon</socialIcon>
        </div>
      </CardContainer>
      //</LayoutWrapper>
    );
  }
}

// Render Layout React element into the DOM
//  ReactDOM.render(
//    <Layout />,
//    container
//  )

export default Card;
