import React, { FC } from "react";
import { Navigate } from "react-router-dom";

import styled from "@emotion/styled";

import { useTypedSelector } from "../store/utils";

export const InfoPage: FC = () => {
  const isLoggedIn = useTypedSelector(
    state => state.loginFormReducer.isLoggedIn,
  );

  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  }
  return (
    <>
      <InformationPageTitle>Information Page</InformationPageTitle>
      <article>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid
          doloribus labore perspiciatis repudiandae voluptates. Accusamus
          aperiam, asperiores aut, dolore, dolorem ducimus eligendi excepturi
          labore laudantium nulla placeat quibusdam quod voluptas.
        </p>
        <p>
          Animi aut commodi dolorem ex fugiat officiis qui repellat sed sint
          tempore! Atque deleniti et fuga, impedit, incidunt iure magnam maiores
          minima modi necessitatibus non possimus provident, saepe sapiente
          voluptate.
        </p>
        <p>
          Animi blanditiis distinctio ex harum in, magnam nam odio repellat ut.
          Ab, accusantium, ad commodi culpa debitis eveniet illo ipsam molestias
          neque omnis possimus repellat sed soluta suscipit voluptate
          voluptates!
        </p>
        <p>
          Accusamus, architecto consequatur corporis dolor doloremque dolores
          ducimus incidunt magnam nam officia praesentium quos repellendus,
          saepe, sapiente sint soluta voluptatibus? Adipisci aliquid blanditiis
          impedit nulla repellat sed totam velit voluptates?
        </p>
        <p>
          Architecto aspernatur autem beatae consectetur dignissimos enim iste
          iusto libero nostrum nulla perspiciatis possimus provident quibusdam,
          soluta tempore totam ullam vero voluptate. Consectetur debitis harum
          hic perspiciatis quod veniam voluptatum.
        </p>
      </article>
    </>
  );
};

const InformationPageTitle = styled.h3`
  text-align: center;
  margin: 0.5rem auto;
`;
