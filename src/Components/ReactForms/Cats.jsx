import { useEffect, useRef, useState } from "react";

function Cats () {
    const [catName, setCatName] = useState('');
    const [catWeight, setCatWeight] = useState('');
    const [cats, setCats] = useState(null);
    const [catsWeight, setCatsWeight] = useState(0);
    const confirmCat = (catName, catWeight) => {
        const catArray = {name: catName, weight: catWeight};
        setCats(cats => cats === null ? [catArray]: [...cats, catArray]);
        
    }
    useEffect(() => {
        setCats(JSON.parse(localStorage.getItem('Cats')));
    }, [])
    useEffect(() => {
        localStorage.setItem('Cats', JSON.stringify(cats));
        // for (let i = 0; i < (cats === null ? 0 : cats.length); i++) {
        //     setCatsWeight(catsWeight => parseInt(catsWeight) + parseInt(cats[i].weight))
        // }
    }, [cats]);
    
    
    
    return (
        <>      
                <div className="kvc">

                    {
                        cats === null ? null : cats.sort((a, b) => b.weight - a.weight).map((cat, i) => <div key={i} className= 'cats'>Name: {cat.name}; Weight: {cat.weight}</div>)
                        // cats === null ? null : cats.reduce((total, catWeight) => <div>{total + catWeight}</div>, 0)
                    }
                    

                </div>
                <div>
                    {/* Bendras katinuku svoris: {catsWeight} */}
                    {
                        cats === null ? null : cats.reduce((total, catWeight) => <div>{total + parseInt(catWeight.weight)}</div>, 0)
                    }
                </div>
                <p>Cats name</p>
                <input type="text" value={catName} onChange={e => setCatName(e.target.value)}/>
                <p>Cats weight</p>
                <input type="number" min={0} value={catWeight} onChange={e => setCatWeight(e.target.value)}/>
                <button onClick={() => {confirmCat(catName, catWeight)}}>Confirm cat</button>
        </>
    )
}

export default Cats;

//  2. Sukurti komponentą su dviem įvedimo laukeliais, katinuko vardui ir svoriui įvesti. Rodyti visų įvestų katinukų sąrašą. Puslapiui persikrovus, katinukų sąrašas turi išlikti nepakitęs. Katinukus sąraše rūšiuoti nuo storiausio iki ploniausio. Skaičiuoti ir atvaizduoti bendrą katinukų svorį.