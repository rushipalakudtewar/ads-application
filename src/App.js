import { Routes,Route } from "react-router-dom";
import Dashboard from "./components/dashboard/Dashboard";
import Header from "./components/header/Header";
import CreateAds from "./components/createads/CreateAds";
import MediaAdsFill from "./components/mediaadsfill/MediaAdsFill";
import TextAdsFill from "./components/textadsfill/TextAdsFill";

function App() {
  return (
    <>
    <Header/>
    <Routes>
      <Route path="/" element={<Dashboard/>} />
      <Route path="/create-ads" element={<CreateAds/>} />
      <Route path="/media-ads-fill-data" element={<MediaAdsFill/>} />
      <Route path="/text-ads-fill-data" element={<TextAdsFill/>} />
      
    </Routes>
    </>
  );
}

export default App;
