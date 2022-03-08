import React from "react";
import Card from "./Card";

const Home = ({dataPassing}) => {
    return (
       <div className="home">
            { dataPassing.map(e => {
                return <Card key={e.linecount} data={e} />
            })}
       </div>
    )
}

export default Home;