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
  font-family: 'Raleway';
  text-align: center;
  margin: 10px;
  .card_text {
  }
  .thumbnail {
    height: 100%;
    margin: 10px;
  }
`;
// const TitleImage = styled.div`
//   height: 100%;
// `;
const Tags = styled.div`
  font-size: 2rem;
`;
const Title = styled.p`
  font-size: 4rem;
`;
const Meta =  styled.div`
  font-size: 1.5rem;
  font-family: cursive;
`;
const Excerpt = styled.p`
  font-size: 1.5rem;
  line-height: 1.4;
`;

// Grid row
const TitleImage = styled.div`
  overflow: hidden;
  display: block;
  margin-left: auto;
  margin-right: auto;
  height: 100%;
  padding-top: 10%;
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
            <Meta>
              October 3, 2018 5 minutes 32 comments
            </Meta>
            <Excerpt>
              Lorem ipsum dolor sit amet, consectetur adipiscing
              elit, sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
              dolor in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
              proident, sunt in culpa qui officia deserunt mollit anim id est
              laborum.
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
