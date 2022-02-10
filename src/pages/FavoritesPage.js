import { useContext, useEffect } from "react";
import useFavoritesAPI from "../hooks/useFavoritesAPI";
import MainPageContext from "../store/contexts/MainPageContext";
import { overwriteFavoritesAction } from "../store/actions/favorites/actionCreators";
import FavoriteStreamer from "../components/FavoriteStreamer/FavoriteStreamer";

const FavoritesPage = () => {
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
          return <FavoriteStreamer streamerInfo={favorite} />;
        })}
    </div>
  );
};

export default FavoritesPage;
<button>shish-kebab</button>;
