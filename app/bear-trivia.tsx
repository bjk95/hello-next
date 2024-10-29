import { FormEvent, useState } from "react";
import { useBearStore } from "./bear-store";

function BearTrivia() {
    const [updatedBearTrivia, setUpdatedBearTrivia] = useState("")
    const existingBearTrivia = useBearStore((state) => state.trivia)
    const updateBearTrivia = useBearStore((state) => state.updateTriviaFact)

    function submitNewBearTrivia(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        updateBearTrivia(updatedBearTrivia)
    }

    return (
        <div>
            <h1>{existingBearTrivia.fact}</h1>
            <form onSubmit={(e) => submitNewBearTrivia(e)}>
                <label htmlFor="bearType">Update bear trivia:</label>
                <input
                    type="text"
                    id="bearType"
                    value={updatedBearTrivia}
                    onChange={(e) =>
                        setUpdatedBearTrivia(e.target.value)}
                />
            </form>
        </div>
    );
}

export default BearTrivia;