import { useBearStore } from "./bear-store";
import { FormEvent, useState } from "react";

function BearCounter() {
    const [newBear, setNewBear] = useState("");
    const count = useBearStore((state) => state.bears);
    const increment = useBearStore((state) => state.increasePopulation);
    const decrement = useBearStore((state) => state.decreasePopulation);
    const addBearType = useBearStore((state) => state.addBearType);

    function submitNewBear(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        addBearType(newBear);
        setNewBear("");
    }
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={() => increment()}>+</button>
            <button onClick={() => decrement()}>-</button>
            <form onSubmit={(e) => submitNewBear(e)}>
                <label htmlFor="bearType">Type of bear:</label>
                <input
                    type="text"
                    id="bearType"
                    value={newBear}
                    onChange={(e) =>
                        setNewBear(e.target.value)}
                />
            </form>
        </div>
    );
}

export default BearCounter;