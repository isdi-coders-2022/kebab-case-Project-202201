import propTypes from "prop-types";
import { useEffect, useState } from "react";
import useTwitchAPI from "../../hooks/useTwitchAPI";

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
    <div>
      {clipList.length > 0 && (
        <ul>
          {clipList.map((clip) => {
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
        </ul>
      )}
    </div>
  );
};

ClipCarousel.propTypes = {
  streamerId: propTypes.number.isRequired,
};
export default ClipCarousel;
