import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './Header';
import Slider from './Slider';
import Footer from './Footer';
import workData from './workData';

const root = ReactDOM.createRoot(document.getElementById('root'));
const works = workData.map(function (work) {
  return (
    <Footer
      {...work}
    />
  )
})
root.render(
  <React.StrictMode>
    <Header />
    <Slider />
    <h1>Recent Work</h1>
    <div className="footer">

      <div className="images">
        {works}
      </div>
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

