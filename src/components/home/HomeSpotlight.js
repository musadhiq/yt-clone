import React from "react";
import { useGetAllVideosQuery } from "../../features/FetchVideosApi";
function HomeSpotlight() {
  const { data, loading, error } = useGetAllVideosQuery();
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  console.log(data?.items);
  return (
    <div className="home-main">
      <div className="home-main-content">
        <div className="videos">
          {data?.items?.map((item) => (
            <div className="video" key={item.id.videoId}>
              <div className="head">
                <div className="cover-img">
                  <img src={item.snippet.thumbnails.default.url} alt="cover" />
                </div>
              </div>
              <div className="bottom">
                <div className="icon">
                  <img src={item.snippet.thumbnails.medium.url} alt="logo" />
                </div>
                <div className="details">
                  <div className="title-area">
                    <h1 className="title">{item.snippet.description}</h1>
                    <h4 className="channel-name">yt-clone</h4>
                    <small className="views-date">
                      3.1M views ~ 9 days ago
                    </small>
                  </div>
                  <div className="more-options"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HomeSpotlight;
