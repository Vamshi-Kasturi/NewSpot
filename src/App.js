import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import Filters from './Components/Filters/Filters';
import Ticker from './Components/Ticker/Ticker';
import News from './Components/News/News';
import Footer from './Components/Footer/Footer';
import BackToTop from './Components/BackToTop/BackToTop';
import { NewsProvider } from './context/NewsContext';

import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

export default function App() {
  const pageSize = 9;

  return (
    <NewsProvider>
      <Router>
        <Navbar />
        <Filters />
        <Ticker />
        <Routes>
          <Route path="/" element={<News pageSize={pageSize} key="general" category="general" />} />
          <Route path="/general" element={<News pageSize={pageSize} key="general" category="general" />} />
          <Route path="/business" element={<News pageSize={pageSize} key="business" category="business" />} />
          <Route path="/tech" element={<News pageSize={pageSize} key="tech" category="tech" />} />
          <Route path="/sports" element={<News pageSize={pageSize} key="sports" category="sports" />} />
          <Route path="/entertainment" element={<News pageSize={pageSize} key="entertainment" category="entertainment" />} />
          <Route path="/health" element={<News pageSize={pageSize} key="health" category="health" />} />
          <Route path="/science" element={<News pageSize={pageSize} key="science" category="science" />} />
          <Route path="/search" element={<News pageSize={pageSize} key="search" />} />
          <Route path="/saved" element={<News pageSize={pageSize} key="saved" isSaved={true} />} />
          <Route path="*" element={<News pageSize={pageSize} key="notfound" category="general" />} />
        </Routes>
        <Footer />
        <BackToTop />
      </Router>
    </NewsProvider>
  );
}
