import React from "react";
import logo from "./images/Logo.svg";

function Footer () {
    return (
      <footer>
        <section>
          <div className='company-info'>
            <img src={logo} alt='Little Lemon logo'></img>
            <p>We are a family-owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
          </div>
          <div>
            <h3>Important links</h3>
            <ul>
                <li><a href="/">Homepage</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/menu">Menu</a></li>
                <li><a href="/reservations">Reservations</a></li>
                <li><a href="/order">Order Online</a></li>
                <li><a href="/login">Login</a></li>
            </ul>
          </div>
          <div>
            <h3>Contact</h3>
              <ul>
                <li>Address <br/> 123 Towncity, USA</li>
                <li>Phone <br/> ++ 0123 456 7891</li>
                <li>Email <br/> info@littlelemon.com</li>
              </ul>
          </div>
          <div>
            <h3>Social Media Links</h3>
            <ul>
              <li><a href="https://www.facebook.com">Facebook</a></li>
              <li><a href="https://www.twitter.com">Twitter</a></li>
              <li><a href="https://www.instagram.com">Instagram</a></li>
            </ul>
          </div>
        </section>
      </footer>
    )
  } 

  export default Footer;