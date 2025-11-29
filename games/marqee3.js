const text = "Hello World";
const space = "-";
const speed = 400;

const dbg = (x) => {
  console.log(x);
  return x;
};

const screen = Array(20).fill(`${space}`.repeat(50).split(""));

const showScreen = (screen) => {
  console.clear();
  console.log(screen.join(""));
};

const cycler = (text) => {
  let i = 0;
  return () => text[i++ % text.length];
};

const revCycler = (text) => {
  let i = 0;
  return () => text[text.length - (i++ % text.length) - 1];
};

let j = 0;

const revTextCycler = revCycler(text);

const cyclerText = cycler(text);

const pushChar = (screen, dir) => {
  if (dir === 1) {
    const char = j % screen.length < text.length ? cyclerText() : `${space}`;
    screen.push(char);
    screen.shift(char);
    return screen;
  } else if (dir === -1) {
    const char = j % screen.length < text.length ? revTextCycler() : `${space}`;
    screen.pop();
    screen.unshift(char);
    return screen;
  }
};

const a = setInterval(() => {
  const newLine = pushChar(screen[0], -1);
  showScreen(newLine);
  j++;
}, speed);
