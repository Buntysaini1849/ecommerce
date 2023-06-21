import './App.css';
import Home from './Components/Home';
import Header from './Components/Header';
import Banner from './Components/Banner';
import ItemSlide from './Components/ItemSlide';
import TopSavers from './Components/TopSavers';
import Offer from './Components/Offer';
import BestOffers from './Components/BestOffers';
import Footer from './Components/Footer';
import CartSidebar from './Components/CartSidebar';

function App() {
  return (
    <div className='App'>
      
      <Header />
      <Banner />
      <ItemSlide />
      <TopSavers />
      <Offer />
      <BestOffers />
      <Footer />
      <CartSidebar />
      
    </div>
  );
}

export default App;
