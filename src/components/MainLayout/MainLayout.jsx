import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import { Oval } from  'react-loader-spinner'
import { ScrollToTop } from "react-to-top";
import { Header }from "components/Header";
import { Loader } from "components/Loader";
import { Footer } from "components/Footer";


const Main = styled.main`
  min-height: calc(100vh - 50px);
`;

export const MainLayout = () => {
  return (
  <>
    <Header />
      <Main>
        <Suspense fallback={
        <Loader>
            <Oval color="#eead71" height={80} width={80}/>
          </Loader>}>
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


