import React, { Fragment, useState, useEffect } from "react";
import Lista from "./Lista";

const Formulario = () => {
  //AQUI SIEMPRE CODIGO JAVASCRIPT
  let tareasLS = JSON.parse(localStorage.getItem("tareasKey"));
  //crear state
  const [tareas, setTareas] = useState(tareasLS);
  const [tarea, setTarea] = useState("");
  //ciclo de vida de un componente
  useEffect(() => {
    //lo que escribamos aqui se va a ver en la etapa de motaje o de acutalizac
    console.log("hola cilco de vida");
    if (tareasLS) {
      console.log("cambio algo en locStorage");
      localStorage.setItem("tareasKey", JSON.stringify(tareas));
    } else {
      console.log("no exite el localstorage");
      localStorage.setItem("tareasKey", JSON.stringify([]));
    }
  }); //con los corchetes vacios le digo a react no tenga en cuenta la acutalizacon de los states, los corchetes son arreglo y dentro puedo poner los states que quiero que mire por ejemplo tarea

  //funcion que gurda una tarea
  //const guardarTarea = (e) =>{
  //  console.log(e.target.value)

  //  setTarea(e.target.value);
  //  console.log(tarea);
  //}
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("en el submit");

    let arregloTareas = tareas;
    arregloTareas.push(tarea);
    setTareas(arregloTareas);
    setTarea(""); //limpia el imput
  };
  const borrarTarea = (reciboTareaBorrar) => {
    console.log(reciboTareaBorrar);
    let arregloFiltrado = tareas.filter(
      (elemento) => elemento !== reciboTareaBorrar
    );
    setTareas(arregloFiltrado);
  };

  //SIEMPRE MAQUETADO HTML ABAJO DEL RETURN
  return (
    <Fragment>
      <div className="container d-flex justify-content-center my-5">
        <form className="w-75" onSubmit={handleSubmit}>
          <div className="mb-3  d-flex">
            <input
              type="text"
              className="form-control mx-3"
              id="exampleInput"
              aria-describedby="textlHelp"
              onChange={(e) => {
                setTarea(e.target.value);
              }}
              value={tarea} //agregamos el value como propiedad y le ponemos la variable tarea para que se limpie el state junto con el imput
            ></input>
            <button type="submit" className="btn btn-outline-light mx-3">
              Submit
            </button>
          </div>
        </form>
      </div>
      <section className="container col-5 my-5">
        <h4 className="text-center my-3">Tareas</h4>
        <Lista tareasProps={tareas} borrarTarea={borrarTarea} />
      </section>
    </Fragment>
  );
};

export default Formulario;
