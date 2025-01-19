import { useNumContext } from "./contexts/useNumContext";
import { FirstChildComponent } from "./first-child-component/first-child-component";

export function ParenentComponent() {
    const num = useNumContext();

    return (
        <div style={{ padding: "20px", background: "red" }}>
            <h1>parent!! {num.num}</h1>
            <FirstChildComponent />
        </div>
    );
}