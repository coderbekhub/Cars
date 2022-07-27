import "../styles/Home.css"
import "../styles/Media.css"

export default function Home() {
  return <>
    <section className="nav_content">
      <div className="container">
        <div className="nav__info flex">
          <h1 className="site_logo">SITE BRAND</h1>
          <p className="company_adress">
            196247, Россия, Санкт-Петербург, Ленинский просп., 151, офис 711
          </p>
          <a href="+998935555555" className="company_call">+998935555555</a>
        </div>
      </div>
    </section>
  </>
}