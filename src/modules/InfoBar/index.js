import React from "react";
import getOr from "lodash/fp/getOr";
import styled from "styled-components";

const InforBarContainer = styled.div`
  height: 80px;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  background: white;
  display: flex;
  justify-content: start;
  padding: 0 25px;
  align-items: center;
`;

const InfoItem = styled.div`
  display: inline-block;
  margin-right: 25px;
  span {
    display: block;
    line-height: 1em;
  }
  span:first-child {
    color: #7b7d7e;
    margin-bottom: 10px;
    font-size: 0.9em;
  }
  span:last-child {
    font-weight: 500;
  }
`;

const InfoBar = ({ infoBarData }) => (
  <InforBarContainer>
    <InfoItem>
      <span>Balance</span>
      <span data-testid="balance_amount">
        {getOr(0, "balance", infoBarData).toLocaleString()} $
      </span>
    </InfoItem>
    <InfoItem>
      <span>Payout</span>
      <span data-testid="payout_amount">
        {getOr(0, "payout", infoBarData).toLocaleString()} $
      </span>
    </InfoItem>
  </InforBarContainer>
);

export default InfoBar;
