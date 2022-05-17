import React from "react";

import styled from "@emotion/styled";

export const NotFoundIndicator = () => (
  <NotFoundTitle>This page does not exist</NotFoundTitle>
);

const NotFoundTitle = styled.h3`
  text-align: center;
  font-size: 30px;
  @media (max-width: 600px) {
    font-size: 20px;
  }
`;
