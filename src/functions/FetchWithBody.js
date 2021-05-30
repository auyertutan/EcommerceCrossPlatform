export default async function fetchDataWithBody(url, method, body) {

  let responseData = [];

  await fetch(url, {
    method: method,
    headers: {
      'Content-Type': 'application/json'
    },
    body,
  })
    .then(response => response.json())
    .then(data => responseData = data);

  return responseData;
};