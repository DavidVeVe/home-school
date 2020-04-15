import React from "react";
import { Link } from "react-router-dom";
function CardChild(props) {
  return (
    <div className="col-lg-3 col-md-6 mb-4">
      <div className="card h-100">
        <img
          className="card-img-top"
          src="https://images.unsplash.com/photo-1518607692857-bff9babd9d40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80"
          alt=""
        />
        <div className="card-body">
          <h4 className="card-title">{props.name}</h4>
          <p className="card-text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente
            esse necessitatibus neque.
          </p>
        </div>
        <div className="card-footer">
          <Link to={`/${props.name}`} className="btn btn-primary">
            Progreso
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CardChild;
