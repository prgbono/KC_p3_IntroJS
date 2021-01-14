import axios from 'axios'

// Get countries from API -> https://restcountries.eu/
export async function getCountriesFromAPI() {
  const url = "https://restcountries.eu/rest/v2/all?fields=name";
  const response = await axios.get(url);
  return response.data;
}

export function setGroups(teams, totalGroups, teamsPerGroup){
  const groups = [];
  let i = 0;
  do {
    groups.push(
      teams.slice(parseInt(i * teamsPerGroup), parseInt((i+1) * teamsPerGroup))
    );
    i++;
  } while (i < totalGroups)
  return groups;
}

export const groupsName = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];

export const worldCupTeamsMock = [ 
  'Sudáfrica', 'México', 'Uruguay', 'Francia', 'Argentina', 'Corea del Sur', 
  'Nigeria', 'Grecia', 'Inglaterra', 'Estados Unidos', 'Argelia', 'Eslovenia', 
  'Alemania', 'Australia', 'Ghana', 'Serbia', 'Holanda', 'Japón', 'Camerún', 
  'Dinamarca', 'Italia', 'Nueva Zelanda', 'Paraguay', 'Eslovaquia', 'Brasil', 
  'Corea del Norte', 'Costa de Marfil', 'Portugal', 'España', 
  'Honduras', 'Chile', 'Suiza'
]

export const playOffTeamsMock = [ 
  'Sudáfrica', 'México', 'Uruguay', 'Francia', 'Argentina', 
  'Inglaterra', 'Alemania', 'Holanda', 'Japón',
  'Dinamarca', 'Italia', 'Paraguay', 'Brasil', 
  'Portugal', 'España', 'Chile'
]