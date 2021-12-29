if ('speechSynthesis' in window) {
    // Speech Synthesis supported 🎉
   } else {
     // Speech Synthesis Not Supported 😣
     alert("Sorry, your browser doesn't support text to speech!");
   }

const images = document.querySelectorAll('.word');
images.forEach(image =>{
    image.addEventListener('click', (event) => {
        // console.log(event.target.id);
        var msg = new SpeechSynthesisUtterance();
        msg.text = event.target.id
        window.speechSynthesis.speak(msg);
    })
})
