import React from "react";

function AssigmentCard(props) {
  return (
    <div class="card text-white w-25 bg-primary mb-3">
      <div class="card-header">Header</div>
      <div class="card-body">
        <h5 class="card-title">{props.tarea}</h5>
        <p class="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
      </div>
    </div>
  );
}

export default AssigmentCard;
