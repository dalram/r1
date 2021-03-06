// https://docs.google.com/document/d/1FBKm4ikxxP7bhtwnxgT1GQpm9mfXVA_nMpOjoeAcpWk/edit
import { useState } from 'react';
import './App.scss';

function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function App() {
    // 1
    const[form, setForm] = useState('Circle');
    const remCircle = () => setForm(f => f === 'Circle' ? 'Square' : 'Circle');
    // 2
    const[form2, setForm2] = useState('Circle');
    const remCircle2 = () => setForm2(f => f === 'Circle' ? 'Square' : 'Circle');
    const[randNum, setRandNum] = useState(rand(5, 25));
    const changeNumber = () => setRandNum(num => rand(5, 25));
    // 3
    const[startNum, setStartNum] = useState(0);
    const plus = () => setStartNum(n => n + 1);
    const minus = () => setStartNum(n => n - 3);
    // 4
    const[square, setSquare] = useState([]);
    const addSquare = () => {
        setSquare(s => [...s, 1])};
    // 5
    const[colorSquares, setColorSquares] = useState([]);
    const addColorSquares = (color) => {
        setColorSquares(s => [...s, color]  
    )};
    const resetSquares = () => setColorSquares(s => s = []);
  return (
    <div className="App">
      <header className="App-header">
        <h1>REACT CLASS STATE</h1>
        <div className= {form} style={{backgroundColor: 'red'}}></div>
        <button onClick={remCircle}>Change</button>
        <p>=======================</p>
        <div className= {form2} style={{backgroundColor: 'red'}}>{randNum}</div>
        <button onClick={remCircle2}>Change</button>
        <button onClick={changeNumber}>Random Number</button>
        <p>=======================</p>
        <h2 style={{color: "yellow"}}>{startNum}</h2>
        <button onClick={plus}>Plus</button>
        <button onClick={minus}>Minus</button>
        <p>=======================</p>
        <div className='kvc'>
            {
            square.map((c, i) => <div className='Square' key={i} style={{backgroundColor: 'red'}}></div>)
            }
        </div>
        <button onClick={addSquare}>Add</button>
        <p>=======================</p>
        <div className='kvc'>
            {
            colorSquares.map((c, i) => <div className='Square' key={i} style={{backgroundColor: c}}></div>)
            }
        </div>
        <button onClick={() =>addColorSquares('red')}>Add Red</button>
        <button onClick={() =>addColorSquares('blue')}>Add Blue</button>
        <button onClick={resetSquares}>Reset</button>

      </header>
    </div>
  );
}

export default App;

// 1. Sukurti aplikacij??, kuri turi mygtuk?? change ir atvaizduoja apskritim??. Paspaudus mygtuk?? change apskritimas turi pavirsti ?? kvadrat??, o paspaudus dar kart?? v??l pavirsti apskritimu.

// 2. Sukurti aplikacij??, kuri turi mygtukus change ir random bei atvaizduoja apskritim?? su random skai??iumi viduje. Paspaudus change mygtuk?? apskritimas kei??iasi ?? sta??iakamp?? kaip pirmame u??davinyje, o paspaudus random mygtuk??, skai??ius pasikei??ia ?? rand 5 - 25
// 3. Sukurti aplikacij??, kuri turi mygtukus plus ir minus, bei atvaizduoja skai??i?? 0. Paspaudus plus mygtuk??, skai??ius padid??ja 1, o paspaudus minus- suma????ja 3
// 4. Sukurti aplikacij??, kuri turi mygtuk?? add, kur?? paspaudus vien?? kart?? atsiranda m??lynas kvadratas, paspaudus du - du kvadratai ir t.t.

// 5. Sukurti aplikacij??, kuri turi mygtukus add red, add blue ir reset. Paspaudus add red, prisideda raudonas kvadratas, paspaudus add blue - m??lynas ir t.t. Spaudin??jant prisideda vis daugiau kvadrat??. Paspaudus reset viskas i??sitrina.
