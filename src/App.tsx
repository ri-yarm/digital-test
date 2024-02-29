import React, { useEffect, useState } from "react";
import "./App.css";
import { axiosProject } from "lib/http";
import Graph from "components/Graph";

const App = () => {
  const [data, setData] = useState(null);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const response = await axiosProject.get("");
        setData(response.data);
      } catch (error) {
        setIsError(true);
        console.error("Ошибка получения моковых данных", error);
      }
    })();
  }, []);

  return (
    <div style={{ color: "red" }}>
      {!data ? <p>loading</p> : <Graph data={data} />}
      {isError && <p>ошибка получения моковых данных</p>}
    </div>
  );
};
export default React.memo(App);
