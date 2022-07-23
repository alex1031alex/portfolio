import {Main} from "./Components/Main/Main";
import {Works} from "./Components/Works/Works";
import {Routes, Route} from "react-router-dom";
import {EmptyPage} from "./Components/EmptyPage/EmptyPage";
import {About} from "./Components/About/About";
import {Contacts} from "./Components/Contacts/Contacts";

function App() {
  return (
    <Routes>
      <Route path="/" element={<EmptyPage><Main/></EmptyPage>}/>
      <Route path="/works/" element={<EmptyPage><Works /></EmptyPage>}/>
      <Route path="/about/" element={<EmptyPage><About/></EmptyPage>} />
      <Route path="/contacts" element={<EmptyPage><Contacts/></EmptyPage>} />
    </Routes>
  );
}

export default App;
