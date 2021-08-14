import React from "react";

const ItemLista = (props) => {
  return (
    <li className="list-group-item item d-flex justify-content-between">
      {props.tareaRecibida}{" "}
      <button
        type="button"
        class="btn btn-outline-danger "
        onClick={() => props.borrarTarea(props.tareaRecibida)}
      >
        X
      </button>
    </li>
  );
};

export default ItemLista;
