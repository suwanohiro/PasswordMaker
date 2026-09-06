window.onload = () => {
  const create = document.getElementById("create");
  const password = document.getElementById("password");
  const pasLength = document.getElementById("pasLength");

  create.addEventListener("click", () => {
    const result = createPassword(pasLength.value);
    password.textContent = result;
  });
};

function createPassword(length) {
  // 生成する文字列に含める文字セット
  const charSet = "abcdefghijklmnopqrstuvwxyz0123456789_@";

  let result = "";
  for (var i = 0; i < length; i++) {
    result += charSet[Math.floor(Math.random() * charSet.length)];
  }

  return result;
}
