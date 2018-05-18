var tweetButton = document.getElementById("button-tweet");
var main = document.getElementById("main");
var valueOfTheTweet = document.getElementById("text-area").value;
var textArea = document.getElementById("text-area");

var validationTextArea = function(){
  if (valueOfTheTweet == ""){
    tweetButton.disabled = true;
  }else if(valueOfTheTweet.length >0 && valueOfTheTweet.length <= 140 ){
        tweetButton.disabled = false;
    };
};


if (valueOfTheTweet == ""){
  tweetButton.disabled = true;
};

textArea.addEventListener("click", function(){
  tweetButton.disabled = false;
  if (valueOfTheTweet == ""){
    tweetButton.disabled = true;
  };

  textArea.addEventListener("keypress",function(){
    if (valueOfTheTweet.length <= 140 ){
          tweetButton.disabled = false;
        }
  });
});


  /*textArea.addEventListener("mouseout",function(){
    if (valueOfTheTweet == ""){
      tweetButton.disabled = true;
      console.log("se desabilita");
    };
    });

    tweetButton.addEventListener("mouseover", function(){
      tweetButton.disabled = false;
    })

    textArea.addEventListener("click", function(){
      tweetButton.disabled = false;
      console.log("con un click el boton se habilita");
    });*/








var createATweet = function() {
    var valueOfTheTweet = document.getElementById("text-area").value;

  //Creando elementos:
    //Creando text node del value del textarea
    var textOfTheTweet = document.createTextNode(valueOfTheTweet);
    console.log(textOfTheTweet);
    //Creando el div que contendra el tweet
    var divTweet = document.createElement("div");
    divTweet.classList.add("font", "container-tweet-text");

    //Creando la sección que contendrá el tweet y la hora
    var newTweet = document.createElement("section");
    newTweet.classList.add("new-tweet-width", "position");

  //Agregando Elementos:
    divTweet.appendChild(textOfTheTweet);
    newTweet.appendChild(divTweet);
    main.appendChild(newTweet);

    document.getElementById("text-area").value = "";

    var focus = document.getElementById("text-area");
    focus.focus();

  };

  //CREANDO EL TWEET QUE DESENCADENA EL EVENTO "TWEET BUTTON"

tweetButton.addEventListener("click", createATweet);
