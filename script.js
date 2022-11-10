let passwordQuery = document.querySelector('.editable input');
let upper = document.querySelector('#upper');
let lower = document.querySelector('#lower');
let number = document.querySelector('#number');
let symbol = document.querySelector('#symbol');
var upperPst = lowerPst = numberPst = symbolPst = false;

passwordQuery.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        document.querySelector('.input .submit').click();
    }
});

function showPassword() {
    var view = document.querySelector('#password-view');
    if (passwordQuery.type == 'password') {
        passwordQuery.type = 'text';
        view.innerHTML = '<i class="fa-solid fa-unlock"></i>';
    } else {
        passwordQuery.type = 'password';
        view.innerHTML = '<i class="fa-solid fa-lock fa-1x"></i>';
    }
}

function resetIcon(icon) {
    switch (icon) {
        case 'upper':
            upper.innerHTML = '&cross;';
            upper.style.color = '#e33f44';
            upperPst = false;
            break;
        case 'lower':
            lower.innerHTML = '&cross;';
            lower.style.color = '#e33f44';
            lowerPst = false;
            break;
        case 'number':
            number.innerHTML = '&cross;';
            number.style.color = '#e33f44';
            numberPst = false;
            break;
        case 'symbol':
            symbol.innerHTML = '&cross;';
            symbol.style.color = '#e33f44';
            symbolPst = false;
            break;
    }
}

function checkCharacters() {
    var password = passwordQuery.value;
    var length = document.querySelector('.characters div span');

    length.innerText = password.length;
    if (/[A-Z]/.test(password)) {
        upper.innerHTML = '&check;'
        upper.style.color = '#3fb34e';
        upperPst = true;
    } else resetIcon("upper");
    if (/[a-z]/.test(password)) {
        lower.innerHTML = '&check;'
        lower.style.color = '#3fb34e';
        lowerPst = true;
    } else resetIcon("lower");
    if (/[0-9]/.test(password)) {
        number.innerHTML = '&check;'
        number.style.color = '#3fb34e';
        numberPst = true;
    } else resetIcon("number");
    if (/[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(password)) {
        symbol.innerHTML = '&check;'
        symbol.style.color = '#3fb34e';
        symbolPst = true;
    } else resetIcon("symbol");

}

function colorIndicator(num) {
    var red = document.querySelector('#red');
    var yellow = document.querySelector('#yellow');
    var green = document.querySelector('#green');
    red.style.backgroundColor = 'grey';
    yellow.style.backgroundColor = 'grey';
    green.style.backgroundColor = 'grey';
    if (num >= 1)
        red.style.backgroundColor = '#e84445';
    if (num >= 2)
        yellow.style.backgroundColor = '#ffc955';
    if (num == 3)
        green.style.backgroundColor = '#3fb34e';
}

function submitData() {
    var password = passwordQuery.value.length;
    var duration = document.querySelector('.duration div h2');
    var poolSize = 0, noOfGuess = 1000000;
    if (upperPst) poolSize += 26;
    if (lowerPst) poolSize += 26;
    if (numberPst) poolSize += 10;
    if (symbolPst) poolSize += 32;

    if (password == 0) {
        window.alert("Enter a valid password");
        return;
    };

    var entropy = Math.round(password * Math.log2(poolSize));
    var time = Math.round(Math.pow(2, entropy) / noOfGuess);
    var temp, string = '';
    if (Math.round(time / (31536000)) > 0) {
        temp = Math.round(time / (31536000));
        string = temp + (temp == 1 ? " year" : " years");
    }
    else if (Math.round(time / (86400)) > 0) {
        temp = Math.round(time / (86400));
        string = temp + (temp == 1 ? " day" : " days");
    }
    else if (Math.round(time / (3600)) > 0) {
        temp = Math.round(time / (3600));
        string = temp + (temp == 1 ? " hour" : " hours");
    }
    else if (Math.round(time / 60) > 0) {
        temp = Math.round(time / 60);
        string = temp + (temp == 1 ? " minute" : " minutes");
    }
    else string = time + (time < 1 ? " second" : " seconds");
    duration.innerText = string;

    if ((upperPst && lowerPst && numberPst && symbolPst && (password > 7)) || Math.round(time / (31536000)) > 0) {
        duration.style.backgroundColor = '#3fb34e';
        colorIndicator(3);
    }
    else if ((upperPst && lowerPst || numberPst && symbolPst && (password > 5)) || Math.round(time / (86400)) > 0) {
        duration.style.backgroundColor = '#ffc955';
        colorIndicator(2);
    }
    else {
        duration.style.backgroundColor = '#e84445';
        colorIndicator(1);
    }
}