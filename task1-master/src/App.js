import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './Components/Home/Home';
import Rating from './Components/Rating/Rating';
import Tags from "./Components/Tags/Tags";
import Posts from "./Components/Posts/Posts"
import Grud from "./Components/Grud/Grud";
import GrudNew from "./Components/Grud/GrudNew";
import GrudUpdate from "./Components/Grud/GrudUpdate";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/first-task" element={<Rating count = "6"
                                                           selectStars="3"/>} />
          <Route exact path="/second-task" element={<Tags tags={[
            {title: "1", type:"h1"},
            {title: "2", type:"h2"},
            {title: "3", type:"h3"},
          ]}/>}/>
          <Route exact path="/third-task" element={<Posts options={{limit: 10, count: 47}}/>}/>
          <Route exact path="/grud" element={<Grud/>}/>
          <Route exact path="/grud/new/:type" element={<GrudNew/>}/>
          <Route exact path="/grud/:type/:id" element={<GrudUpdate/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
