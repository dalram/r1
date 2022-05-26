import Daiktas from './Daiktas.jsx'

function Tvenkinys({seaPlaners}) {
    return (
        <>
            <p>Poriniai</p>
            {
                
                seaPlaners.map(p => p.id % 2 ? null : <Daiktas key={p.id} seaPlaner={p}></Daiktas> )
            }
            <p>Neporiniai</p>
            {
                seaPlaners.map(p => p.id % 2 ? <Daiktas key={p.id} seaPlaner={p}></Daiktas> : null)
            }
        </>
    )
}

export default Tvenkinys;