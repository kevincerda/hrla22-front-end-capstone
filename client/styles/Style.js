import styled from 'styled-components';

export const Bar = styled.div`
  width: ${props => props.percent}%;
  height: 17px;
  box-shadow: inset 0 0 0 1px rgba(0,0,0,.25), inset 0 -1px 0 rgba(0,0,0,.05);
  border-radius: 1px;
  background: #fb0;
  background: -webkit-linear-gradient(top,#ffce00,#ffa700);
  background: linear-gradient(to bottom,#ffce00,#ffa700);
  background-color: #ffce00;
`;

export const ProgressBar = styled.div`
  float: left;
  margin: 0px 10px 0px 10px;
  width: 100px;
  border-radius: 1px;
  box-shadow: inset 0 1px 2px rgba(0,0,0,.4), inset 0 0 0 1px rgba(0,0,0,.1);
  overflow: hidden;
  background: #f2f2f2;
  background: -webkit-linear-gradient(top,#eee,#f6f6f6);
  background: linear-gradient(to bottom,#eee,#f6f6f6);
  background-color: #f3f3f3;
  height: 17px;
`;

export const BarDiv = styled.div`
  display: flex;
  vertical-align: center;
  width: 180px;
  height: 100%;
  padding-bottom: 2px;
`;

export const RatingsContainer = styled.div`
  width: 65%;
  position: absolute;
  height: 250px;
  padding-left: 14px;
`;

export const RatingsLeftWrapper = styled.div`
  float: left;
  min-width: 220px;
  min-height: 150px;
`;

export const RatingsRightWrapper = styled.div`
  height: 230px;
  width: 100%;
  max-width: 250px;
  min-height: 230px;
  min-width: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Stars = styled.div`
  margin: none;
  display: inline;
  font-size: 16px;
  color: #FFBD00;
  padding-right: 8px;
`;





export const Wrapper = styled.div`
  font-family: ${props => props.theme.font};
  margin-right: auto;
  max-width: auto;
  padding: 5px 0px 20px 0px;
`;

export const Body = styled.div`
  margin: auto;
  padding: 0px 0px 15px 0px;
`;

export const Button = styled.button`
  margin-right: 10px;
  font-size: 11px;
  line-height: 20px;
  text-align: center;
  background: #e7e9ec;
  border-radius: 3px;
  border-color: #ADB1B8 #A2A6AC #8D9096;
  border-style: solid;
  border-width: 1px;
  display: inline-block;
  text-decoration: none;
  vertical-align: middle;
  width: 80px;
  cursor: pointer;
`;

export const Date = styled.h4`
  margin: auto;
  font-size: 13px;
  font-weight: 400;
  line-height: 19px;
  color: rgb(85, 85, 85);
`;

export const FeedbackAlert = styled.text`
  font-size: 12px;
  line-height: 15px;
  color: #007600;
  padding-right: 10px;
`;

export const FeedbackCheck = styled.text`
font-size: 12px;
line-height: 15px;
color: #007600;
padding-right: 6px;
`;

export const Helpful = styled.text`
  margin: auto;
  color: rgb(85, 85, 85);
  font-size: 13px;
  line-height: 19px;
`;

export const ImageIcon = styled.img`
  height: 32px;
  width: 32px;
  padding-right: 10px;
`;

export const Link = styled.text`
  color: #0066c0;
  font-size: 13px;
  font-weight: 900px;
  line-height: 19px;
  text-decoration: none;
  text-decoration-style: solid;
  cursor: pointer;

&:hover {
  color: #C45602;
  text-decoration: underline;
}
`;

export const Links = styled.div`
  margin: auto;
  padding: 15px 0px 5px 0px;
`;

export const Name = styled.text`
  height: 34px;
  font-size: 13px;
  font-weight: 400;
  line-height: 19px;
  color: #111;
  display: flex;
  align-items: center;
`;

export const RatingStars = styled.div`
  margin: none;
  display: inline;
  font-size: 12px;
  color: #FFBD00;
  padding-right: 8px;
`;

export const Seperator = styled.text`
  background-color: rgb(221, 221, 221);
  margin: -2px 0.67375em 0px 0.67375em;
  font-size: 13px;
  height: 14px;
  width: 1px;
  vertical-align: middle;
  line-height: 0px;
  display: inline-block;
`;

export const Title = styled.h3`
  color: rgb(17, 17, 17);
  margin: auto;
  padding: 10px 0px 5px 0px;
  font-size: 14px;
  font-weight: 700;
  line-height: 19px;
`;

export const Verified = styled.h5`
  color: rgb(196, 85, 0);
  margin: auto;
  padding: 0px 0px 5px 0px;
  font-size: 11px;
  font-weight: 900;
  line-height: 16.115px;
`;