/*
  JavaScriptは「動き」を作るためのファイルです。
  ボタンを押した時の処理などをここに書きます。
*/

// HTMLから、id="countButton" のボタンを探してくる
const countButton = document.querySelector("#countButton");

// HTMLから、id="countNumber" の表示場所を探してくる
const countNumber = document.querySelector("#countNumber");

// カウントの最初の値
let count = 0;

countButton.addEventListener("click", () => {
  // countを1増やす

  // 画面に表示されている数字を更新する
  countNumber.textContent = count;
});