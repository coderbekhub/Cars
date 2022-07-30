import "../styles/Home.css"
import Hero from "./Hero"

export default function Home() {
  return ( 
    <>
    <section className="home_section">
      <div className="home__bgcolor">
      <div className="container">
        <div className="home__info">
            {/* <h1 className="site_logo home_media_20px">Logo Brand</h1> */}
        </div>
      </div>
    <Hero/>
      </div>
    </section>
  </>
  )
}