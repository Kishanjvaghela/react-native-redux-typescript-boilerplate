import Config from "react-native-config";

const baseCall = (url: string, method: string, body?: object, headers?: object) => {
  let token = '';
  console.log(`${Config.API_URL}${url}`);

  return fetch(`${Config.API_URL}${url}`, {
    method: method,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  }).then(response => response.json())
}

export const post = (url: string, body?: object, headers?: object) => {
  return baseCall(url, 'POST', body, headers);
}

export const get = (url: string, body?: object, headers?: object) => {
  return baseCall(url, 'GET', body, headers);
}