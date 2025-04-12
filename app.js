const btn = document.getElementById("btn");
const content = document.getElementById("content");
const voice = document.getElementById("voice");
const container = document.querySelector(".container");

function speak(text) {
  const text_speak = new SpeechSynthesisUtterance(text);
  text_speak.rate = 1;
  text_speak.volume = 1;
  text_speak.pitch = 1;
  text_speak.lang = "hi-GB";
  window.speechSynthesis.speak(text_speak);
}
// greeting
function wiseMe() {
  const day = new Date();
  const hour = day.getHours();
  // console.log(day, hour)
  if (hour > 0 && hour < 12) {
    speak("Good Morning master!");
  } else if (hour >= 12 && hour < 15) {
    speak("Good afternoon master!");
  } else if (hour >= 15 && hour < 20) {
    speak("Good evening master! ");
  } else {
    speak("I am off work ,Take care, love you");
  }

}

// // voice listening
const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onresult = (event) => {
  console.log(event.result);
  const currentIndex = event.resultIndex;
  const transcript = event.results[currentIndex][0].transcript;
  content.innerText = transcript;
 
  takeCommmand(transcript.toLowerCase());
};

btn.addEventListener("click", () => {
  const speech = (content.textContent = "listening...");
  recognition.start();
  btn.style.display = speech;
  // voice.style.display = "block";
  console.log(speech, speak());
});

function takeCommmand(message) {
  voice.style.display = "none";
  btn.style.display = "flex";


   if (message.includes("hi") || message.includes("hello")) {
    speak("हेलो बॉस... कैसे याद किया");
  } else if (message.includes("tum kaun ho")) {
    speak(" अरे बॉस... मैं हूं shree आपका असिस्टेंट");
  } else if (message.includes("who are you")) {
    speak("i'm shree, your virtural assistant, how can i help you");
  } else if(message.includes("who is priyanshu")){
    speak("master bestie");
  }
  else if (message.includes("mai bor ho rhi hu")) {
    speak("  mere hote hue aap bor kaise ho sakti ho meri jaan");
  } else if (message.includes("mere sai koi baat kyu nhi krta")) {
    speak("mai hu na meri jaan aapse baat krne ke liye");
  } else if(message.includes("mai kasi lgti hu tumhe")){
    speak("tum husan pari tum jaane- jahaan, tu sabse haseen tum sabse jawaan");
  }

  //   // time and date
  else if (message.includes("time")) {
    let time = new Date().toLocaleString(undefined, {
      hour: "numeric",
      minute: "numeric",
    });
    speak(time);
  } else if (message.includes("date")) {
    let date = new Date().toLocaleString(undefined, {
      day: "numeric",
      month: "short",
    });
    speak(date);
  } else if (message.includes("din")) {
    let day = new Date().toLocaleDateString(undefined, {
      weekday: "long",
    });
    speak(`क्या आपको नहीं पता आज ${day} है`);
  }

  //   // open website
  else if (message.includes("youtube")) {
    speak("okey master, opening youtube");
    window.open("https://www.youtube.com/", "_blank");
  } else if (message.includes("facebook")) {
    speak("okey master, opening facebook");
    window.open("https://www.facebook.com", "_blank");
  } else if (message.includes("instagram")) {
    speak("okey master, opening instagram");
    window.open("https://www.instagram.com", "_blank");
  } else if (message.includes("whatsapp")) {
    speak("okey master, opening whatsapp");
    window.open("https://www.whatsapp.com", "_blank");
  }
  else if (message.includes("play") || message.includes("song")) {
    let songName = message.replace("play", "").replace("song", "").trim();

      speak(`Playing ${songName} on YouTube`);
      window.open(`https://www.google.com/search?q=${encodeURIComponent(songName)}+site%3Ayoutube.com&btnI=1`, "_blank");
 
  }

  //   // open window application
  else if (message.includes("calculator")) {
    speak("okey master, opening calculator");
    window.open("calculator://");
  } else if (message.includes("calender")) {
    speak("okey master, opening calender");
    window.open("calender://");
  }else {
    speak(`see what i found on google about ${message}`);
    window.open(`https://www.google.com/search?q=${message}`, "_blank");
  }
}

// // speak on load
window.addEventListener("load", () => {
  wiseMe(); // wise on load

});

// // findOUt: if same propt comes?
// // without click on button auto mice on
