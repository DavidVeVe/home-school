import React from "react";
import { withRouter } from "react-router-dom";

const Leason = (props) => {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{props.profesor}</h5>
        <p className="card-text">
          This is a longer card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer.
        </p>
        <p className="card-text">
          <small className="text-muted">Last updated 3 mins ago </small>
        </p>
      </div>
      {/*       <Link to={`${props.match.url}/${props.group}`}>
        <button>Ver grupo</button>
      </Link> */}
    </div>
  );
};

export default withRouter(Leason);
