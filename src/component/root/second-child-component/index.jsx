import { useNumContext } from "../contexts/useNumContext";

export function SecondChildComponent() {
    const num = useNumContext();

    return (
        <div style={{ padding: "20px", background: "blue" }}>
            <h1>Second Child!! {num.num}</h1>
        </div>
    );
}