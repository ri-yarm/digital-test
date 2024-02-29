import React, { useEffect, useState } from "react";
import "./App.css";
import { axiosProject } from "lib/http";
import Graph from "components/Graph";

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
      {!data ? <p>loading</p> : <Graph data={data} />}
    </div>
  );
};
export default React.memo(App);
