import React from "react";
import Card from "./Card";

const Home = ({ dataPassing, reload }) => {

  if (dataPassing.isLoading) {
    return <div className="home">
      <Card loading={true} />
    </div>
  } else {
    return (
      <div className="home">
        {dataPassing.data.map((e) => {
        return (
          <Card key={e.linecount + Math.random()} data={e} reload={reload} />
        );
      })}
      </div>
    )
  }
};

export default Home;
