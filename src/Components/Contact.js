import React from 'react'
import "../styles/Footer.css"

export default function Contact() {
  return (
    <section className='contact'>
      <div className="container">
        <div className='footer_info'>
          

          <form action='https://echo.htmlacademy.ru'>
            <label>Please enter your details</label>
            <input type="text" name='User Name:' required placeholder='Your Name'/> <br />
            <input type="Email" name='Email:' required placeholder='Your Email'/> <br />
            <textarea name="Message:" id="textarea" cols="30" rows="10" placeholder='Message'></textarea> <br />
            <input className='submit_btn' type="Submit" value='Submit'/>
          </form>
        </div>
      </div>
    </section>
  )
}
