import { SearchProvider } from "./context/searchContext";
import { Home } from "./pages";

function App() {
  return (
    <>
      <SearchProvider>
        <Home />
      </SearchProvider>
    </>
  );
}

export default App;
