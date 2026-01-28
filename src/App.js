import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Filters from './Components/Filters/Filters'
import News from './Components/News/News'
import Footer from './Components/Footer/Footer'

import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import PropTypes from 'prop-types';

export default function App() {
  let pageSize = 9
  return (
    <>
      <Router>
        <Navbar />
        <Filters />
        <Routes>
          <Route exact path="/" element={<News pageSize={pageSize} key="general" category="general" />} />
          <Route exact path="/general" element={<News pageSize={pageSize} key="general" category="general" />} />
          <Route exact path="/business" element={<News pageSize={pageSize} key="business" category="business" />} />
          <Route exact path="/entertainment" element={<News pageSize={pageSize} key="entertainment" category="entertainment" />} />
          <Route exact path="/health" element={<News pageSize={pageSize} key="health" category="health" />} />
          <Route exact path="/science" element={<News pageSize={pageSize} key="science" category="science" />} />
          <Route exact path="/sports" element={<News pageSize={pageSize} key="sports" category="sports" />} />
          <Route exact path="/tech" element={<News pageSize={pageSize} key="tech" category="tech" />} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
};

News.defaultProps = {
  category: "general",
  pageSize: 9
};


News.propTypes = {
  category: PropTypes.string,
  pageSize: PropTypes.number
};
