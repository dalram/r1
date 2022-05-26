

function Tipas({seaPlaner}) {
    // seaPlanersMasyvas.sort((a, b) => {
    //     if (a.type > b.type) {
    //         return 1;
    //     }
    //     if (a.type < b.type) {
    //         return -1;
    //     }
    //     return 0;
    // }); // Galima taip issortinti "stringus" abc tvarka
    const naujasSea = seaPlaner.sort((a, b) => a.type.localeCompare(b.type)); // Arba jeigu trumpiau, tai panaudojam localeCompare issortinti stringus abeceles tvarka

    

    return naujasSea.map((p, i) => <div key={i}>{p.id}, {p.type} <span style={{color: p.color}}>{p.name}</span></div>)
}

export default Tipas;