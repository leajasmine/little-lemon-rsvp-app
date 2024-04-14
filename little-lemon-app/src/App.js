import './App.css';
import './Header.js';
import './Nav.js';
import './Main.js';
import './Footer.js';

function App() {
  <>
  <Nav>
    <img src="logo.svg" alt="logo" />
    <ul>
      <li><a href="/">Homepage</a></li>
      <li><a href="/about">About</a></li>
      <li><a href="/menu">Menu</a></li>
      <li><a href="/reservations">Reservations</a></li>
      <li><a href="/order">Order Online</a></li>
      <li><a href="/login">Login</a></li>
    </ul>
  </Nav>
  <Header>
  </Header>
  <Main>
      <p>Welcome to the homepage!</p>
  </Main>
  <Footer>
    <ul>
      <li><a href="/">Homepage</a></li>
      <li><a href="/about">About</a></li>
      <li><a href="/menu">Menu</a></li>
      <li><a href="/reservations">Reservations</a></li>
      <li><a href="/order">Order Online</a></li>
      <li><a href="/login">Login</a></li>
    </ul>

    <p>Contact</p>
    <p>Address</p>
    <p>Phone</p>
    <p>Email</p>

    <p>Social Media Links</p>
    <ul>
      <li><a href="https://www.facebook.com">Facebook</a></li>
      <li><a href="https://www.twitter.com">Twitter</a></li>
      <li><a href="https://www.instagram.com">Instagram</a></li>
    </ul>
  </Footer></>

}

export default App;
