import { useNumContext } from "../contexts/useNumContext";
import { SecondChildComponent } from "../second-child-component";

export function FirstChildComponent() {
    const { num, setNum } = useNumContext();

    return (
        <div style={{ padding: "20px", background: "green" }}>
            <h1>First Child!!</h1>
            <button type="button" onClick={() => { setNum(num + 1) }}>click</button>
            <SecondChildComponent />
        </div>
    );
}