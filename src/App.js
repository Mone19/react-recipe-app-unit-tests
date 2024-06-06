import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Flowbite } from 'flowbite-react';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import RecipeList from './components/RecipeList';
import RecipeDetail from './components/RecipeDetail';
import 'flowbite';

function App() {
  return (
    <Flowbite>
      <div className="flex flex-col min-h-screen">
        <Router>
          <Header />
          <Main className="flex-grow">
            <Routes>
              <Route exact path="/" element={<RecipeList />} />
              <Route path="/recipe/:id" element={<RecipeDetail />} />
            </Routes>
          </Main>
          <Footer />
        </Router>
      </div>
    </Flowbite>
  );
}

export default App;
