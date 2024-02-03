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
              <div>
                <img
                  style={{ width: "100%", objectFit: "cover", height: '300px' }}
                  src={item?.content?.thumbnail_url}
                  alt={item?.content?.title}
                />
              </div>
              <div>img footer</div>
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
