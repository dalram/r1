import { useEffect, useRef, useState } from 'react';
import './App.scss';
import randColor from './Components/Functions/randColor';
import rand from './Components/Functions/randNum';
import Cats from './Components/ReactForms/Cats';
import InputNumber from './Components/ReactForms/InputNumber';
import Ratio from './Components/ReactForms/Ratio';


function App() {
    return (
    <div className="App">
        <header className="App-header">
            <h1>Form tasks!</h1>
            <p>1 task ====================</p>
            {/* 1. Sukurti komponentą su mygtuku ir įvedimo laukeliu. Įvedus į laukelį skaičių ir paspaudus mygtuką, atsiranda laukelyje nurodytas raudonų kvadratėlių skaičius. Įvedus kitą skaičių ir paspaudus mygtuką, prie jau egzistuojančių kvadratėlių papildomai prisideda naujas laukelyje nurodytas kvadratėlių kiekis. Kiekvieno kvadratėlio viduryje turi būti pavaizduotas rand skaičius 100 - 200.
 */}
            <InputNumber></InputNumber>
            <p>2 task ====================</p>
            {/* 2. Sukurti komponentą su dviem įvedimo laukeliais, katinuko vardui ir svoriui įvesti. Rodyti visų įvestų katinukų sąrašą. Puslapiui persikrovus, katinukų sąrašas turi išlikti nepakitęs. Katinukus sąraše rūšiuoti nuo storiausio iki ploniausio. Skaičiuoti ir atvaizduoti bendrą katinukų svorį. */}

            <Cats></Cats>

            <p>3 task ====================</p>
            {/* 3.Sukurti komponentą su dviem įvedimo laukeliais. Pradžioje viename laukelyje rodyti skaičių 100 kitame 50. Santykis tarp pirmo ir antro laukelio yra 2. Pakeitus skaičius viename kažkuriame laukelyje turi pasikeisti ir skaičius kitame laukelyje taip, kad santykis išliktų nepakitęs. */}
            <Ratio></Ratio>
        </header>
    </div>
         )
       }
       
       export default App;