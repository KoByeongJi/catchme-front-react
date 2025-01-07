import { useContext } from "react";
import { ToastContext } from "./ToastProvider";

function AddToastButton() {
    const { addToast } = useContext(ToastContext);

    return (
        <button onClick={() => addToast("추가된 토스트 입니다.")}>
            토스트 추가
        </button>
    );
}

export default AddToastButton;
