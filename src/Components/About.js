import React from "react";
import "../styles/About.css"
import cardImage from "../img/card_image.jpg"
import cardImage2 from "../img/card_image2.jpg"
import cardImage3 from "../img/card_image3.jpg"

export default function About(){

  return(
    <div className="container">
      <div className="about-info" id="about">
        <div className="about-info__cars">
          <h1 className="about-tittle">Выберите то, что нужно</h1>
          <p className="about-info__cars-info">Наш каталог</p>
          <div className="about-info__cards">
            <div className="about-info__cards-card">
              <img className="card-image" src={cardImage} alt="" />
              <p className="card-title">Хетчбэк</p>
              <p className="card-info">Седан — закрытый кузов легкового автомобиля с багажником, структурно отделённым от пассажирского салона</p>
            </div>

            <div className="about-info__cards-card">
              <img className="card-image" src={cardImage2} alt="" />
              <p className="card-title">Седан</p>
              <p className="card-info">Хетчбэк, хэтчбэк или хэтчбек (англ. hatchback от hatch — люк и back — сзади) — название кузова легкового автомобиля с одним или двумя рядами сидений</p>
            </div>

            <div className="about-info__cards-card mb">
              <img className="card-image" src={cardImage3} alt="" />
              <p className="card-title">Внедорожник</p>
              <p className="card-info">Внедорожник (англ. off-road vehicle) — рамный автомобиль, обладающий повышенной проходимостью по бездорожью за счёт высокого клиренса, широких шин</p>
            </div>

          </div>

          <a href="#" className="cars-btn">
            задать вопрос 
          </a>
        </div>

        <div className="about-info__info">
          <h1 className="about-tittle">О компании</h1>
          <p className="about-info__txt">Легковой автомобиль — автомобиль, предназначенный для перевозки пассажиров и багажа, вместимостью от 2 до 8 человек. При большем количестве мест для пассажиров автомобиль считается автобусом (микроавтобусом). Первый автомобиль был создан в 1876 г.</p>
          <p className="about-info__txt">"Пассажирские легковые". Предназначены для перевозки пассажиров и/или небольшого количества груза по дорогам с усовершенствованным покрытием. Повышенной проходимостью не обладают (даже при наличии полного привода!), съезд с дороги или преодоление небольшого брода может осуществляться исключительно "на страх и риск" водителя.</p>
          <a href="#" className="abuot-info__link">Читать дальше</a>
        </div>
      </div>

    </div>
  )
}