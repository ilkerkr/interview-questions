import Header from "./components/header/Header";
import Main from "./components/main/Main";
import data from "./helper/data"


function App() {
  const { id } = data;
  return (
    <div className="App">
     <Header/>
     <Main data={data} key={id} />
    </div>
  );
}

export default App;
