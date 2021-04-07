import styled from "styled-components";
import { monoTextColor, secondaryColorDarker } from "styles/colors";

export const Wrapper = styled.div`
  border-radius: 11px;
  align-items: center;
  background: rgba(196, 196, 196, 0.1);
  padding: 10px 20px;
  margin-bottom: 20px;
  position: relative;
`;

export const Section = styled.div`
  display: flex;
  padding: 2px 5px;
  align-items: center;
`;

export const MonoSection = styled.div`
  display: flex;
  padding: 2px;
  align-items: center;
  text-align: center;
  width: 70px;
  height: 55px;
  background: white;
  border-radius: 10px;
  box-shadow: 0 0 5px ${secondaryColorDarker};
`;

export const MonoText = styled.span`
  margin: auto;
  color: ${monoTextColor};
  font-size: 35px;
  font-weight: bold;
  text-transform: uppercase;
`;

export const Title = styled.span`
  padding-left: 15px;
  padding-right: 15px;
  color: #0b0b0b;
  font-size: 24px;
  font-weight: 700;
`;

export const ContactSection = styled.div`
  padding-left: 15px;
  padding-right: 15px;
  display: flex;
  align-items: center;
`;

export const ContactGroup = styled.div`
  display: flex;
  align-items: center;
  margin-top: 5px;
  margin-right: 10px;
`;

export const PhoneText = styled.span`
  padding-left: 5px;
  padding-right: 5px;
  color: #000000;
  font-size: 14px;
  font-weight: 400;
`;

export const EmailText = styled.span`
  padding-left: 5px;
  padding-right: 5px;
  color: #000000;
  font-size: 14px;
  font-weight: 400;
  text-decoration: underline;
`;

export const PhoneIcon = styled.div`
  font-size: 15px;
  margin-right: 2px;
  color: #000000;
  opacity: 0.5;
  transform: scaleX(-1);
`;

export const Icon = styled.div`
  font-size: 15px;
  margin-right: 2px;
  color: #000000;
  opacity: 0.5;
`;

export const SpecialGroup = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
  margin-right: 10px;
`;

export const SpecialText = styled.span`
  padding-left: 5px;
  padding-right: 5px;
  color: #484848;
  font-size: 10px;
`;
