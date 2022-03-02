import './App.css';
import AddressForm from "./components/AddressForm";
import StoreListing from "./components/StoreListing";
import TopBar from "./components/TopBar";

function App() {
  return (
    <div className="App">
      <TopBar />
      <AddressForm />
      <StoreListing />
    </div>
  );
}

export default App;
