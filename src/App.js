import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import Booking from './components/BookingPage';

function App() {
  return (
    <>
      <Header/>
      <Main/>
      <Footer/>
    </>
  );
}

export default App;
