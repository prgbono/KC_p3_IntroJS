// import axios from 'axios'

// export const liverPoolTeams = ['Liverpool', 'Everton']
// export const manchesterTeams = ['Manchester City', 'Manchester United']
// export const londonTeams = ['Arsenal', 'Chelsea', 'Fulham', 'West Ham', 'Tottenham', 'Crystal Palace']
// export const premierLeagueTeams = [
//     ...liverPoolTeams,
//     ...manchesterTeams,
//     ...londonTeams
// ]

// export async function getTeamsFromGithub() {
//     const url = 'https://raw.githubusercontent.com/openfootball/football.json/master/2020-21/en.1.clubs.json'
//     const response = await axios.get(url)
//     return response.data.clubs
// }

// export function getTeamsWithPromise() {
//     const url = 'https://raw.githubusercontent.com/openfootball/football.json/master/2020-21/en.1.clubs.json'
//     return new Promise(function(resolve, reject) {
//         axios.get(url).then(function(response) {
//             resolve(response.data.clubs)
//         }, function(error) {
//             reject(error)
//         })
//     })
// }


// export const groupATeams = ['Sudáfrica', 'México', 'Uruguay', 'Francia'];
// export const groupBTeams = ['Argentina', 'Corea del Sur', 'Nigeria', 'Grecia'];
// export const groupCTeams = ['Inglaterra', 'Estados Unidos', 'Argelia', 'Eslovenia'];
// export const groupDTeams = ['Alemania', 'Australia', 'Ghana', 'Serbia'];
// export const groupETeams = ['Holanda', 'Japón', 'Camerún', 'Dinamarca'];
// export const groupFTeams = ['Italia', 'Nueva Zelanda', 'Paraguay', 'Eslovaquia'];
// export const groupGTeams = ['Brasil', 'Corea del Norte', 'Costa de Marfil', 'Portugal'];
// export const groupHTeams = ['España', 'Honduras', 'Chile', 'Suiza'];

export const worldCupTeams = [ 
//   TODO: Pasarle a index un array con 32 equipos, y que desde index se llame a un método de PointsBasedLeague que se llamará doWorldCupDraw que retornará este objeto
//   groupATeams : groupATeams,
//   groupBTeams : groupBTeams,
//   groupCTeams : groupCTeams,
//   groupDTeams : groupDTeams,
//   groupETeams : groupETeams,
//   groupFTeams : groupFTeams,
//   groupGTeams : groupGTeams,
//   groupHTeams : groupHTeams
  'Sudáfrica', 'México', 'Uruguay', 'Francia', 'Argentina', 'Corea del Sur', 
  'Nigeria', 'Grecia', 'Inglaterra', 'Estados Unidos', 'Argelia', 'Eslovenia', 
  'Alemania', 'Australia', 'Ghana', 'Serbia', 'Holanda', 'Japón', 'Camerún', 
  'Dinamarca', 'Italia', 'Nueva Zelanda', 'Paraguay', 'Eslovaquia', 'Brasil', 
  'Corea del Norte', 'Costa de Marfil', 'Portugal', 'España', 
  'Honduras', 'Chile', 'Suiza'
]

export function setGroups(teams, totalGroups, teamsPerGroup){
  const groups = [];
  let i = 0;
  do {
      groups.push(
          // {
              // ["group"+this.config.groupsName[i]] : 
              // [this.config.groupsName[i]] : 
              teams.slice(parseInt(i * teamsPerGroup), parseInt((i+1) * teamsPerGroup))
          // }
      );
      i++;
  } while (i < totalGroups)
  return groups;
}

export const groupsName = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];

export const playOffTeams = [ 
//   TODO: Pasarle a index un array con 32 equipos, y que desde index se llame a un método de PointsBasedLeague que se llamará doWorldCupDraw que retornará este objeto
//   groupATeams : groupATeams,
//   groupBTeams : groupBTeams,
//   groupCTeams : groupCTeams,
//   groupDTeams : groupDTeams,
//   groupETeams : groupETeams,
//   groupFTeams : groupFTeams,
//   groupGTeams : groupGTeams,
//   groupHTeams : groupHTeams
  'Sudáfrica', 'México', 'Uruguay', 'Francia', 'Argentina', 
  'Inglaterra', 'Alemania', 'Holanda', 'Japón',
  'Dinamarca', 'Italia', 'Paraguay', 'Brasil', 
  'Portugal', 'España', 'Chile'

  // ,'Sudáfrica', 'México', 'Uruguay', 'Francia', 'Argentina', 
  // 'Inglaterra', 'Alemania', 'Holanda', 'Japón',
  // 'Dinamarca', 'Italia', 'Paraguay', 'Brasil', 
  // 'Portugal', 'España', 'Chile'

  // ,'Sudáfrica', 'México', 'Uruguay', 'Francia', 'Argentina', 
  // 'Inglaterra', 'Alemania', 'Holanda', 'Japón',
  // 'Dinamarca', 'Italia', 'Paraguay', 'Brasil', 
  // 'Portugal', 'España', 'Chile'

  // ,'Sudáfrica', 'México', 'Uruguay', 'Francia', 'Argentina', 
  // 'Inglaterra', 'Alemania', 'Holanda', 'Japón',
  // 'Dinamarca', 'Italia', 'Paraguay', 'Brasil', 
  // 'Portugal', 'España', 'Chile'

  // ,'Sudáfrica', 'México', 'Uruguay', 'Francia', 'Argentina', 
  // 'Inglaterra', 'Alemania', 'Holanda', 'Japón',
  // 'Dinamarca', 'Italia', 'Paraguay', 'Brasil', 
  // 'Portugal', 'España', 'Chile'

  // ,'Sudáfrica', 'México', 'Uruguay', 'Francia', 'Argentina', 
  // 'Inglaterra', 'Alemania', 'Holanda', 'Japón',
  // 'Dinamarca', 'Italia', 'Paraguay', 'Brasil', 
  // 'Portugal', 'España', 'Chile'

  // ,'Sudáfrica', 'México', 'Uruguay', 'Francia', 'Argentina', 
  // 'Inglaterra', 'Alemania', 'Holanda', 'Japón',
  // 'Dinamarca', 'Italia', 'Paraguay', 'Brasil', 
  // 'Portugal', 'España', 'Chile'

  // ,'Sudáfrica', 'México', 'Uruguay', 'Francia', 'Argentina', 
  // 'Inglaterra', 'Alemania', 'Holanda', 'Japón',
  // 'Dinamarca', 'Italia', 'Paraguay', 'Brasil', 
  // 'Portugal', 'España', 'Chile'
]