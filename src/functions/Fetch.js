export default async function fetchData(url, method, body) {

  let responseData = [];

  await fetch(url, {
    method: method,
    ...(body ? body : undefined),
  })
    .then(response => response.json())
    .then(data => responseData = data);

  return responseData;
};