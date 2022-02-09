import propTypes from "prop-types";
import { useEffect, useMemo, useState } from "react";
import useTwitchAPI from "../../hooks/useTwitchAPI";

const ClipCarousel = ({ streamerId }) => {
  const { fetchClipList } = useTwitchAPI();
  const [clipList, setClipList] = useState([]);
  useEffect(async () => {
    const fetchedList = await fetchClipList(streamerId);
    setClipList(fetchedList);
  }, []);

  return (
    <div>
      {clipList.length > 0 && (
        <ul>
          {clipList.map((clip) => {
            return (
              <li key={clip.id}>
                <iframe
                  src={clip.url}
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
export default ClipCarousel;
