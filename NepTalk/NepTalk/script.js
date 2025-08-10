document.addEventListener('DOMContentLoaded', () => {
  updateStreak();
   document.getElementById('streak_count').textContent = (localStorage.getItem('nt_streak') || '0' ) + "🔥 days";
  loadTodayWords();
})

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


