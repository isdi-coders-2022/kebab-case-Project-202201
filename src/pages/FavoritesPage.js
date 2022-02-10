import { useEffect, useState } from "react";
import useFavoritesAPI from "../hooks/useFavoritesAPI";

const FavoritesPage = () => {
  const { getAllFavorites } = useFavoritesAPI();
  const [favList, setFavList] = useState([]);

  useEffect(() => {
    async function callGetFavs() {
      const fetchedFavs = await getAllFavorites();
      setFavList(fetchedFavs);
    }
    callGetFavs();
  }, [getAllFavorites]);

  return <div className="container"></div>;
};

export default FavoritesPage;
