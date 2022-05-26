// https://docs.google.com/document/d/1MCnAbNbTXgUdoj4esqXurC0NCpvYtgzGCV_NNuhV42I/edit
import { useState } from 'react';
import './App.scss';
import Bala from './Components/ReactList/Bala.jsx'
import Jura from './Components/ReactList/Jura';
import Tvenkinys from './Components/ReactList/Tvenkinys';
import Vandenynas from './Components/ReactList/Vandenynas';

const seaPlaners = [
    {id: 1, type: 'man', name: 'Lina', color: 'blue'},
    {id: 2, type: 'car', name: 'Opel', color: 'red'},
    {id: 3, type: 'animal', name: 'Vilkas', color: 'green'},
    {id: 4, type: 'fish', name: 'Ungurys', color: 'yellow'},
    {id: 5, type: 'man', name: 'Tomas', color: 'green'},
    {id: 6, type: 'animal', name: 'Bebras', color: 'red'},
    {id: 7, type: 'animal', name: 'Barsukas', color: 'green'},
    {id: 8, type: 'car', name: 'MB', color: 'blue'},
    {id: 9, type: 'car', name: 'ZIL', color: 'red'},
    {id: 10, type: 'man', name: 'Teta Toma', color: 'yellow'},
  ];

function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h1>REACT LIST</h1>
                {/* // 1. Sukurti Komponentą Bala ir jame atvaizduoti masyvą seaPlaners. */}
                <h2>Bala</h2>
                <Bala seaPlaners={seaPlaners}></Bala>
                {/*2. Sukurti du komponentus Tvenkinys, Daiktas -  tėvinį ir vaikinį atitinkamai. Tvenkinys komponente du kartus panaudokite komponentą Daiktas atvaizduoti masyvą seaPlaners - vieną kartą poriniams kitą kartą neporiniams įrašams (pagal id, ne masyvo indeksą).*/}
                <h2>Tvenkinys</h2>
                <Tvenkinys seaPlaners={seaPlaners}></Tvenkinys>
                {/* 3. Sukurti keturis komponentus. Jura, Valtis, Laivas, Sala. Jura tėvinis komponentas, kiti trys vaikiniai. Atvaizduoti masyvą seaPlaners pagal taisyklę: “man” - Valtis, “car” - Laivas, “animal” - Sala, “fish” - tiesiai Jura komponente (be jokio vaikinio komponento). */}
                <h2>Jura</h2>
                <Jura seaPlaners={seaPlaners}></Jura>
                {/* 4. Sukurti keturis komponentus Vandenynas, Tipas, Vardas, Spalva. Vandenynas tėvinis komponentas kiti trys vaikiniai. Vaikiniuose komponentuose atvaizduoti tą patį masyvą, tik išrūšiuotą pagal komponento vardą (pvz Tipas išrūšiuota pagal tipą ir t.t.). */}
                <h2>Vandenynas</h2>
                <Vandenynas seaPlaners={seaPlaners}></Vandenynas>

            </header>
        </div>
      )
    }
    
    export default App;

    // 1. Sukurti Komponentą Bala ir jame atvaizduoti masyvą seaPlaners.