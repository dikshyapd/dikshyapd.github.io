document.addEventListener('DOMContentLoaded', () => {  document.getElementById('streak_count').textContent = (localStorage.getItem('nt_streak' + 1 + "🔥 days") || '1'  + "🔥 day");
})

document.addEventListener('DOMContentLoaded', () => {
  updateStreak();
  loadTranslate();
})

function record(){
  var recognition = new webkitSpeechRecognition(); 
  recognition.lang = 'en-US';
  recognition.onresult = function(event) {
    var transcript = event.results[0][0].transcript;
    document.getElementById('speechInput').value = transcript;
    console.log(transcript);
  }
  recognition.start();
}

function listen(){
  let text = document.getElementById('speechInput').value;
  let speech = new SpeechSynthesisUtterance();
  let voices = window.speechSynthesis.getVoices();

  speech.voice = voices[5];
  speech.text = text;
  speech.lang = "en-US";
  speech.pitch = 1;
  speech.volume = 1;
  speech.rate = 1;
  window.speechSynthesis.speak(speech);
}

function googleTranslateElementInit(){
  new google.translate.TranslateElement({
    pageLanguage: 'en',
    includedLanguages: 'ne',
    layout: google.translate.TranslateElement.InlineLayout.SIMPLE
  }, 'google_translate_element');
}

function loadTranslate(){
  const translateToggle = document.getElementById('translate-toggle');
  const googleTranslateElement = document.getElementById('google_translate_element');

  translateToggle.addEventListener('click', () => {
    googleTranslateElement.classList.toggle('hide');
    translateToggle.classList.toggle('toggleTransBtn');
  }); 
}

function openVocab(word, meaning) {
  const vocabPopup = document.getElementById('vocab-popup');
  document.getElementById('vocab-word').textContent = word;
  document.getElementById('vocab-meaning').textContent = meaning || '';
  vocabPopup.classList.add('visible');
}
document.getElementById('close-vocab-popup').addEventListener('click', () => {
  document.getElementById('vocab-popup').classList.remove('visible');
})

function updateStreak() {
  const today = new Date().toDateString();
  const lastVisit = localStorage.getItem('nt_lastVisit');
  let streak = parseInt(localStorage.getItem('streak') || '0', 10);

  if (!lastVisit){
    streak =1;
    localStorage.setItem('nt_lastVisit', today);
    localStorage.setItem('nt_streak', streak);
    return streak;
  }
  const last = new Date(lastVisit);
  const lastDay = new Date(last.getFullYear(), last.getMonth(), last.getDate());
  const currentDay = new Date(today);
  const diff = (currentDay - lastDay) / (1000 * 60 * 60 * 24);

  if (diff === 1) {
    streak += 1;
  } else if(diff > 1){
    streak = 1;
  }

  localStorage.setItem('nt_lastVisit', today);
  localStorage.setItem('nt_streak', streak);
  return streak;
}

function loadTodayWords() {
  document.querySelectorAll('#todayWords input[type="checkbox"]'). forEach(box => {
    const key = 'nt_word_' + chk.id;
    chk.checked = localStorage.getItem(key) === '1';
    chk.addEventListener('change', () =>{
      localStorage.setItem(key, chk.checked ? '1' : '0');
    });
  });
}


