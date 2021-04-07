import { GenericProductIcon } from "components";
import styled from "styled-components";
import { secondaryColorLighter } from "styles/colors";

export const Block = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  background: #f4f4f4;
  position: relative;
  padding: 2px;
  border-radius: 10px;
  margin-bottom: 20px;
`;

export const Content = styled.div`
  width: 375px;
  background: #f4f4f4;
  position: relative;
  align-items: center;
  justify-content: center;
`;

export const Image = styled.img`
  width: 100%;
  max-height: 100%;
  mix-blend-mode: darken;
`;

export const NoImage = styled(GenericProductIcon)`
  font-size: 100px;
  text-align: center;
  display: inherit;
  margin: 0 auto;
  padding: 4vh 0;
  opacity: 0.2;
`;

export const InfoSection = styled.div`
  padding: 15px;
  width: calc(100% - 375px);
  position: relative;
  background: #ffffff;
  border-radius: 10px;
`;

export const CloseIcon = styled.div`
  position: absolute;
  top: 12px;
  right: 16px;
  font-size: 24px;
  width: 24px;
  text-align: center;
  padding: 8px;
  border-radius: 50%;
  color: #000000;

  &:hover {
    background: ${secondaryColorLighter};
  }
`;

export const ProductTitle = styled.p`
  padding-left: 15px;
  color: #000000;
  font-size: 24px;
  font-weight: bold;
`;

export const SupplierSection = styled.div`
  padding-left: 15px;
  color: #000000;
  font-size: 16px;
`;

export const SpecialGroup = styled.div`
  display: flex;
  align-items: center;
  padding: 15px;
`;

export const SpecialText = styled.span`
  padding-left: 5px;
  padding-right: 5px;
  color: #484848;
  font-size: 14px;
`;

export const AlertIcon = styled.div`
  font-size: 15px;
  margin-right: 2px;
  color: #000000;
  opacity: 0.5;
`;

export const AmountSection = styled.div`
  padding: 10px 15px;
  align-items: center;
`;

export const AmountLabel = styled.div`
  color: #000000;
  font-size: 14px;
  padding: 15px;
`;
