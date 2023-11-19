//要素を取得する
const bottan = document.getElementById('btn');
const messege = document.getElementById('text');



bottan.addEventListener('click',()=>{
   setTimeout(() => {    
    messege.textContent="ボタンをクリックしました"; 
},2000);
});