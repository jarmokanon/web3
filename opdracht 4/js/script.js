// var myObj; // basic declaration of json-array
// var videoID = 0; // basis declaration of what videoID to play
// var xmlhttp = new XMLHttpRequest(); // prepare new XMLHttpRequest
// xmlhttp.open("GET", "playlist.json", true); // open json file 'playlist.json'
// // xmlhttp.open("GET", "https://www.themealdb.com/api/json/v1/1/search.php?f=b", true); // open json file 'playlist.json'
// xmlhttp.send(); // process json code
// xmlhttp.onreadystatechange = function() { // when processing complete
//  if (this.readyState == 4 && this.status == 200) { // when processing is successful
//    myObj = JSON.parse(this.responseText); // fill myObj parameter with result of parser
//  }
// }
// function playvideo() {
//  var sourceplayer = document.getElementById("videoplayer"); // get videoplayer iframe
//  sourceplayer.classList='';
//  if (myObj.length == videoID) {
//    videoID = 0; // reset videoID after last video played
//  }
//  sourceplayer.src = myObj[videoID].youtube_url + "?autoplay=1"; // fill src of iframe
//  document.getElementById("artist").innerHTML = myObj[videoID].artist;
//  document.getElementById("title").innerHTML = myObj[videoID].title;
//  document.getElementById("year").innerHTML = myObj[videoID].year; 
//  // Hier komt de code die je er zelf bij moet typen
//  videoID++;// raise videoID, so next video will be played on click
// }

// function playprevious(){
// 	videoID--;
// 	videoID--;

// 	if (myObj.length == videoID) {  //deze zorgt ervoor dat het niet vastloopt als de videos opzijn, hij reset dus.
// 		videoID = 0;
// 	}
// 	var sourceplayer = document.getElementById("videoplayer"); //verwijst naar de id in de html
//   sourceplayer.src = myObj[videoID].youtube_url + "?autoplay=1";
//   document.getElementById("artist").innerHTML = myObj[videoID].artist;
//   document.getElementById("title").innerHTML = myObj[videoID].title;
//   document.getElementById("year").innerHTML = myObj[videoID].year; 
// 	  //dat de volgende video wordt afgespeeld
// }
// function video1() {
//   var sourceplayer = document.getElementById("videoplayer");
//   if (myObj.length == videoID) {
//     videoID = 0; // reset videoID after last video played
//   }
//   sourceplayer.classList='';
//   // sourceplayer.style.display = "block";
//   sourceplayer.src = myObj[videoID = 0].youtube_url + "?autoplay=1";
//   document.getElementById("artist").innerHTML = myObj[videoID].artist;
//   document.getElementById("title").innerHTML = myObj[videoID].title;
//   document.getElementById("year").innerHTML = myObj[videoID].year;

//   videoID++;
// }
// function video2() {
//   var sourceplayer = document.getElementById("videoplayer");
//   if (myObj.length == videoID) {
//     videoID = 0; // reset videoID after last video played
//   }
//   sourceplayer.classList='';
//   // sourceplayer.style.display = "block";
//   sourceplayer.src = myObj[videoID = 1].youtube_url + "?autoplay=1";
//   document.getElementById("artist").innerHTML = myObj[videoID].artist;
//   document.getElementById("title").innerHTML = myObj[videoID].title;
//   document.getElementById("year").innerHTML = myObj[videoID].year;

//   videoID++;
// }
// function video3() {
//   var sourceplayer = document.getElementById("videoplayer");
//   if (myObj.length == videoID) {
//     videoID = 0; // reset videoID after last video played
//   }
//   sourceplayer.classList='';
//   // sourceplayer.style.display = "block";
//   sourceplayer.src = myObj[videoID = 2].youtube_url + "?autoplay=1";
//   document.getElementById("artist").innerHTML = myObj[videoID].artist;
//   document.getElementById("title").innerHTML = myObj[videoID].title;
//   document.getElementById("year").innerHTML = myObj[videoID].year;

//   videoID++;
// }
// function video4() {
//   var sourceplayer = document.getElementById("videoplayer");
//   if (myObj.length == videoID) {
//     videoID = 0; // reset videoID after last video played
//   }
//   sourceplayer.classList='';
//   // sourceplayer.style.display = "block";
//   sourceplayer.src = myObj[videoID = 3].youtube_url + "?autoplay=1";
//   document.getElementById("artist").innerHTML = myObj[videoID].artist;
//   document.getElementById("title").innerHTML = myObj[videoID].title;
//   document.getElementById("year").innerHTML = myObj[videoID].year;

//   videoID++;
// }
// function video5() {
//   var sourceplayer = document.getElementById("videoplayer");
//   if (myObj.length == videoID) {
//     videoID = 0; // reset videoID after last video played
//   }
//   sourceplayer.classList='';
//   // sourceplayer.style.display = "block";
//   sourceplayer.src = myObj[videoID = 4].youtube_url + "?autoplay=1";
//   document.getElementById("artist").innerHTML = myObj[videoID].artist;
//   document.getElementById("title").innerHTML = myObj[videoID].title;
//   document.getElementById("year").innerHTML = myObj[videoID].year;

//   videoID++;
// }
// // fetch('playlist.json')
// // .then(function (response) {
// //     return response.json();
// // })
// // .then(function (data) {
// //     appendData(data);
// // })
// // .catch(function (err) {
// //     console.log('error: ' + err);
// // });

// // function appendData(data) {
// // var mainContainer = document.getElementById("myData");
// // for (var videoID = 0; videoID < data.length; videoID++) {
// //     var videolink = document.createElement("a");
// //     videolink.innerHTML = 'Titel: ' + data[videoID].title;
// //     mainContainer.appendChild(videolink);
// // }
// // }