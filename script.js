const myHeaders = new Headers();
myHeaders.append("x-api-key", "sk_0507bDb61A0Af2729CE5eaAa026f4937F909aD8ba673Db1a");

const requestOptions = {
   method: "GET",
   headers: myHeaders,
   redirect: "follow"
};

fetch("https://gold.g.apised.com/v1/supported-metals?search=", requestOptions)
   .then((response) => response.text())
   .then((result) => console.log(result))
   .catch((error) => console.error(error));
