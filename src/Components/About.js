import React from "react";
import "../styles/About.css"

export default function About(){

  return(
    <div className="about-info">
      <div className="about-info__cars">
        <h1 className="about-tittle">Выберите то, что нужно</h1>
        <p className="about-info__cars-info">Наш каталог</p>
        <div className="about-info__cards">
          <div className="about-info__cards-card">
            <img src="" alt="" />
            <p className="card-title">Хетчбэк</p>
            <p className="card-info">Хетчбэк, хэтчбэк или хэтчбек (англ. hatchback от hatch — люк и back — сзади) — название кузова легкового автомобиля с одним или двумя рядами сидений</p>
          </div>

        </div>

      </div>
    </div>
  )
}