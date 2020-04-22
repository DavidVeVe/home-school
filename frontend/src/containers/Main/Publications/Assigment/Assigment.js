import React from "react";

const Assigment = (props) => {
  return (
    <div className="post">
      <h2>
        Asignatura {props.num}: {props.trabajo}
      </h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque molestias
        distinctio quia ipsum similique autem ut, voluptatum molestiae magni
        facere voluptates quos. Animi est nam molestiae, reiciendis velit rerum
        suscipit voluptatem error, iusto illum numquam iure excepturi ipsa eius
        temporibus?
      </p>
      <h2>Fecha limite de entrega: {Math.floor(Math.random() * 10)}</h2>
    </div>
  );
};

export default Assigment;
