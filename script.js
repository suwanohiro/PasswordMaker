window.onload = () => {
    const create = document.getElementById("create");
    const password = document.getElementById("password");
    const pasLength = document.getElementById("pasLength");
    const copy = document.getElementById("copy");

    create.addEventListener("click", () => {
        const result = createPassword(pasLength.value);
        password.textContent = result;
    });

    copy.addEventListener("click", () => {
        copyToClipboard(password.textContent, copy);
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

async function copyToClipboard(text, copyButtonElem) {
    if (copyButtonElem.classList.contains("done")) return;
    try {
        await navigator.clipboard.writeText(text);
        copyButtonElem.classList.toggle("copy");
        copyButtonElem.classList.toggle("done");
        setTimeout(() => {
            copyButtonElem.classList.toggle("copy");
            copyButtonElem.classList.toggle("done");
        }, 1000);
        console.log("コピーしました:", text);
    } catch (err) {
        alert("コピーに失敗しました");
        console.error("コピーに失敗しました:", err);
    }
}
