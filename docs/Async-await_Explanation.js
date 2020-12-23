// Estas dos implementaciones tienen el mismo cometido. La inferior es lo que hace ASYNC-AWAIT.

export async function getTeamsFromGitHub() {
  const url = "https://www.esta-es-una-url-API-de-json-files/clubs.json";
  const response = await axios.get(url);
  return response.data.clubs;
}

export function getTeamsWithPromise() {
  const url = "https://www.esta-es-una-url-API-de-json-files/clubs.json";
  return new Promise (function (resolve, reject){
    axios.get(url)
    .then( function (response){
      resolve(response.data.clubs)
    }, function (error){
      reject(error);
    })
  })
}