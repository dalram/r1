import { useState } from 'react';
import './App.scss';

function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const dogs = ['šuo', 'šunius', 'Bobikas', 'kudlius', 'Šarikas', 'avigalvis'];

function App() {
    return (
        <div className="App">
          <header className="App-header">
            <h1>REACT BASE LIST</h1>
            {/* 1 */}
            <div>
                {
                dogs.map((suo, i) => <div key={i} className= 'Square' style={{backgroundColor: 'green'}}>{suo}</div>)
                }
            </div>
            <p>==============================</p>
            {/* 2 */}
            <div>
                {
                    dogs.sort((a, b) => b.length - a.length).map((suo, i) => <div key={i} className= 'Circle' style={{backgroundColor: 'green'}}>{i +1}. {suo}</div>)
                }
            </div>
            {/* 3 */}
            <p>==============================</p>
            <div>
                {
                    dogs.map((suo, i) => {
                        if (i % 2 === 0) {
                           return <div key={i} className= 'Square' style={{backgroundColor: 'green'}}>{i}.{suo}</div>;
                        } else {
                           return <div key={i} className= 'Circle' style={{backgroundColor: 'green'}}>{i}.{suo}</div>;
                        }
                    })
                }
            </div>
            {/* 4 */}
            <p>==============================</p>
            <div>

                {
                    dogs.map((suo, i) => {
                        if (suo[0] !== suo[0].toLowerCase) {
                            return <div key={i} className= 'Square' style={{backgroundColor: 'green'}}>{i}.{suo}</div>;
                        } else {
                            return null;
                        }

                    })
                }

            </div>
     </header>
        </div>
      );
    }
    
    export default App;

    // 1. Atvaizduoti masyvą dogs. Kiekvienas šuo atskirame kvadrate.
    // 2. Atvaizduoti masyvą dogs. Kiekvienas šuo atskirame apskritime. Šunys turi būti išrūšiuoti nuo ilgiausio žodžio iki trumpiausio, o apskritimai sunumeruoti nuo 1 iki galo.
    // 3. Atvaizduoti masyvą dogs. Poriniuose indeksuose esančius šunis atvaizduoti kvadratuose, neporinius apskritime.
    // 4. Atvaizduoti masyvą dogs. Šunis, kurie prasideda didžiąja raide praleisti (neatvaizduoti).