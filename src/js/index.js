/* eslint-disable */

import "../assets/img/rigo-baby.jpg";
import "../assets/img/4geeks.ico";
//import 'breathecode-dom'; //DOM override to make JS easier to use
import "../style/index.scss";

window.onload = function() {
  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];
  var finalstring = "";

  for (let i = 0; i < pronoun.length; i++) {
    for (let b = 0; b < adj.length; b++) {
      for (let c = 0; c < noun.length; c++) {
        finalstring += pronoun[i] + adj[b] + noun[c] + ".com" + "<br>";
      }
    }
  }

  document.querySelector("#domain").innerHTML = finalstring;
};
