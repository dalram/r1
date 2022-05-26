

function Bala({seaPlaners}) {
return (
    <>
    {/* 1. */}
    
    {
        seaPlaners.map((p, i) => <div key={i}>{p.id} {p.type} <span style={{color: p.color}}>{p.name}</span></div>)
    }


    </>
)
}

export default Bala;


// 1. Sukurti Komponentą Bala ir jame atvaizduoti masyvą seaPlaners.