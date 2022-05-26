

function Vardas({seaPlaner}) {
    
    seaPlaner.sort((a, b) => a.name.localeCompare(b.name));
    

    return (
        <>
            <p>Vardai</p>
            {
                seaPlaner.map((p, i) => <div key={i}><span style={{color: p.color}}>{p.name}</span></div>)
            }
        </>
    )
}

export default Vardas;