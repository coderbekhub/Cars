import "../styles/Nav.css"

export default function Navbar(){

  return(
    <div className="container">
      <nav className="nav_bar">
        <ul className="nav__list">
          <li><a href="#" className="nav__link">Home</a></li>
          <li><a href="#" className="nav__link">About company</a></li>
          <li><a href="#" className="nav__link">Auto</a></li>
          <li><a href="#" className="nav__link">Reviews about us</a></li>
          <li><a href="#" className="nav__link">Contacts</a></li>
        </ul>  

        <div className="hero_content">
          <h2 className="hero_title">Продажа легковых автомобилей</h2>
          <h3 className="hero__sec-title">ВЫБИРАЙ ЛУЧШЕЕ!</h3>
          <p className="hero_text">Каждому покупателю нового автомобиля за наличный расчет, мы дарим полис КАСКО на новый автомобиль.</p>
        </div>    
      </nav>
    </div>
  )
}