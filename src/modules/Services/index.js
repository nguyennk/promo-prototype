import React, { useEffect, useState } from "react";
import styled from "styled-components";
import map from "lodash/fp/map";
import filter from "lodash/fp/filter";
import isUndefined from "lodash/fp/isUndefined";

import { StyledButton, StyledInput } from "../shared";
import ServiceItem from "./modules/ServiceItem";

const ServicesContainer = styled.div`
  padding: 25px;
  padding-top: 105px;
  min-height: calc(100vh - 200px);
  h1 {
    margin-bottom: 35px;
    font-weight: 500;
  }
  label {
    margin-right: 5px;
  }
`;

const Services = () => {
  const [filterValue, setFilterValue] = useState("");
  const [serviceItems, setServiceItems] = useState(undefined);
  const [isFetching, setIsFetching] = useState(false);
  const [filteredServiceItem, setFilteredServiceItems] = useState([]);

  useEffect(() => {
    if (isUndefined(serviceItems) && !isFetching) {
      setIsFetching(true);
      fetch("/api/fetch_promo_services")
        .then((response) => response.json())
        .then((json) => {
          setServiceItems(json);
          setFilteredServiceItems(json);
          setIsFetching(false);
        });
    }
  }, []); // eslint-disable-line

  const updateServiceItem = (e) => {
    const text = e ? e.target.value : "";
    setFilterValue(text);
    if (text) {
      setFilteredServiceItems(
        filter(({ title }) => title.toLowerCase().includes(text), serviceItems)
      );
    } else {
      setFilteredServiceItems(serviceItems);
    }
  };

  return (
    <ServicesContainer>
      <h1>Services</h1>
      <StyledInput width={300}>
        <span>Filter</span>
        <input
          type="text"
          name="filter_input"
          value={filterValue}
          onChange={updateServiceItem}
        />
      </StyledInput>
      <StyledButton onClick={() => updateServiceItem("")}>Reset</StyledButton>

      <div>
        {map(
          ({ id, title, description, promo_code, is_activated }) => (
            <ServiceItem
              key={id}
              title={title}
              description={description}
              promo_code={promo_code}
              is_activated={is_activated}
            />
          ),
          filteredServiceItem
        )}
      </div>
    </ServicesContainer>
  );
};

export default Services;
