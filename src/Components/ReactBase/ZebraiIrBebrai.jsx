function ZebraiIrBebrai({skaicius}) {
    let spalva;
    if (skaicius === '1') {
        spalva = 'blue';
    }
    if (skaicius === '2') {
        spalva = 'red';
    }
    return (
        <h1 style={{color: spalva,
            
        }}>Zebrai ir Bebrai</h1>
    )
}
export default ZebraiIrBebrai;