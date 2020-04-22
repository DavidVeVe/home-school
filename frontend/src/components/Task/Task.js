import React from "react";

import AssigmentCard from "./AssigmentCard/AssigmentCard";

const Task = () => {
  const tareas = [
    {
      id: 1,
      tarea: "Matematicas",
    },
    {
      id: 2,
      tarea: "Historia",
    },
    {
      id: 3,
      tarea: "Espanol",
    },
  ];

  const tareita = tareas.map((t) => {
    return <AssigmentCard key={t.id} tarea={t.tarea} />;
  });

  return (
    <>
      <div>
        <div>{tareita}</div>
      </div>
    </>
  );
};

export default Task;
