const screen = ' '.repeat(50).split('');

const text = ' HELLO WORLD ';

const showScreen = (screen) => {
  console.clear();
  console.log(screen.join(''));
}

const pushChar = (screen,char) => {
  screen.push(char);
  screen.shift(char);
  return screen;
}

const cycler = (text) => {
  let i = 0;
  return () => text[i++ % text.length];
};

const newChar = cycler(text)

let j = 0;

setInterval(() => {
  const testChar = newChar();
  const newScreen = pushChar(screen,testChar);
  showScreen(newScreen);
  j++;
},100);
