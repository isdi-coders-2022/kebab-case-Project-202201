import { useContext, useEffect } from "react";
import useFavoritesAPI from "../hooks/useFavoritesAPI";
import MainPageContext from "../store/contexts/MainPageContext";
import { overwriteFavoritesAction } from "../store/actions/favorites/actionCreators";
import FavoriteStreamer from "../components/FavoriteStreamer/FavoriteStreamer";
import ButtonText from "../components/ButtonText/ButtonText";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const DisplayButton = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  bottom: 10px;
  position: fixed;
  bottom: 75px;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const FavoritesPage = () => {
  let navigate = useNavigate();
  const goForm = () => {
    navigate(`/form`);
  };

  const { getAllFavorites, sendStreamer } = useFavoritesAPI();
  const { favList, dispatchFavs } = useContext(MainPageContext);
  useEffect(() => {
    async function callGetFavs() {
      const resp = await getAllFavorites();
      const action = overwriteFavoritesAction(resp);
      dispatchFavs(action);
    }
    callGetFavs();
  }, [dispatchFavs, getAllFavorites, sendStreamer]);

  return (
    <div className="container">
      {favList &&
        favList.map((favorite) => {
          return <FavoriteStreamer key={favorite.id} streamerInfo={favorite} />;
        })}

      <DisplayButton>
        <ButtonText text="Create" actionOnClick={goForm} />
      </DisplayButton>
    </div>
  );
};

export default FavoritesPage;
