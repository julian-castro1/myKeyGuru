// this file contains all backend interactions (through API Gateway) with AWS

// MMY = Make, Model, Year - ex: {make: "Honda", model: "Civic", year: "2012"}
export function getKeyInfo({SKU = "0", MMY = "0"}){
    const url = "https://6veurhdl65.execute-api.us-east-1.amazonaws.com/default/getKeyInfo";
    const data = {SKU, MMY};
    return fetch(url, {
      method: "POST",
      mode: "cors",
      body: JSON.stringify(data),
    }).then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json()
    });
}

