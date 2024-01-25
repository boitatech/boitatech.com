const btn = document.getElementById('btn_text');
const buttonText = btn.textContent;
let interval = null;

function containsObject(obj, list) {
  var i;
  for (i = 0; i < list.length; i++) {
    if (list[i] === obj) {
      return true;
    }
  }
  return false;
}

btn.addEventListener('mouseover', () => {
  const buttonText = btn.textContent;
  let interval = null;
  let image = '<img src="assets/img/discord.svg" class="discord-blogo" alt="logo discord"/>';
  const classes = Array.from(btn.classList);
  if(containsObject("hovered", classes)) return;
  btn.classList.add('hovered');
  let iteration = 0;
  const btnPhrase = btn.textContent;
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  clearInterval(interval);

  interval = setInterval(() => {
    btn.innerHTML = btn.innerText.split("").map((letter, index) => {
      if(index < iteration) {
        return btnPhrase[index];
      }
      return letters[Math.floor(Math.random() * 26)]
    }).join("");
    if(iteration >= btnPhrase.length){ 
      clearInterval(interval);
      btn.classList.remove('hovered');
    };
    iteration += 1/2;
  }, 20);
});
btn.addEventListener('mouseout', () => {
  const buttonText = btn.textContent;
  let originalText = '';
  for (let i = 0; i < buttonText.length; i++) {
    originalText += buttonText[i];
  }
  btn.innerHTML = originalText;
});