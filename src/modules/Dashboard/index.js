import React, { useEffect, useState } from "react";
import styled from "styled-components";
import isUndefined from "lodash/fp/isUndefined";
import InfoBar from "../InfoBar";
import Sidebar from "../Sidebar";
import ServiceContainer from "../Services";
import Footer from "../Footer";

const DashboardContainer = styled.div`
  margin-left: 80px;
  min-width: 763px;
  height: 100%;
  min-height: 100vh;
  position: relative;
`;

const Dashboard = () => {
  const [infoBarData, setInfoBarData] = useState(undefined);
  const [isFetchingInfoBar, setIsFetchingInfoBar] = useState(false);

  useEffect(() => {
    if (isUndefined(infoBarData) && !isFetchingInfoBar) {
      setIsFetchingInfoBar(true);
      fetch("/api/fetch_info_bar")
        .then((response) => response.json())
        .then((json) => {
          setInfoBarData(json);
          setIsFetchingInfoBar(false);
        });
    }
  }, []); // eslint-disable-line

  return (
    <DashboardContainer>
      <Sidebar />
      <InfoBar infoBarData={infoBarData} />
      <ServiceContainer />
      <Footer />
    </DashboardContainer>
  );
};

export default Dashboard;
