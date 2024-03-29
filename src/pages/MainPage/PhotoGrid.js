import { getPlaformIcon, truncateString } from "../../utils/helper";
import "./PhotoGrid.css";

const PhotoGrid = ({ data, totalContents }) => {
  console.log("photogrid data", data);

  return (
    <div>
      <div className="photo-grid-header-container">
        <p>
          All Posts <span>({totalContents})</span>
        </p>
        <button style={{ fontWeight: "normal" }} className="text-button">
          View All
        </button>
      </div>
      <div className="photo-grid">
        {data?.length > 0 ? (
          data?.map((item, index) => (
            <div key={index}>
              <div className="photo-grid-item">
                <img
                  style={{ width: "100%", objectFit: "cover", height: "300px" }}
                  src={item?.content?.thumbnail_url}
                  alt={item?.content?.title}
                  onError={(e) => {
                    e.target.src = "/blank-image.webp";
                  }}
                />
                <div className="photo-bottom-bar">
                  <div className="photo-bottom-img-name-container">
                    <div className="photo-title">
                      <img
                        className="creator-img"
                        src={item?.creator?.profile_picture_url}
                        alt={item?.creator?.name}
                        onError={(e) => {
                          e.target.src = "/profile-icon.svg";
                        }}
                      />
                      <div>{truncateString(item?.creator?.name, 15)}</div>
                    </div>
                    <div>
                      <img
                        className="photo-platform"
                        src={getPlaformIcon(item?.content?.content_platform)}
                        alt={item?.content?.content_platform}
                      />
                    </div>
                  </div>

                </div>
              </div>
              <div className="photo-footer">
                <div className="photo-title">
                  <img src="/eye.png" alt="" />
                  <div>{((item?.content?.total_engagement / item?.content?.views) * 100).toFixed(1)}</div>
                </div>
                <div className="photo-title">
                  <img src="/thumb.svg" alt="" />
                  <div>{(item?.content?.likes / 10000).toLocaleString()}K</div>
                </div>
                <div className="photo-title">
                  <img src="/chat.svg" alt="" />
                  <div>{item?.content?.comments}</div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div>No Data Found</div>
        )}
      </div>
    </div>
  );
};

export default PhotoGrid;
