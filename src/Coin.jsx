import { useState } from "react";

import coin1 from "./assets/coin/coin1.png";
import coin2 from "./assets/coin/coin2.png";

const CoinImg = [coin1, coin2];

function Coin() {
    const [coinValue, setCoinValue] = useState(1);

    function coinfliper() {
        const randomNumber = Math.floor(Math.random() * 2) + 1;
        setCoinValue(randomNumber);
    }

    return (
        <article class="box">
            <h1>Monētas mešana</h1>
            <button onClick={coinfliper}>Mest</button>
            
            <img
                src={CoinImg[coinValue - 1]}
                alt={"suda moneta" + coinValue}
            />
        </article>
    );
}

export default Coin;
