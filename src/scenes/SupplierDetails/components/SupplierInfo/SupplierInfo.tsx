import { EnvelopeIcon, PhoneIcon, WarningIcon } from "components";
import { Supplier } from "models";
import React from "react";

import * as Styled from "./supplierInfo.styled";

interface OwnProps {
  info: Supplier;
}

const SupplierInfo: React.FC<React.PropsWithChildren<OwnProps>> = ({
  info,
}) => (
  <Styled.Wrapper>
    <Styled.Section>
      <Styled.MonoSection>
        <Styled.MonoText>{info.mono}</Styled.MonoText>
      </Styled.MonoSection>
      <div>
        <Styled.Title>{info.title}</Styled.Title>
        <Styled.ContactSection>
          <Styled.ContactGroup>
            <Styled.PhoneIcon>
              <PhoneIcon />
            </Styled.PhoneIcon>
            <Styled.PhoneText>{info.phone}</Styled.PhoneText>
          </Styled.ContactGroup>
          <Styled.ContactGroup>
            <Styled.Icon>
              <EnvelopeIcon />
            </Styled.Icon>
            <Styled.EmailText>{info.email}</Styled.EmailText>
          </Styled.ContactGroup>
        </Styled.ContactSection>
      </div>
    </Styled.Section>
    {info.remarks && (
      <Styled.SpecialGroup>
        <Styled.Icon>
          <WarningIcon />
        </Styled.Icon>
        <Styled.SpecialText>
          Special remarks for <b>{info.title}</b>: {info.remarks}
        </Styled.SpecialText>
      </Styled.SpecialGroup>
    )}
  </Styled.Wrapper>
);

export default React.memo(SupplierInfo);
