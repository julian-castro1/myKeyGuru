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

export function addKeyFetch({SKU = "0", loc = 'van'}){
    const url = "https://v5jvlcpg3m.execute-api.us-east-1.amazonaws.com/default/addKey_ext";
    const data = {SKU, loc};
    return fetch(url, {
      method: "POST",
      mode: "cors",
      body: JSON.stringify(data),
    }).then((response) => {
        if (!response.ok) {
          throw new Error(`Not enough to add to Van! Add to Base first`);
        }
        return response.json()
    });
}

export function getAlerts() {
  const url = "https://4n8a6ryxu2.execute-api.us-east-1.amazonaws.com/default/getAlerts";
  return fetch(url, {
    method: "POST",
    mode: "cors",
    body: "",
  }).then((response) => {
    if (!response.ok) {
      throw new Error(`ERROR: Alerts not found!`);
    }
    return response.json();
  });
}
