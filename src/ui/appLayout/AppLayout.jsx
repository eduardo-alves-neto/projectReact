import { Outlet } from "react-router-dom";
import Sidebar from "../Sidebar";
import Header from "../Header/Header";
import { Container, Main, StyledAppLayout } from "./styles";


function AppLayout() {
  return (
    <StyledAppLayout>
      <Header />
      <Sidebar />
      <Main>
        <Container>
          <Outlet />
        </Container>
      </Main>
    </StyledAppLayout>
  );
}

export default AppLayout;
