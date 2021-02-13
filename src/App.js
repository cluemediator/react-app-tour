import React from 'react';
import Header from './pages/Header';
import Navbar from './pages/Navbar';
import Content from './pages/Content';
import Sidebar from './pages/Sidebar';
import Footer from './pages/Footer';
import WebTour from './WebTour';

function App() {
  return (
    <div>
      <Header />
      <Navbar />
      <div className="row">
        <Content />
        <Sidebar />
      </div>
      <Footer />
      <WebTour />
    </div>
  );
}

export default App;