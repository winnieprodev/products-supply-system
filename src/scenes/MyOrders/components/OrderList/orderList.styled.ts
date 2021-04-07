import styled from "styled-components";
import { monoTextColor, primaryColor } from "styles/colors";

export const Wrapper = styled.div`
  margin: 30px 0;
`;

export const OrderSection = styled.div`
  padding-left: 20px;
  margin: 30px 0;
  display: flex;
  align-items: center;
`;

export const MonoSection = styled.div`
  display: flex;
  padding: 2px;
  align-items: center;
  text-align: center;
  width: 45px;
  height: 45px;
  background: #f4f4f4;
  border-radius: 10px;
`;

export const MonoText = styled.span`
  margin: auto;
  color: ${monoTextColor};
  font-size: 25px;
  font-weight: bold;
  text-transform: uppercase;
`;

export const CreatedSection = styled.div`
  padding-left: 15px;
  padding-right: 15px;
  width: 35%;
`;

export const SupplierTitle = styled.div`
  color: #0b0b0b;
  font-size: 16px;
  font-weight: 700;
  padding: 5px 0;
`;

export const CreatedText = styled.div`
  font-size: 12px;
  font-weight: 400;
  padding: 5px 0;
`;

export const ItemsSection = styled.div`
  padding-left: 35px;
  padding-right: 15px;
  text-align: right;
  width: 25%;
`;

export const ItemNums = styled.div`
  font-size: 14px;
  font-weight: 600;
  color: ${primaryColor};
  padding: 5px 0;
`;

export const DeliveryText = styled.div`
  font-size: 12px;
  font-weight: 400;
  padding: 5px 0;
`;

export const PrimaryAction = styled.div`
  padding-left: 10px;
  padding-right: 10px;
  width: 150px;
`;

export const SecondaryActions = styled.div`
  padding-left: 10px;
  padding-right: 10px;
  width: 150px;
`;
