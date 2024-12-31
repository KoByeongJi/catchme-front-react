import { useState } from "react";

export function TestComponent() {
    const [count, setCount] = useState(0);
    console.log("test component가 재호출 되었습니다.");

    const handleClick = () => {
        setCount(count + 1);
    };

    return (
        <div>
            <div>{count}</div>
            <button type="button" onClick={handleClick}>
                INCREMENT
            </button>
        </div>
    );
}
