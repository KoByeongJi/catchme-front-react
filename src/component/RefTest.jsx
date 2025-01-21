import { useEffect, useRef, useState } from "react";

export function RefCounter() {
    let ref = useRef(0);
    const [count, setCount] = useState(0);
    let number = 0;

    function handleClick() {
        ref.current = ref.current + 1;
        setCount(count + 1);
        number = number + 1;

        console.log("The ref number is " + ref.current);
        console.log("The state number is " + count);
        console.log("The number is " + number);
    }

    return (
        <>
            <button onClick={handleClick}>Click Me!</button>
            <div>
                <p>ref: {ref.current}</p>
                <p>state: {count}</p>
                <p>number: {number}</p>
            </div>
        </>
    );
}

export function FirstCheck() {
    const initRef = useRef(0);

    useEffect(() => {
        initRef.current += 1;
    }, []);

    console.log("initRef: " + initRef)

    return (
        <>
            <div>
                <span>{initRef.current > 0 ? <>Mounted</> : <>Mounting</>}</span>
            </div>
        </>
    );
}

export function MoveRect() {
    const divRef = useRef(null);

    useEffect(() => {
        // const boxDiv = document.getElementById('box');

        document.addEventListener('mousemove', (e) => {
            // if (boxDiv) {
            //     boxDiv.style.left = e.clientX + 'px';
            //     boxDiv.style.top = e.clientY + 'px';
            // }

            if (divRef.current) {
                divRef.current.style.left = e.clientX + 'px'
                divRef.current.style.top = e.clientY + 'px'
            }
        });
    }, []);

    return (
        <>
            <div>
                <div id="box" ref={divRef} style={{ width: '400px', height: '400px', position: 'absolute', top: '100px', left: '100px', background: 'red' }}>
                </div>
            </div>
        </>
    );
}