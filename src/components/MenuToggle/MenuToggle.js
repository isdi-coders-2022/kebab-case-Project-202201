import { useContext, useState } from "react";
import styled from "styled-components";
import { filterByContractAction } from "../../store/actions/mainPage/actionCreators";
import MainPageContext from "../../store/contexts/MainPageContext";

const Container = styled.div`
  background-color: rgba(98, 0, 238, 0.38);
  position: fixed;
  bottom: 65px;
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
`;
const Menu = styled.h2`
  background-color: ${(props) => props.theme.accentAlt2};
  width: 350px;
  height: 56px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 10px;
`;

const SubMenu = styled(Menu)`
  background-color: red;
`;
const MenuToggle = ({ action }) => {
  const { dispatchStreamerList } = useContext(MainPageContext);
  const [filterIsClicked, setFilterIsClicked] = useState(false);
  const subMenuAction = () => {
    setFilterIsClicked(true);
  };

  const filterByPartner = () => {
    const filterPartnerAction = filterByContractAction("partner");
    dispatchStreamerList(filterPartnerAction);
  };

  const filterByAffiliate = () => {
    const filterAffiliateAction = filterByContractAction("affiliate");
    dispatchStreamerList(filterAffiliateAction);
  };

  return (
    <>
      <Container>
        <Menu onClick={action}>SORT</Menu>
        <Menu onClick={subMenuAction}>FILTER</Menu>
        {filterIsClicked && (
          <>
            <SubMenu onClick={filterByPartner}>Partner </SubMenu>
            <SubMenu onClick={filterByAffiliate}>Affiliate</SubMenu>
          </>
        )}
        <Menu onClick={action}>SEARCH</Menu>
      </Container>
    </>
  );
};
export default MenuToggle;
