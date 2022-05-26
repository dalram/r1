// https://docs.google.com/document/d/1omOws0Y6jkbuaXKI7-lGvcG6R7FanuZPbmch3wCYr4A/edit
import './App.css';
import H1 from './Components/ReactBase/H1';
import Tekstai from './Components/ReactBase/Tekstai';
import TekstaiIrSpalvos from './Components/ReactBase/TekstaiIrSpalvos';
import ZebraiIrBebrai from './Components/ReactBase/ZebraiIrBebrai';
import Zuikis from './Components/ReactBase/Zuikis';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Zuikis></Zuikis>
        <H1 text='Namu darbeliai'/>
        <ZebraiIrBebrai skaicius='1'></ZebraiIrBebrai>
        <Tekstai firstText='Funkcija returnina tik' secondText= 'viena elementa'></Tekstai>
        <TekstaiIrSpalvos firstText='Tikiuosi taip atlikau' secondText='Pratimus' textColor= 'yellow'></TekstaiIrSpalvos>
      </header>
    </div>
  );
}

export default App;
