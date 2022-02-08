import Header from "./components/Header/Header";
import Streamer from "./components/Streamer/Streamer";

const streamerInfo = {
  id: "124422593",
  display_name: "LEC",
  type: "online",
  broadcaster_type: "partner",
  description:
    "Official Twitch Channel of the League of Legends European Championship. For more information, schedules and stats head to Lolesports.com",
  profile_image_url:
    "https://static-cdn.jtvnw.net/jtv_user_pictures/41b23352-5c99-4eb2-974b-1e9b8120425e-profile_image-300x300.png",
};

function App() {
  return (
    <div>
      <Header />
      <Streamer props={streamerInfo} />
      <Streamer props={streamerInfo} />
    </div>
  );
}

export default App;
