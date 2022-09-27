import React from "react";
import style from "./Projects.module.css";
import { Wrapper, Title, Starts, } from "../index";

export const Projects = () => {
  
  return (
    <section className={style.projects} aria-label="My Projects" id="project">
      <Wrapper>
        <div className={style.content}>
          <div className={style.information}>
            <Starts />
            <Title text="Mis" highlight="Proyectos" />
            <p className={style.description}>
              Trabaje en 7 meses en una empresa Inmobiliaria llamada Yampi como desarrollador y maquetardor de sus paginas web Dashboar y Clientes
            </p>
          </div>
        </div>
      </Wrapper>
    </section>
  );
};
