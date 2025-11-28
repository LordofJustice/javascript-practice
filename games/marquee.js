const screen = " ".repeat(100).split("");

const text = prompt("Enter Test to print: ") || "🐸 🐸 🐲";

const showScreen = (screen) => {
  console.clear();
  console.log(screen.join(""));
};

const pushChar = (screen, char) => {
  screen.push(char);
  screen.shift(char);
  return screen;
};

const cycler = (text) => {
  let i = 0;
  return () => text[i++ % text.length];
};

let j = 0;

const cyclerText = cycler(text);

setInterval(() => {
  const testChar = j % screen.length < text.length ? cyclerText() : " ";
  const newScreen = pushChar(screen, testChar);
  showScreen(newScreen);
  j++;
}, 100);
