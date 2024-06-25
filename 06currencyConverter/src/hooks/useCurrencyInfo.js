const API_KEY = "9796b88c1c27333d2607f162";
const BASE_URL = `https://v6.exchangerate-api.com/v6/${API_KEY}/latest`;

import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
    const [data, setData] = useState({});

    useEffect(() => {
        fetch(`${BASE_URL}/${currency}`)
            .then((res) => res.json()) // converting to json
            .then((res) => setData(res.conversion_rates))
            .catch((error) => console.error('Error fetching data:', error));
    }, [currency]);

    return data;
}

export default useCurrencyInfo;
