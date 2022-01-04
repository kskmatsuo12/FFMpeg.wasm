var S = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
var N = 16;

const randomStr = () => {
  return Array.from(Array(N))
    .map(() => S[Math.floor(Math.random() * S.length)])
    .join("");
};
