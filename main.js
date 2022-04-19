let target = document.querySelector("#dynamic");

// 배열에 있는 문자열 중 랜덤으로 하나를 선택하여 selectStringArr 변수에 저장하는 함수
function randomString() {
    let stringArr = ["Learn to JavaScript", "Learn to HTML", "Learn to CSS", "Learn more Language!"];
    let selectString = stringArr[Math.floor(Math.random() * stringArr.length)];
    let selectStringArr = selectString.split("");

    return selectStringArr;
}

// 한글자씩 텍스트를 출력하는 함수
function dynamic(randomArr) {
    if(randomArr.length > 0) {
        target.textContent += randomArr.shift();
        setTimeout(function() {
            dynamic(randomArr);
        }, 70);
    } else {
        setTimeout(resetTyping, 3000);
    }
}

function resetTyping() {
    target.textContent = "";
    dynamic(randomString());
}

dynamic(randomString());

// 커서 깜빡일 수 있도록 actvie 클래스를 주기적으로 추가 
function blink() {
    target.classList.toggle("active");
}
setInterval(blink, 500);