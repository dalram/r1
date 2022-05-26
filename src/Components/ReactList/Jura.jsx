import Valtis from './Valtis';
import Sala from './Sala';
import Laivas from './Laivas';

function Jura ({seaPlaners}) {
    return (
        <>
            <p>Valtis</p>
            {
                seaPlaners.map(p => p.type === 'man' ? <Valtis key={p.id} seaPlaner={p}></Valtis> : null)
            }
            <p>Laivas</p>
            {
                seaPlaners.map(p => p.type === 'car' ? <Laivas key={p.id} seaPlaner={p}></Laivas> : null)
            }
            <p>Sala</p>
            {
                seaPlaners.map(p => p.type === 'animal' ? <Sala key={p.id} seaPlaner={p}></Sala> : null)
            }
            <p>Zuvytes</p>
            {
                seaPlaners.map(p => p.type === 'fish' ? <div key={p.id}>Type: {p.type}, <span style={{color: p.color}}> Name: {p.name}</span></div> : null)
            }
        </>
    )
}

export default Jura;

/* 3. Sukurti keturis komponentus. Jura, Valtis, Laivas, Sala. Jura tėvinis komponentas, kiti trys vaikiniai. Atvaizduoti masyvą seaPlaners pagal taisyklę: “man” - Valtis, “car” - Laivas, “animal” - Sala, “fish” - tiesiai Jura komponente (be jokio vaikinio komponento). */