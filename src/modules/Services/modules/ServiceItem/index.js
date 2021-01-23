import React, { useState } from "react";
import styled from "styled-components";
import toast from "react-hot-toast";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy } from "@fortawesome/free-regular-svg-icons";
import copy from "copy-to-clipboard";

import { StyledButton, StyledInput } from "../../../shared";

const ServiceItemWrapper = styled.div`
  background: white;
  border-radius: 5px;
  border: 1px solid #e3e3e3;
  padding: 20px 30px;
  margin-top: 25px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  .text-block {
    max-width: 400px;
    width: 100%;
    span {
      line-height: 1.4em;
      font-size: 0.9em;
      color: #7b7d7e;
    }
  }
  h3 {
    font-weight: 400;
    font-size: 1.7em;
    margin: 0 0 15px;
  }
  @media (max-width: 1257px) {
    flex-flow: row wrap;
    .text-block,
    .function-block {
      max-width: 100%;
      flex-basis: 100%;
    }
    .function-block {
      margin-top: 40px;
    }
  }
`;

const InputWithClipboard = ({ promo_code }) => {
  const copyToClipboard = () => {
    copy(promo_code);
    toast("Copied to clipboard!");
  };

  return (
    <StyledInput width={300} triggerOnClick onClick={copyToClipboard}>
      <span>Promocode</span>
      <input type="text" name="promo_code" value={promo_code} disabled />
      <span>
        <FontAwesomeIcon icon={faCopy} />
      </span>
    </StyledInput>
  );
};

const ServiceItem = ({ title, description, promo_code, is_activated }) => {
  const [isActivate, setActivate] = useState(is_activated);
  return (
    <ServiceItemWrapper data-testid="service_item">
      <div className="text-block">
        <h3>{title}</h3>
        <span>{description}</span>
      </div>
      <div className="function-block">
        <InputWithClipboard promo_code={promo_code} />
        <StyledButton
          width={300}
          intent="primary"
          onClick={() => {
            setActivate(true);
            toast.success(`Activate bonus for ${title} successfully!`);
          }}
          disabled={isActivate}
        >
          {isActivate ? "Activated" : "Activate bonus"}
        </StyledButton>
      </div>
    </ServiceItemWrapper>
  );
};

export default ServiceItem;
