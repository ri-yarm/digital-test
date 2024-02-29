import React, { useEffect, useState } from "react";
import "./App.css";
import { axiosProject } from "lib/http";

const App = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const response = await axiosProject.get("");
        setData(response.data);
      } catch (error) {
        console.error("Ошибка получения моковых данных", error);
      }
    })();
  }, []);

  return (
    <div style={{ color: "red" }}>
      {data ? <pre>{JSON.stringify(data, null)}</pre> : "Loading..."}
    </div>
  );
};
export default React.memo(App);
