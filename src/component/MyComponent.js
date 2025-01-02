import { useState, useEffect, useRef } from "react";

export function MyComponent() {
    const [name, setName] = useState();
    const [flag, setFlag] = useState(false);
    const inputRef = useRef(null);

    useEffect(() => {
        setName("");
        inputRef.current.value = null;
    }, [flag]);

    useEffect(() => {
        setName("Hello World");

        return () => {
            alert("안녕히 가세요");
        };
    }, []);

    return (
        <div>
            <h1>{name}</h1>
            <input type="text" onChange={(e) => { setName(e.target.value) }} ref={inputRef}></input>
            <button type="button" onClick={() => { setFlag(!flag) }}>Reset</button>
        </div>
    );
}
