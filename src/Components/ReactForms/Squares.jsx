import { useEffect, useRef, useState } from "react";

function Squares() {
    const [widthRange, setWidthRange] = useState();
    const [heightRange, setHeightRange] = useState();
    const [color, setColor] = useState('');
    // objekta padaryti visiems style`ams su vienu state`u ir per inputus tik ta viena objekta keisti, veliau ta objekta ipushint i newKV masyva??? (mintis)
    const [kv, setKv] = useState(null);
    // const create = useRef(true);
    const styleObj = {width: widthRange,
        height: heightRange,
        backgroundColor: color};
    console.log(styleObj);
    console.log(kv);
    const newKv = () => {
        // if (create.current === true) {
            // create.current = false;
            // const styleObj = {width: widthRange,
            //     height: heightRange,
            //     backgroundColor: color};
            // setKv(kv => kv === null ? [styleObj]: [...kv, styleObj]);
         
        // return;
        setWidthRange(100);
        setHeightRange(100);
        setColor('#000000');

    }
    const saveKv = () => {
        const styleObj = {width: widthRange,
                 height: heightRange,
                 backgroundColor: color};
        setKv(kv => kv === null ? [styleObj]: [...kv, styleObj]);
        setWidthRange();
        setHeightRange();
        setColor('');
        // kaip issaugoti kvadrato styliu ir padaryti, kad jo nebeliestu ir naujas sukurtas keistu savo forma ir spalva?
    }
    return (
        <>
            <div className="kvc">

                {
                    kv === null ? null : kv.map((kv, i) => <div key={i} className='square' style={{backgroundColor: kv.backgroundColor, width: `${kv.width}px`, height: `${kv.height}px`}}></div>)
                }
                {
                    widthRange && heightRange && color && <div className='square' style={{backgroundColor: color, width: `${widthRange}px`, height: `${heightRange}px`}}></div>
                }

            </div>

            <div className="kvc">
                <input type="range" value={widthRange} min={10} max={200} onChange={e => setWidthRange(e.target.value)}/>
                <input type="range" value={heightRange} min={10} max={200} onChange={e => setHeightRange(e.target.value)}/>
                <input type="color" value={color} onChange={e => setColor(e.target.value)}/>
            </div>
            <button onClick={newKv}>Create</button>
            <button onClick={saveKv}>Save</button>

        </>
    )
}

export default Squares;


// 5. Sukurti komponentą su dviem range tipo įvedimais https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/range vienu color įvedimu https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/color ir mygtukais sukurti ir išsaugoti. Paspaudus mygtuką sukurti, atsiranda naujas kvadratas 100px aukščio ir pločio bei juodu fonu. Keičiant range ir color įvedimus keičiasi ir kvadrato išvaizda. Kvadrato išvaizdą nustato įvedimai: range tipo įvedimai nuo 10 iki 200 ir nustato plotą ir aukštį pikseliais, color- fono spalvą. Paspaudus mygtuką išsaugoti, kvadrato išvaizda išsaugoma ir į nustatymus nebereguoja. Vėl paspaudus mygtuką sukurti- atsiranda naujas reguliuojamas kvadratas.
