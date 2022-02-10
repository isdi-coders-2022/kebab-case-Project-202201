import propTypes from "prop-types";
import { useEffect, useState } from "react";
import styled from "styled-components";
import useTwitchAPI from "../../hooks/useTwitchAPI";

const HorizontalList = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  overflow-x: scroll;
`;

const ClipCarousel = ({ streamerId }) => {
  const { fetchClipList } = useTwitchAPI();
  const [clipList, setClipList] = useState([]);

  useEffect(() => {
    async function fetchClips() {
      const fetchedList = await fetchClipList(streamerId);
      setClipList(fetchedList);
    }
    fetchClips();
  }, [fetchClipList, streamerId]);

  return (
    <HorizontalList>
      {clipList.length > 0 &&
        clipList.map((clip) => {
          return (
            <li key={clip.id}>
              <iframe
                src={`${clip.embed_url}&parent=localhost`}
                width={"250"}
                allowFullScreen={true}
                autoPlay={false}
                title={clip.title}
              ></iframe>
            </li>
          );
        })}
    </HorizontalList>
  );
};

ClipCarousel.propTypes = {
  streamerId: propTypes.number.isRequired,
};
export default ClipCarousel;
