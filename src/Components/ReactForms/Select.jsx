import { useState } from "react";

function Select() {
    const [selectOne, setSelectOne] = useState('red');
    const [selectTwo, setSelectTwo] = useState('16px');
    const [selectThree, setSelectThree] = useState('Times New Roman');
    const [input, setInput] = useState('');

    return (
        <>
            <div className="kvc">
            <select value={selectOne} className='margins' onChange={e => setSelectOne(e.target.value)}>
                <option value="red">Red</option>
                <option value="blue">Blue</option>
                <option value="yellow">Yellow</option>
                <option value="grey">Grey</option>
                <option value="green">Green</option>
            </select>
            <select value={selectTwo} className='margins' onChange={e => setSelectTwo(e.target.value)}>
                <option value="12px">12px</option>
                <option value="16px">16px</option>
                <option value="20px">20px</option>
                <option value="24px">24px</option>
                <option value="32px">32px</option>
            </select>
            <select value={selectThree} className='margins' onChange={e => setSelectThree(e.target.value)}>
                <option value="Courier New">Courier New</option>
                <option value="Times New Roman">Times New Roman</option>
                <option value="Franklin Gothic Medium">Franklin Gothic Medium</option>
                <option value="Trebuchet MS">Trebuchet MS</option>
                <option value="Segoe UI">Segoe UI</option>
            </select>
            
            </div>
            <p>Iveskite teksta</p>
            <input type="text" value={input} onChange={e => setInput(e.target.value)} className="inputs" style={{color: selectOne, fontSize: selectTwo, fontFamily: selectThree}}/>
        </>
    )
}

export default Select;


/* 4. Sukurti komponentą su trim select pasirinkimais ir teksto įvedimo laukeliu. Įvedamas tekstas turi būti atvaizduojamas atskirai komponento apačioje. Select pasirinkimai sudaryti iš 5 skirtingų spalvų, 5 skirtingų fontų dydžių ir 5 skirtingų fontų (Arial, Times new Roman ar panašiai) Select pasirinkimų nustatymai turi keisti atvaizduojamo teksto išvaizdą. */