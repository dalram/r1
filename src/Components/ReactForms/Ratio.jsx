import { useState } from "react";

function Ratio() {
    const [num, setNum] = useState(100);
    
    return (
        <>
            <input type='number' value={num} onChange={e => setNum(e.target.value)} className = 'margins'></input>
            <input type='number' value={num / 2} onChange={e => setNum(e.target.value) * 2} className = 'margins'></input>
        </>
    )
}
export default Ratio;


/* 3.Sukurti komponentą su dviem įvedimo laukeliais. Pradžioje viename laukelyje rodyti skaičių 100 kitame 50. Santykis tarp pirmo ir antro laukelio yra 2. Pakeitus skaičius viename kažkuriame laukelyje turi pasikeisti ir skaičius kitame laukelyje taip, kad santykis išliktų nepakitęs. */