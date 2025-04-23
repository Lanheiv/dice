import { use, useState } from "react";

function Flower() {
    const [flowerValue, setFlowerValue] = useState(5);
    const [love, setLove] = useState("mīl");

    function flowernumber () {
        const randomNumber = Math.floor(Math.random() * 6) + 5;
        setFlowerValue(randomNumber);
    }
    function flowerleaf () {
        if (flowerValue <= 0) {
            alert("Tevi: " + love);
            flowernumber();
        } else {
            setFlowerValue(flowerValue - 1);
            setLove((prev) => (prev === "mīl" ? "nemīl" : "mīl"));
        }
    }
    

    return (
        <article class="box">
            <h1>Mīl nemīl</h1>
            <button onClick={ flowernumber }>Ģenerēt puķi</button>
            <p>Skaitlis: { flowerValue }</p>

            <button onClick={ flowerleaf }>Noplēst</button>

        </article>
    );
}

export default Flower;
