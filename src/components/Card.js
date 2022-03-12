import React from "react";

const Card = ({ data, reload, loading }) => {
  if (loading) {
    return (
      <div className="card mx-3 mx-md-5 my-3">
        <div className="card-body">
          <div className="text-center py-3">
            <h5 className="card-title">Fetching New Poem ...</h5>
          </div>
        </div>
      </div>
    )
  }
  return (
    <div className="card mx-3 mx-md-5 my-3" key={data.url}>
      <div className="card">
        <div className="relaod-btn-section">
          <button className="reload-btn" onClick={reload}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              fill="currentColor"
              className="bi bi-arrow-clockwise"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z"
              />
              <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z" />
            </svg>
          </button>
        </div>
        <div className="card-body">
          <div className="flexForMd py-3">
            <h5 className="card-title">Title: {data.title}</h5>
            <h6 className="card-subtitle text-muted">Author: {data.author}</h6>
          </div>
          <div className="text-center card-content py-3">
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
