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
          "https://hackapi.hellozelf.com/frontend/api/v1/contents?page=1"
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
      {!isLoading && data?.data?.length > 0 ? (
        <div className="container">
          <Table
            tableData={data?.data?.filter(
              (item) => item?.content?.content_form === "VIDEO"
            )}
          />
          <PhotoGrid
            data={data?.data?.filter(
              (item) => item?.content?.content_form === "IMAGE"
            )}
            totalContents={data?.total_contents}
          />
        </div>
      ) : !isLoading && data?.length === 0 ? (
        <div>No Data Found</div>
      ) : (
        <div>Loading...</div>
      )}
    </MainLayout>
  );
};

export default MainPage;
