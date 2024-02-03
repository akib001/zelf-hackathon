import "./Table.css";
import { formatDate, formatNumber, truncateString } from "../../utils/helper";

export const Table = ({ tableData }) => {
  const getPlaformIcon = (platform) => {
    switch (platform) {
      case "instagram":
        return "/instagram.svg";
      case "facebook":
        return "/facebook.svg";
      case "tiktok":
        return "/tiktok.svg";
      default:
        return "/instagram.svg";
    }
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Date</th>
          <th>Video </th>
          <th>Creator </th>
          <th>Platform </th>
          <th>
            <div className="with-sort-icon">
              <p>Total views</p>
              <img src="/sort-icon.svg" alt="sort icon" />
            </div>
          </th>
          <th>
            <div className="with-sort-icon">
              <p>Total engagements</p>
              <img src="/sort-icon.svg" alt="sort icon" />
            </div>
          </th>
          <th>
            <div className="with-sort-icon">
              <p>Engagement rate</p>
              <img src="/sort-icon.svg" alt="sort icon" />
            </div>
          </th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {tableData?.length > 0 ? (
          tableData?.map((row, index) => {
            return (
              <tr key={index}>
                <td>{formatDate(row?.content?.timestamp)}</td>
                <td>
                  <div className="title-chip">
                    <img src="/play-icon.svg" alt="play icon" />
                    <p> {truncateString(row?.content?.title, 15)}</p>
                  </div>
                </td>
                <td>
                  <div className="creator-container">
                    <img
                      className="creator-img"
                      src={row?.creator?.profile_picture_url}
                      alt={row?.creator?.name}
                      onError={(e) => {
                        e.target.src = "/profile-icon.svg";
                      }}
                    />
                    <p> {truncateString(row?.creator?.username, 15)}</p>
                  </div>
                </td>
                <td>
                  <img
                    src={getPlaformIcon(row?.content?.content_platform)}
                    alt={row?.content?.content_platform}
                  />
                </td>
                <td>{formatNumber(row?.content?.views)}</td>
                <td>{formatNumber(row?.content?.total_engagement)}</td>
                <td>
                  {(
                    (row?.content?.total_engagement / row?.content?.views) *
                    100
                  ).toFixed(1)}
                  %
                </td>
                <td>
                  <button
                    style={{ fontWeight: "normal" }}
                    className="text-button"
                  >
                    View post
                  </button>
                </td>
              </tr>
            );
          })
        ) : (
          <tr>
            <td colSpan="8">No Data Found</td>
          </tr>
        )}
      </tbody>
    </table>
  );
};
