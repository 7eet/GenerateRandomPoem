import React from "react";

const Card = ({ data }) => {
  return (
    <div className="card mx-3 mx-md-5 my-3" key={data.key}>
      <div className="card">
        <div className="card-body">
          <div className="flexForMd py-3">
            <h5 className="card-title">Title: {data.title}</h5>
            <h6 className="card-subtitle text-muted">Author: {data.author}</h6>
          </div>
          <div className="text-center py-3">
            {data.lines.map((e) => (
              <p className="card-text">{e}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
