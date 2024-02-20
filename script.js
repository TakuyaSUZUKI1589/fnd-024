'use strict'
// 1行目に記載している 'use strict' は削除しないでください



function arigator(){
    const count = parseInt(document.getElementById("text1").value)
    console.log(count)
 
    const display=document.getElementById("wani")
    
    for(let i =0; i<count; i++){
     display.innerText +="💪"
    }
 }

 function changeText1(element) {
    element.textContent = "🛁水風呂";
}

function resetText1(element) {
    element.textContent = "サウナ";
}

function changeText2(element) {
    element.textContent = "🦾ベンチプレス";
}

function resetText2(element) {
    element.textContent = "筋トレ";
}

function changeText3(element) {
    element.textContent = "📖電子書籍";
}

function resetText3(element) {
    element.textContent = "読書";
}


function changeText4(element) {
    element.textContent = "A.初めての業務を行う、新人や社外応援者、転入者の技術力の底上げ";
}

function resetText4(element) {
    element.textContent = "Q:自業務で課題に感じていること";
}

function getSelectedString() {
    const selectElement = document.getElementById('stringSelect');
    const selectedText = selectElement.options[selectElement.selectedIndex].text;
    console.log(selectedText)
    if(selectedText==="初心者"){
      const hp ="https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Operators"
      const answer =document.getElementById("ans")
      answer.innerHTML =`こんにちは、${selectedText} ,<br>あなたには<a href=${hp}>ここをクリック</a>がおすすめ`
    }
}
