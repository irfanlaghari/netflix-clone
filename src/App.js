import "./App.css";
import Run from "./components/Run";
import Banner from "./components/Banner";
import request from "./request";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Run title="Netflix Original" fetchUrl={request.fetchNetflix} isLarge />
      <Run title="Trendings" fetchUrl={request.fetchTrending} />
      <Run title="Top Rated" fetchUrl={request.fetchTopRated} />
      <Run title="Action" fetchUrl={request.fetchAction} />
      <Run title="Comedy" fetchUrl={request.fetchComedy} />
      <Run title="Horror" fetchUrl={request.fetchHorror} />
      <Run title="Romance" fetchUrl={request.fetchRomance} />
      <Run title="Documentries" fetchUrl={request.fetchDocumentries} />
    </div>
  );
}

export default App;
