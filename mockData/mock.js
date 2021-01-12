export const summariesMock =
[
  {
    results: [
      {
        homeTeam: 'Nueva Zelanda',
        homeGoals: 1,
        awayTeam: 'Francia',
        awayGoals: 8
      },
      { 
        homeTeam: 'Japón', 
        homeGoals: 11, 
        awayTeam: 'Ghana', 
        awayGoals: 3 
      }
    ],
    standings: [
      {
        points: 3,
        goalsFor: 8,
        goalsAgainst: 1,
        name: 'Francia',
        matchesWon: 1,
        matchesDrawn: 0,
        matchesLost: 0
      },
      {
        points: 3,
        goalsFor: 9,
        goalsAgainst: 3,
        name: 'Japón',
        matchesWon: 1,
        matchesDrawn: 0,
        matchesLost: 0
      },
      {
        points: 0,
        goalsFor: 3,
        goalsAgainst: 11,
        name: 'Ghana',
        matchesWon: 0,
        matchesDrawn: 0,
        matchesLost: 1
      },
      {
        points: 0,
        goalsFor: 1,
        goalsAgainst: 8,
        name: 'Nueva Zelanda',
        matchesWon: 0,
        matchesDrawn: 0,
        matchesLost: 1
      }
    ]
  },
  {
    results: [
      {
        homeTeam: 'Francia', 
        homeGoals: 3, 
        awayTeam: 'Ghana', 
        awayGoals: 3
      },
      { 
        homeTeam: 'Nueva Zelanda',
        homeGoals: 3,
        awayTeam: 'Japón',
        awayGoals: 3
      }
    ],
    standings: [
      {
        points: 4,
        goalsFor: 11,
        goalsAgainst: 4,
        name: 'Francia',
        matchesWon: 1,
        matchesDrawn: 1,
        matchesLost: 0
      },
      {
        points: 4,
        goalsFor: 12,
        goalsAgainst: 6,
        name: 'Japón',
        matchesWon: 1,
        matchesDrawn: 1,
        matchesLost: 0
      },
      {
        points: 1,
        goalsFor: 6,
        goalsAgainst: 14,
        name: 'Ghana',
        matchesWon: 0,
        matchesDrawn: 1,
        matchesLost: 1
      },
      {
        points: 1,
        goalsFor: 4,
        goalsAgainst: 11,
        name: 'Nueva Zelanda',
        matchesWon: 0,
        matchesDrawn: 1,
        matchesLost: 1
      }
    ]
  },
  {
    results: [
      {
        homeTeam: 'Japón', 
        homeGoals: 0, 
        awayTeam: 'Francia', 
        awayGoals: 0
      },
      { 
        homeTeam: 'Ghana',
        homeGoals: 0,
        awayTeam: 'Nueva Zelanda',
        awayGoals: 0
      }
    ],
    standings: [
      {
        points: 5,
        goalsFor: 11,
        goalsAgainst: 4,
        name: 'Francia',
        matchesWon: 1,
        matchesDrawn: 2,
        matchesLost: 0
      },
      {
        points: 5,
        goalsFor: 12,
        goalsAgainst: 6,
        name: 'Japón',
        matchesWon: 1,
        matchesDrawn: 2,
        matchesLost: 0
      },
      {
        points: 2,
        goalsFor: 6,
        goalsAgainst: 14,
        name: 'Ghana',
        matchesWon: 0,
        matchesDrawn: 2,
        matchesLost: 1
      },
      {
        points: 2,
        goalsFor: 4,
        goalsAgainst: 11,
        name: 'Nueva Zelanda',
        matchesWon: 0,
        matchesDrawn: 2,
        matchesLost: 1
      }
    ]
  }
]


// Segundo criterio de clasificación
// Probamos criterios de enfrentamiento directo. Caso 2
// ((directGame.homeTeam == teamA.name) && (directGame.homeGoals < directGame.awayGoals)) y
// [
//   {
//     results: [
//       {
//         homeTeam: 'Nueva Zelanda',
//         homeGoals: 0,
//         awayTeam: 'Francia',
//         awayGoals: 1
//       },
//       { 
//         homeTeam: 'Japón', 
//         homeGoals: 0, 
//         awayTeam: 'Ghana', 
//         awayGoals: 1 
//       }
//     ],
//     standings: [
//       {
//         points: 3,
//         goalsFor: 1,
//         goalsAgainst: 0,
//         name: 'Francia',
//         matchesWon: 1,
//         matchesDrawn: 0,
//         matchesLost: 0
//       },
//       {
//         points: 0,
//         goalsFor: 0,
//         goalsAgainst: 1,
//         name: 'Japón',
//         matchesWon: 0,
//         matchesDrawn: 0,
//         matchesLost: 1
//       },
//       {
//         points: 3,
//         goalsFor: 1,
//         goalsAgainst: 0,
//         name: 'Ghana',
//         matchesWon: 1,
//         matchesDrawn: 0,
//         matchesLost: 0
//       },
//       {
//         points: 0,
//         goalsFor: 0,
//         goalsAgainst: 1,
//         name: 'Nueva Zelanda',
//         matchesWon: 0,
//         matchesDrawn: 0,
//         matchesLost: 1
//       }
//     ]
//   },
//   {
//     results: [
//       {
//         homeTeam: 'Francia', 
//         homeGoals: 1, 
//         awayTeam: 'Ghana', 
//         awayGoals: 1
//       },
//       { 
//         homeTeam: 'Nueva Zelanda',
//         homeGoals: 0,
//         awayTeam: 'Japón',
//         awayGoals: 2
//       }
//     ],
//     standings: [
//       {
//         points: 4,
//         goalsFor: 2,
//         goalsAgainst: 1,
//         name: 'Francia',
//         matchesWon: 1,
//         matchesDrawn: 1,
//         matchesLost: 0
//       },
//       {
//         points: 0,
//         goalsFor: 0,
//         goalsAgainst: 3,
//         name: 'Nueva Zelanda',
//         matchesWon: 0,
//         matchesDrawn: 0,
//         matchesLost: 2
//       },
//       {
//         points: 4,
//         goalsFor: 2,
//         goalsAgainst: 1,
//         name: 'Ghana',
//         matchesWon: 1,
//         matchesDrawn: 1,
//         matchesLost: 0
//       },
//       {
//         points: 3,
//         goalsFor: 2,
//         goalsAgainst: 1,
//         name: 'Japón',
//         matchesWon: 1,
//         matchesDrawn: 0,
//         matchesLost: 1
//       }
//     ]
//   },
//   {
//     results: [
//       {
//         homeTeam: 'Japón', 
//         homeGoals: 0, 
//         awayTeam: 'Francia', 
//         awayGoals: 3
//       },
//       { 
//         homeTeam: 'Ghana',
//         homeGoals: 0,
//         awayTeam: 'Nueva Zelanda',
//         awayGoals: 3
//       }
//     ],
//     standings: [
//       {
//         points: 7,
//         goalsFor: 5,
//         goalsAgainst: 1,
//         name: 'Francia',
//         matchesWon: 2,
//         matchesDrawn: 1,
//         matchesLost: 0
//       },
//       {
//         points: 3,
//         goalsFor: 2,
//         goalsAgainst: 4,
//         name: 'Japón',
//         matchesWon: 1,
//         matchesDrawn: 0,
//         matchesLost: 2
//       },
//       {
//         points: 4,
//         goalsFor: 2,
//         goalsAgainst: 3,
//         name: 'Ghana',
//         matchesWon: 1,
//         matchesDrawn: 1,
//         matchesLost: 1
//       },
//       {
//         points: 3,
//         goalsFor: 3,
//         goalsAgainst: 3,
//         name: 'Nueva Zelanda',
//         matchesWon: 1,
//         matchesDrawn: 0,
//         matchesLost: 2
//       }
//     ]
//   }
// ]


// Segundo criterio de clasificación
// Probamos criterios de enfrentamiento directo. Caso 4
// ((directGame.homeTeam == teamB.name) && (directGame.homeGoals < directGame.awayGoals))
// [
//   {
//     results: [
//       {
//         homeTeam: 'Nueva Zelanda',
//         homeGoals: 0,
//         awayTeam: 'Francia',
//         awayGoals: 1
//       },
//       { 
//         homeTeam: 'Japón', 
//         homeGoals: 0, 
//         awayTeam: 'Ghana', 
//         awayGoals: 1 
//       }
//     ],
//     standings: [
//       {
//         points: 3,
//         goalsFor: 1,
//         goalsAgainst: 0,
//         name: 'Francia',
//         matchesWon: 1,
//         matchesDrawn: 0,
//         matchesLost: 0
//       },
//       {
//         points: 0,
//         goalsFor: 0,
//         goalsAgainst: 1,
//         name: 'Japón',
//         matchesWon: 0,
//         matchesDrawn: 0,
//         matchesLost: 1
//       },
//       {
//         points: 3,
//         goalsFor: 1,
//         goalsAgainst: 0,
//         name: 'Ghana',
//         matchesWon: 1,
//         matchesDrawn: 0,
//         matchesLost: 0
//       },
//       {
//         points: 0,
//         goalsFor: 0,
//         goalsAgainst: 1,
//         name: 'Nueva Zelanda',
//         matchesWon: 0,
//         matchesDrawn: 0,
//         matchesLost: 1
//       }
//     ]
//   },
//   {
//     results: [
//       {
//         homeTeam: 'Francia', 
//         homeGoals: 0, 
//         awayTeam: 'Ghana', 
//         awayGoals: 2
//       },
//       { 
//         homeTeam: 'Nueva Zelanda',
//         homeGoals: 2,
//         awayTeam: 'Japón',
//         awayGoals: 0
//       }
//     ],
//     standings: [
//       {
//         points: 3,
//         goalsFor: 1,
//         goalsAgainst: 2,
//         name: 'Francia',
//         matchesWon: 1,
//         matchesDrawn: 0,
//         matchesLost: 1
//       },
//       {
//         points: 0,
//         goalsFor: 0,
//         goalsAgainst: 3,
//         name: 'Japón',
//         matchesWon: 0,
//         matchesDrawn: 0,
//         matchesLost: 2
//       },
//       {
//         points: 6,
//         goalsFor: 3,
//         goalsAgainst: 0,
//         name: 'Ghana',
//         matchesWon: 2,
//         matchesDrawn: 0,
//         matchesLost: 0
//       },
//       {
//         points: 3,
//         goalsFor: 2,
//         goalsAgainst: 1,
//         name: 'Nueva Zelanda',
//         matchesWon: 1,
//         matchesDrawn: 0,
//         matchesLost: 1
//       }
//     ]
//   },
//   {
//     results: [
//       {
//         homeTeam: 'Japón', 
//         homeGoals: 0, 
//         awayTeam: 'Francia', 
//         awayGoals: 3
//       },
//       { 
//         homeTeam: 'Ghana',
//         homeGoals: 3,
//         awayTeam: 'Nueva Zelanda',
//         awayGoals: 0
//       }
//     ],
//     standings: [
//       {
//         points: 6,
//         goalsFor: 4,
//         goalsAgainst: 2,
//         name: 'Francia',
//         matchesWon: 2,
//         matchesDrawn: 0,
//         matchesLost: 1
//       },
//       {
//         points: 0,
//         goalsFor: 0,
//         goalsAgainst: 6,
//         name: 'Japón',
//         matchesWon: 0,
//         matchesDrawn: 0,
//         matchesLost: 3
//       },
//       {
//         points: 6,
//         goalsFor: 4,
//         goalsAgainst: 2,
//         name: 'Ghana',
//         matchesWon: 2,
//         matchesDrawn: 0,
//         matchesLost: 1
//       },
//       {
//         points: 3,
//         goalsFor: 2,
//         goalsAgainst: 4,
//         name: 'Nueva Zelanda',
//         matchesWon: 1,
//         matchesDrawn: 0,
//         matchesLost: 2
//       }
//     ]
//   }
// ]


// // Segundo criterio de clasificación
// // Probamos criterios de enfrentamiento directo. Casos 1 y 3
// // if ((directGame.homeTeam == teamA.name) && (directGame.homeGoals > directGame.awayGoals)) y 
// // if ((directGame.homeTeam == teamB.name) && (directGame.homeGoals > directGame.awayGoals))
// [
//   {
//     results: [
//       {
//         homeTeam: 'Nueva Zelanda',
//         homeGoals: 0,
//         awayTeam: 'Francia',
//         awayGoals: 1
//       },
//       { 
//         homeTeam: 'Japón', 
//         homeGoals: 0, 
//         awayTeam: 'Ghana', 
//         awayGoals: 1 
//       }
//     ],
//     standings: [
//       {
//         points: 3,
//         goalsFor: 1,
//         goalsAgainst: 0,
//         name: 'Francia',
//         matchesWon: 1,
//         matchesDrawn: 0,
//         matchesLost: 0
//       },
//       {
//         points: 0,
//         goalsFor: 0,
//         goalsAgainst: 1,
//         name: 'Japón',
//         matchesWon: 0,
//         matchesDrawn: 0,
//         matchesLost: 1
//       },
//       {
//         points: 3,
//         goalsFor: 1,
//         goalsAgainst: 0,
//         name: 'Ghana',
//         matchesWon: 1,
//         matchesDrawn: 0,
//         matchesLost: 0
//       },
//       {
//         points: 0,
//         goalsFor: 0,
//         goalsAgainst: 1,
//         name: 'Nueva Zelanda',
//         matchesWon: 0,
//         matchesDrawn: 0,
//         matchesLost: 1
//       }
//     ]
//   },
//   {
//     results: [
//       {
//         homeTeam: 'Francia', 
//         homeGoals: 2, 
//         awayTeam: 'Ghana', 
//         awayGoals: 0
//       },
//       { 
//         homeTeam: 'Nueva Zelanda',
//         homeGoals: 2,
//         awayTeam: 'Japón',
//         awayGoals: 0
//       }
//     ],
//     standings: [
//       {
//         points: 6,
//         goalsFor: 3,
//         goalsAgainst: 0,
//         name: 'Francia',
//         matchesWon: 2,
//         matchesDrawn: 0,
//         matchesLost: 0
//       },
//       {
//         points: 0,
//         goalsFor: 0,
//         goalsAgainst: 3,
//         name: 'Japón',
//         matchesWon: 0,
//         matchesDrawn: 0,
//         matchesLost: 2
//       },
//       {
//         points: 3,
//         goalsFor: 1,
//         goalsAgainst: 2,
//         name: 'Ghana',
//         matchesWon: 1,
//         matchesDrawn: 0,
//         matchesLost: 1
//       },
//       {
//         points: 3,
//         goalsFor: 2,
//         goalsAgainst: 1,
//         name: 'Nueva Zelanda',
//         matchesWon: 1,
//         matchesDrawn: 0,
//         matchesLost: 1
//       }
//     ]
//   },
//   {
//     results: [
//       {
//         homeTeam: 'Japón', 
//         homeGoals: 3, 
//         awayTeam: 'Francia', 
//         awayGoals: 0
//       },
//       { 
//         homeTeam: 'Ghana',
//         homeGoals: 3,
//         awayTeam: 'Nueva Zelanda',
//         awayGoals: 0
//       }
//     ],
//     standings: [
//       {
//         points: 6,
//         goalsFor: 3,
//         goalsAgainst: 3,
//         name: 'Francia',
//         matchesWon: 2,
//         matchesDrawn: 0,
//         matchesLost: 1
//       },
//       {
//         points: 3,
//         goalsFor: 3,
//         goalsAgainst: 3,
//         name: 'Japón',
//         matchesWon: 1,
//         matchesDrawn: 0,
//         matchesLost: 2
//       },
//       {
//         points: 6,
//         goalsFor: 4,
//         goalsAgainst: 2,
//         name: 'Ghana',
//         matchesWon: 2,
//         matchesDrawn: 0,
//         matchesLost: 1
//       },
//       {
//         points: 3,
//         goalsFor: 2,
//         goalsAgainst: 4,
//         name: 'Nueva Zelanda',
//         matchesWon: 1,
//         matchesDrawn: 0,
//         matchesLost: 2
//       }
//     ]
//   }
// ]





  