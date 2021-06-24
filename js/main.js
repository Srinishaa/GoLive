$(document).ready(function(){
  let redirect=$('form').attr("next");
  let back=$('form').attr("back");
  
  $(".back").click(function(e) {window.location.href = back})

  $("form").submit(function(e) {
    e.preventDefault();
    $.ajax({
      type: "POST",
      url: "https://h391398vkuek.preview.gamesparks.net/rs/debug/UZVkxRGqK5ewFbmMrEg2yuseepqcm5Tf/LogEventRequest",
      contentType: 'application/json',
      data: JSON.stringify({
          "@class": ".LogEventRequest",
          "eventKey": "LeaugeTeamLBUpdate",
          "leagueId": "Sky Esports League-1617015905529",
          "leagueAdditionId": "Sky Esports League-1617015905529-2021-March-1617025320377",
          "homeTeamScore": 3,
          "awayTeamScore": 0,
          "matchStartTime": 1619244230000,
          "homeTeam": "Chennai Clutchers",
          "awayTeam": "Bengaluru Crushers",
          "matchId": "Sky Esports League-1617015905529-2021-March-1617025320377-Chennai Clutchers-1619244230000",
          "matchLink": "",
          "selectedByAwayTeam": [
            {
              "homeTeamScore": 13,
              "awayTeamScore": 5,
              "screenShot": "",
              "videoLink": "",
              "mapName": "ICEBOX"
            }
          ],
          "selectedByHomeTeam": [
            {
              "homeTeamScore": 13,
              "awayTeamScore": 10,
              "screenShot": "",
              "videoLink": "",
              "mapName": "HAVEN"
            },
            {
              "homeTeamScore": 13,
              "awayTeamScore": 8,
              "screenShot": "",
              "videoLink": "",
              "mapName": "ASCENT"
            }
          ],
          "homeTeamTieBreaker": 16,
          "awayTeamTieBreaker": -16,
          "playerId":"60378db593d80404f7a18234"
        }),
      success: function(data){
        window.location.href = redirect;
        alert(data.scriptData.message);
      },
      error: function(){
          console.log("Device control failed");
      },
      dataType: 'json'
    },
    );
})
})