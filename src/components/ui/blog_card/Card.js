import React from "react";
import styled from "styled-components";
import Button from "../Button";
// Grid container
const GridContainer = styled.div`
  padding-right: 5%;
  padding-left: 5%;
  overflow: hidden;
  margin: 20px;
`;

// Grid row
const GridRow = styled.div`
  margin-right: 5%;
  margin-left: 5%;
  display: flex;
`;

// Grid columns
const GridColumn = styled.div`
  padding-top: 10%;
  padding-right: 5%;
  padding-left: 5%;
  width: 50%;
  height: 50%;
  overflow: hidden;
`;
const H1 = styled.h6`
  color: white;
  font-family: "Raleway", sans-serif;
  font-weight: 300;
  font-size: 3rem;
  text-align: center;
  letter-spacing: 1rem;
`;
const CardTags = styled.h4`
  color: white;
  font-family: "Raleway", sans-serif;
  font-weight: 100;
  font-size: 16px;
  text-align: center;
  letter-spacing: 1rem;
  padding-top: 5px;
  padding-bottom: 5px;
`;
const CardTitle = styled.h2`
  color: white;
  font-family: "Raleway", sans-serif;
  font-weight: 300;
  font-size: 3rem;
  text-align: center;
  letter-spacing: 3px;
  padding-top: 5px;
  padding-bottom: 5px;
`;
const CardDescription = styled.h4`
  color: white;
  font-family: "Raleway", sans-serif;
  font-weight: 100;
  font-size: 16px;
  text-align: center;
  letter-spacing: 0.5rem;
  padding-top: 5px;
  padding-bottom: 5px;
`;
const CardDtails = styled.h3`
  color: white;
  font-family: "Raleway", sans-serif;
  font-weight: 200;
  font-size: 20px;
  text-align: center;
  letter-spacing: 4px;
  padding-top: 25px;
  padding-bottom: 25px;
`;
const ReadMoreButton = styled.div`
  background-color: #4caf50;
  border: none;
  color: white;
  padding: 10px 25px;
  text-align: center;
  text-decoration: none;
  font-size: 28px;
`;
const TitleImage = styled.div`
  overflow: hidden;
  display: block;
  margin-left: auto;
  margin-right: auto;
  height: 600px;
  padding-top: 10%;
`;

class Card extends React.Component {
  render() {
    return (
      //<LayoutWrapper>
      <GridContainer>
        <GridRow>
          <GridColumn>
            <CardTags>Routine Health</CardTags>
            <CardTitle>How To Be A Morning Person</CardTitle>
            <CardDescription>
              October 3, 2018 5 minutes 32 comments
            </CardDescription>
            <CardDtails>
              card Details: Lorem ipsum dolor sit amet, consectetur adipiscing
              elit, sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
              dolor in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
              proident, sunt in culpa qui officia deserunt mollit anim id est
              laborum.
            </CardDtails>
            <Button label="Read More" />
            <socialIcon>socialIcon</socialIcon>
          </GridColumn>
          <GridColumn>
            <TitleImage>
              <img
                src={
                  "https://2.bp.blogspot.com/-TJZnqUmbZnw/W24HZ2Gx0eI/AAAAAAAArGQ/ou2sE4dVvHontzMksOGSCehRp8UDP4x9gCLcBGAs/s1600/IMG_20180628_121913_HDR.jpg"
                }
              />
            </TitleImage>
          </GridColumn>
        </GridRow>
      </GridContainer>
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
