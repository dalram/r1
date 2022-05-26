

function Spalva({seaPlaner}) {
    seaPlaner.sort((a, b) => a.color.localeCompare(b.color));
    return (
        <>
        <p>Spalva</p>
        {
            seaPlaner.map((p, i) => <div key={i} style={{color: p.color}}>{p.color}</div>)
        }
        </>
    )
}

export default Spalva;