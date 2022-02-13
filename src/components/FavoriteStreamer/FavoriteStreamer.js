import styled from "styled-components";
import propTypes from "prop-types";
import ClipCarousel from "../ClipCarousel/ClipCarousel";
import ButtonImage from "../ButtonImage/ButtonImage";
import { useContext } from "react";
import MainPageContext from "../../store/contexts/MainPageContext";
import useFavoritesAPI from "../../hooks/useFavoritesAPI";
import { overwriteFavoritesAction } from "../../store/actions/favorites/actionCreators";
import { useNavigate } from "react-router-dom";

const StreamerArticle = styled.article`
  background: ${(props) => props.theme.alt};
  padding: 5px 7px;
`;
const EditButton = styled.div`
  display: flex;
  flex-direction: row;
  width: 50px;
  height: 50px;
`;

const FavStreamerHeader = styled.header`
  border-bottom: 5px solid ${(props) => props.theme.accent};
  padding: 0;
  display: flex;
  flex-direction: row;
  padding: 0px;
  justify-content: space-between;
  & > * {
    height: 100%;
  }
  & > :nth-child(2) {
    padding-left: 15px;
    flex: 1 1 auto;
    display: flex;
    height: 100%;
    flex-direction: row;
    justify-content: space-between;
    height: auto;
  }
  & h2 {
    color: ${(props) => props.theme.accent};
    display: inline-block;
    padding-bottom: 7px;
    font-size: 24px;
    font-family: "Roboto", sans-serif;
    font-weight: bold;
    padding-right: 10px;
  }
  & img {
    border-radius: 50%;
    width: 70px;
    height: 70px;
  }
  & streamer-name-block {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    width: 100%;
  }
  & button {
    & img {
      border-radius: 0;
    }
  }
`;

const FavoriteStreamer = ({ streamerInfo }) => {
  const { favList, dispatchFavs } = useContext(MainPageContext);
  const { deleteStreamer } = useFavoritesAPI();
  const onClickDelete = async () => {
    deleteStreamer(streamerInfo.id);
    const filteredFavList = favList.filter((fav) => {
      return fav.id !== streamerInfo.id;
    });
    const action = overwriteFavoritesAction(filteredFavList);
    dispatchFavs(action);
  };
  let navigate = useNavigate();
  const editStreamer = () => {
    navigate(`/form`);
  };
  return (
    <StreamerArticle>
      <FavStreamerHeader>
        <img
          src={streamerInfo.profile_image_url}
          alt={`${streamerInfo.display_name}`}
        ></img>
        <div className="streamer-name-block">
          <div>
            <h2>{streamerInfo.display_name}</h2>
          </div>
          <EditButton>
            <ButtonImage
              imageAlt="Edit button"
              image="img/pencil-solid.svg"
              actionOnClick={editStreamer}
            />
          </EditButton>
        </div>
        <ButtonImage
          imageAlt="Shish-Kebab Button"
          image="img/shish-kebab.png"
          actionOnClick={onClickDelete}
        />
      </FavStreamerHeader>
      <ClipCarousel streamerId={streamerInfo.id} />
    </StreamerArticle>
  );
};

FavoriteStreamer.propTypes = {
  streamerInfo: propTypes.shape({
    display_name: propTypes.string.isRequired,
    profile_image_url: propTypes.string.isRequired,
  }),
};
export default FavoriteStreamer;
