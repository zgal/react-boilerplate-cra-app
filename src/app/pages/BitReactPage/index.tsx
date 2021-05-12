import ProductList from '@bit/zgal.react-tutorial.product-list';
import { NavBar } from 'app/components/NavBar';
import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import styled from 'styled-components/macro';

export function BitReactPage() {
  return (
    <>
      <Helmet>
        <title>Bit React Tutorial</title>
        <meta name="description" content="Bit React Tutorial" />
      </Helmet>
      <NavBar />
      <Wrapper>
        <ProductList />
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  flex-direction: column;
`;
