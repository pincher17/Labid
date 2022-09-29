import React from 'react';
import './App.css';
import Footer from './components/footer/Footer';
import Forms from './components/forms/Forms';
import Header from './components/header/Header';
import Layout from './components/Layout/Layout';

function App() {
  return (
    <>
      <Header />
        <Layout>
          <Forms />
        </Layout>
      <Footer />
    </>

  );
}

export default App;
