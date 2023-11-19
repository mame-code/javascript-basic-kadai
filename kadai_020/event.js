//要素を取得する
const bottan = document.getElementById('btn');
const text = document.getElementById('text');

//イベント処理
bottan.addEventListener('click',() => {
    text.textContent= "ボタンをクリックしました";
    });