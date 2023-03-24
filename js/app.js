

window.addEventListener("DOMContentLoaded", () => {

    //play
    const audioFiles = ['./audio/01_a.mp3', './audio/02_i.mp3', './audio/03_u.mp3', './audio/04_e.mp3', './audio/05_o.mp3'];
    const buttons = document.querySelectorAll('.play-btn');
    buttons.forEach((button) => {
      button.addEventListener('click', () => {
        const index = button.dataset.index;
        if (currentAudio && !currentAudio.paused) {
            currentAudio.pause();
            currentAudio.currentTime = 0;
        }
        currentAudio = new Audio(audioFiles[index]);
        currentAudio.play();
        downloadButton.disabled = false;
        stopButton.disabled = false;
        button.classList.add('playing')
        currentAudio.addEventListener('ended', function() {
          if (currentAudio && !currentAudio.paused) {
            console.log('111');
          }
          console.log('222');
          for (let step = 0; step < buttons.length; step++) {
            buttons[step].classList.remove('playing')
          }
        });
      });
    });
    

    //dowload
    let currentAudio = null;
    const downloadButton = document.querySelector('#download-btn');
    downloadButton.addEventListener('click', () => {
      const a = document.createElement('a');
      a.href = currentAudio.src;
      a.download = currentAudio.src.split('/').pop();
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    });

    //stop
    const stopButton = document.querySelector('#stop-btn');
    stopButton.addEventListener('click', () => {
        currentAudio.pause();
        currentAudio.currentTime = 0;
        stopButton.disabled = true;
        downloadButton.disabled = true;
        console.log('dung');
        buttons.forEach((button) => {
          buttons.forEach((button) => {
            button.classList.remove('playing')
          })
        })
      });
      
});