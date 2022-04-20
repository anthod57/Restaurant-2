import { useEffect, useState } from 'react'
import { Helmet } from "react-helmet";
import { Hero } from "./Components/Hero";
import { Navbar } from "./Components/Navbar";
import { Menu } from "./Components/Menu";

import { MENU_ITEMS } from './Data/Navigation'
import { DISHES } from "./Data/Menu";
import { Footer } from "./Components/Footer";
import { Chef } from "./Components/Chef";
import { CHEF_DATA } from "./Data/Chef";
import { OpeningHours } from "./Components/OpeningHours"
import { OPENING_HOURS } from './Data/Schedule'
import { Book } from './Components/Book';


function App() {

  const [showBookingWindow, setShowBookingWindow] = useState(false);



  return (
    <div className="App">
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href={"https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;700&display=swap"} rel="stylesheet" />
      </Helmet>
      <Navbar menu={MENU_ITEMS} book={setShowBookingWindow}></Navbar>
      <Book show={showBookingWindow} setShow={setShowBookingWindow}></Book>
      <Hero bg={"/images/bg.jpg"} title={"Nom du restaurant"} subTitle={"Vivez une expérience inoubliable."} buttonText={"Réserver"} booking={setShowBookingWindow}></Hero>
      <Menu dishes={DISHES} title={"Menu"} subTitle={"Nos plats les plus populaires"}></Menu>
      <Chef bg={"/images/chef.jpg"} data={CHEF_DATA}></Chef>
      <OpeningHours schedule={OPENING_HOURS}></OpeningHours>
      <Footer 
        menu={MENU_ITEMS}
        book={setShowBookingWindow}
        title={"RESTAURANT"}
        phone={"+33123456789"} 
        address={"5 Av. Anatole France, 75007 Paris"}
        facebook={"https://facebook.com/"}
        twitter={"https://twitter.com/"}
        instagram={"https://snapchat.com/"}
      ></Footer>
    </div>
  );
}

export default App;
