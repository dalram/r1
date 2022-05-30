import { useEffect, useRef, useState } from 'react';
import './App.scss';
import randColor from './Components/Functions/randColor';
import rand from './Components/Functions/randNum';
// useRef tasks!!!




function App() {
    const kvIstorija = useRef([]);
    const [kv, setKv] = useState(null);
    
    const addKv = () => {
        const addKvArray = [];
        const randNumber = rand(5, 10);
        for (let i = 0; i < randNumber; i++) {
            addKvArray.push(1);
        }
        
        setKv(kv => kv === null ? [...addKvArray] : [...kv, ...addKvArray]);
        
    }
    useEffect(() => {
        setKv(JSON.parse(localStorage.getItem('kvadratukai')));
        localStorage.removeItem('istorija');
    
    }, []);
    useEffect(() => {
        if (null === kv) {
            return;
        } // kodel sitas effect pasileidzia perkrovus puslapi kai yra uzsaugotu kvadrateliu???
        localStorage.setItem('kvadratukai', JSON.stringify(kv));
        kvIstorija.current.unshift(kv); // ipushina sugeneruota kv i useRef([]) masyvo pradzia
        }, [kv]);
        

    const remKv = () => {
        return setKv([])};



    const backKv = () =>  {
    let senas = kvIstorija.current.shift();
    if (!senas) {
        setKv(kv);
    } else if (senas.length === kv.length) {
        senas = kvIstorija.current.shift();
        if (!senas) {
            setKv([]);
        } else {
            setKv(senas);
        }
    }
    else {
        setKv(senas);
    }
    
}
    // Puslapiui persikrovus istorija yra užmirštama. Saugoma tik istorija iki puslapiui persikraunant. Į istoriją turi būti pridedami veiksmai tiek iš “Pridėti” tiek iš “Išvalyti” mygtukų paspaudimo.???????
    return (
        <div className="App">
            <header className="App-header">
                <h1>useRef tasks!</h1>
                <p>1 task ====================</p>
                {/*1. Sukurti aplikaciją su mygtuku “Pridėti”, kurį paspaudus atsiranda rand 5-10 kvadratukai. Paspaudus dar kartą dar prisideda rand kvadratukų skaičius. Puslapį perkrovus kvadratukų skaičius pasilieka nepakitęs. Padaryti mygtuką “Išvalyti”, kurį paspaudus visi kvadratukai dingsta. Padaryti mygtuką “Atgal”, kurį paspaudus kvadratukų skaičius pasidaro lygus skaičiui, buvusiam prieš paspaudus mygtuką “Pridėti”, o paspaudus dar kartą grįžtama dar vienu žingsniu atgal (t.y. reikia sukurti “undo” funkcionalumą). Puslapiui persikrovus istorija yra užmirštama. Saugoma tik istorija iki puslapiui persikraunant. Į istoriją turi būti pridedami veiksmai tiek iš “Pridėti” tiek iš “Išvalyti” mygtukų paspaudimo. */}
                
                <div className='kvc'>
                {
                    kv === null ? null : kv.map((kv, i) => <div className='square' key={i} style={{backgroundColor: 'red'}}></div>)
                }
                </div>
                <button onClick={addKv}>Add Squares</button>
                <button onClick={remKv}>Rem Squares</button>
                <button onClick={backKv}>One Step Back</button>
                
 </header>
        </div>
      )
    }
    
    export default App;