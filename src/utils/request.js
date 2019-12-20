// export function postRequest(url, data) {
//   return new Promise((resolve) => {
//     fetch(url, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//         /*'Authorization':`Bearer ${global.token}`*/
//       },
//       body: JSON.stringify(data),
//     })
//     .then(response => {
//       response.json().then((json) => {
//         resolve({
//           json,
//           response
//         })
//       });
//     })
//   });
// }

export async function postRequest(url, data) {
  console.log(url)
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      /*'Authorization':`Bearer ${global.token}`*/

    },
    body: JSON.stringify(data),
  });
  console.log('Fetched')
  const json = await response.json();
  if (response.ok) {
    return json;
  }
  else {
    let { message } = json
    throw new Error(message);
  }
}

export async function getRequest(url, id) {
  const response = await fetch(URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      /*'Authorization':`Bearer ${global.token}`*/
    },
  });
  const json = await response.json();
  if (response.ok) {
    return json;
  }
  throw new Error(json);
}