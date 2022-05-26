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

// 1. Sukurti aplikaciją, kuri turi mygtuką change ir atvaizduoja apskritimą. Paspaudus mygtuką change apskritimas turi pavirsti į kvadratą, o paspaudus dar kartą vėl pavirsti apskritimu.

// 2. Sukurti aplikaciją, kuri turi mygtukus change ir random bei atvaizduoja apskritimą su random skaičiumi viduje. Paspaudus change mygtuką apskritimas keičiasi į stačiakampį kaip pirmame uždavinyje, o paspaudus random mygtuką, skaičius pasikeičia į rand 5 - 25
// 3. Sukurti aplikaciją, kuri turi mygtukus plus ir minus, bei atvaizduoja skaičių 0. Paspaudus plus mygtuką, skaičius padidėja 1, o paspaudus minus- sumažėja 3
// 4. Sukurti aplikaciją, kuri turi mygtuką add, kurį paspaudus vieną kartą atsiranda mėlynas kvadratas, paspaudus du - du kvadratai ir t.t.

// 5. Sukurti aplikaciją, kuri turi mygtukus add red, add blue ir reset. Paspaudus add red, prisideda raudonas kvadratas, paspaudus add blue - mėlynas ir t.t. Spaudinėjant prisideda vis daugiau kvadratų. Paspaudus reset viskas išsitrina.
