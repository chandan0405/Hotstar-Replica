import "./App.css";
import Header from "./components/Header";
import Slider from "./components/Slider";
import ProductionHouse from "./components/ProductionHouse";
import GenereMovieList from "./components/GenereMovieList";
import { Suspense } from "react";

function App() {
  return (
    <>
      <Header />
      <Suspense fallback={<p>Loading, Please wait...</p>}>
        <Slider />
      </Suspense>
      <ProductionHouse />
      <GenereMovieList />
    </>
  );
}

export default App;
