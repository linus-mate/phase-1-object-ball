
let obj ={
    "home":{
      "teamName":"Brooklyn Nets",
      "colors":['Black', 'White'],
      "players":{
        "Jeff Adrien":{
                  "number":"",
                  "shoe":"",
                  "points":"",
                  "rebounds":"",
                  "assists":"",
                  "steals":"",
                  "blocks":"",
                  "slamDunks":""
                },
        "Bismak Biyombo":{
                  "number":"",
                  "shoe":"",
                  "points":"",
                  "rebounds":"",
                  "assists":"",
                  "steals":"",
                  "blocks":"",
                  "slamDunks":""
                },
        "DeSafna Diop":{
                "number":"",
                "shoe":"",
                "points":"",
                "rebounds":"",
                "assists":"",
                "steals":"",
                "blocks":"",
                "slamDunks":""
              },
        "Ben Gordon":{
                "playerName":"",
                "number":"",
                "shoe":"",
                "points":"",
                "rebounds":"",
                "assists":"",
                "steals":"",
                "blocks":"",
                "slamDunks":""
              },
        "Brendan Haywood":{
                "playerName":"",
                "number":"",
                "shoe":"",
                "points":"",
                "rebounds":"",
                "assists":"",
                "steals":"",
                "blocks":"",
                "slamDunks":""
              }
      }
    },
    "away":{
      "teamName":"",
      "colors":"",
      "players":{
        "Alan Anderson":{
                "number":0,
                "shoe":16,
                "points":22,
                "rebounds":12,
                "assists":12,
                "steals":3,
                "blocks":1,
                "slamDunks":1
              },
      "Roggie Evans":{
                "number":30,
                "shoe":14,
                "points":12,
                "rebounds":12,
                "assists":12,
                "steals":12,
                "blocks":12,
                "slamDunks":7
              },
      " Brook Lopez":{
              "number":11,
              "shoe":17,
              "points":17,
              "rebounds":19,
              "assists":10,
              "steals":3,
              "blocks":1,
              "slamDunks":15
            },
      "Mason Plumlee":{
              "number":1,
              "shoe":19,
              "points":26,
              "rebounds":12,
              "assists":6,
              "steals":3,
              "blocks":8,
              "slamDunks":5
            },
      "Jason Terry":{
              "number":31,
              "shoe":15,
              "points":19,
              "rebounds":2,
              "assists":2,
              "steals":4,
              "blocks":11,
              "slamDunks":1
            }
    }
    }
}
const gameObject =()=>obj;
console.log(gameObject());

const homeTeamName=()=> gameObject()['home']['teamName'];


console.log(homeTeamName());

function numPointsScored(playerName){
  let hNA = Object.keys(gameObject())
 for(let key in hNA){
  let value =hNA[key]
  if(value.players===playerName){
    return value.players[playerName]
  }
 }

}