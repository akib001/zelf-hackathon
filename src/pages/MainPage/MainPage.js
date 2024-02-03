import { useEffect, useState } from "react";
import MainLayout from "../../components/layout/MainLayout";
import PhotoGrid from "./PhotoGrid";
import { Table } from "./Table";

const MainPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(
          "https://6021-202-84-41-238.ngrok-free.app/api/v1/core/contents/list", {
            headers: {
              "Content-Type": "application/json"
            }
          }
        );
        const data = await response.json();
        setData(data);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <MainLayout>
      {!isLoading && data?.results?.length > 0 ? (
        <div className="container">
          <Table
            tableData={data?.results?.filter(
              (item) => item?.content?.content_form === "VIDEO"
            )}
          />
          <PhotoGrid
            data={data?.results?.filter(
              (item) => item?.content?.content_form === "IMAGE"
            )}
            totalContents={data?.count}
          />
        </div>
      ) : !isLoading && data?.results?.length === 0 ? (
        <div>No Data Found</div>
      ) : (
        <div>Loading...</div>
      )}
    </MainLayout>
  );
};

export default MainPage;
