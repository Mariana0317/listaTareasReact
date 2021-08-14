import React from "react";
import ItemLista from "./ItemLista";

const Lista = (props) => {
  return (
    <div>
      <ul className="list-group">
        {props.tareasProps.map((tarea, posicion) => (
          <ItemLista
            key={posicion}
            tareaRecibida={tarea}
            borrarTarea={props.borrarTarea}
          />
        ))}
      </ul>
    </div>
  );
};

export default Lista;
