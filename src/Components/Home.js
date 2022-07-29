import "../styles/Home.css"
import Hero from "./Hero"

export default function Home() {
  return ( 
    <>
    <section className="home_section">
      <div className="home__bgcolor">
      <div className="container">
        <div className="home__info">
            <h1 className="site_logo home_media_20px">НАЗВАНИЕ</h1>

            {/* <ul className="nav__list">
              <li><a href="#" className="nav__link">Home</a></li>
              <li><a href="#" className="nav__link">About company</a></li>
              <li><a href="#" className="nav__link">Auto</a></li>
              <li><a href="#" className="nav__link">Reviews about us</a></li>
              <li><a href="#" className="nav__link">Contacts</a></li>
            </ul>   */}

            <input type="checkbox" id="check"/>
            <label htmlFor="check">
              <i class='bx bx-menu' id="btn"></i>
              <i class='bx bx-x' id="cancel"></i>
            </label>
        </div>
      </div>
    <Hero/>
      </div>
    </section>
  </>
  )
}