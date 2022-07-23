import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import { ScrollToTop } from "react-to-top";
import { Header } from "./common/Header";
import { Footer } from "./common/Footer";


const Main = styled.main`
  min-height: calc(100vh - 50px);
`;

export const MainLayout = () => {
  return (
  <>
    <Header />
      <Main>
        <Suspense>
          <Outlet />
        </Suspense>
      </Main>
      <Footer />
      <ScrollToTop
      bgColor="#e6bd77"
      size={50}
      strokeWidth={3}
      strokeColor='#eead71'
      symbolSize={25}
      symbol="&#11165;"
      />
  </>
  );
};


