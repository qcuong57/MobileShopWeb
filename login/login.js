// const formLogin = document.querySelectorAll('.form-text input')
// const formLable = document.querySelectorAll('.form-text label')
var username = document.querySelector('#name')
var password = document.querySelector('#password')
var secondPassword = document.querySelector('#password2')
var form = document.querySelector('form')
var btn = document.querySelector('#btn-submit')


function showError(input, message) {
    let parent = input.parentElement;
    let small = parent.querySelector('small')
    parent.classList.add('error')
    small.innerText = message
}
// showError(username, 'Loi')

function showSuccess(input) {
    let parent = input.parentElement;
    let small = parent.querySelector('small')
    parent.classList.remove('error')
    small.innerText = ''
}

function checkEmpty(listInput) {
    let checkEmptyError = false;
    listInput.forEach(input => {
        input.value = input.value.trim()
        if (!input.value) {
            checkEmptyError = true;
            showError(input, 'Không được để trống')
        } else {
            showSuccess(input)
        }

    });
    return checkEmptyError;

}



function checkPassword(input, min, max) {
    input.value = input.value.trim();
    if (input.value.length < min) {
        showError(input, `Phải có ít nhất ${min} kí tự`)
        return true;
    }
    if (input.value.length > max) {
        showError(input, `Không được lớn hơn ${max} kí tự`)
        return true;
    }
    return false;

}

function checkPassword2(passwordInput, cfPasswordInput) {
    if (passwordInput.value != cfPasswordInput.value) {

        showError(cfPasswordInput, 'Mật khẩu không trùng khớp')
        return true;
    }
    return false;
}


form.addEventListener('submit', function(e) {
    e.preventDefault()
    let checkEmptyError1 = checkEmpty([username, password, secondPassword]);
    let checkPasswordLength = checkPassword(password, 6, 12)
    let checkSecondPassword = checkPassword2(password, secondPassword)
        // let checkLoginPasswordError = checkLoginPassword(password, data.password)
})
var admin = {
    name: "admin",
    password: "admin"
}
localStorage.setItem('Admin', JSON.stringify(admin));

let User = []

var user = localStorage.getItem("Taikhoandangky")

var json = JSON.parse(user)
for (var i = 0; i < json.length; i++) {
    User[i] = json[i]
}


function signup() {
    var name = document.getElementById("name").value;
    var password = document.getElementById("password").value;
    var secondPassword = document.getElementById("password2").value;
    if (name == null || name == "") {
        return false;
    } else if (password.length < 6) {
        return false;
    } else if (secondPassword != password) {
        return false;
    } else if (localStorage.hasOwnProperty(name)) {
        alert("Tài khoản đã tồn tại");
        return false
    }

    var date = new Date()

    var user = {
        name: name,
        password: password,
        product: [],
        date: date.getDate(),
        month: date.getMonth() + 1,
        year: date.getFullYear(),
    }

    User.push(user)
    var taikhoan = JSON.stringify(User);
    localStorage.setItem("Taikhoandangky", taikhoan);

    var json = JSON.stringify(user);
    localStorage.setItem(name, json);
    alert("Đăng ký thành công")
    window.open('./login.html');
}

function login() {
    var username = document.getElementById("name").value;
    var password = document.getElementById("password").value;
    var checkKhoa = JSON.parse(localStorage.getItem('Taikhoandangky'));
    var user = localStorage.getItem(username);
    var data = JSON.parse(user);
    let data1 = JSON.parse(localStorage.getItem('Admin'))
    if (data1.name == username && data1.password == password) {
        alert("Đăng nhập admin thành công")
        window.open('../Admin/admin.html');
    } else {
        if (username == '') {
            return false;
        } else if (!localStorage.hasOwnProperty(username)) {
            alert('Tài khoản không tồn tại')
        } else if (password != data.password) {
            alert('Mật khẩu bạn nhập chưa đúng')
        } else if (username == data.name && password == data.password) {
            alert("Đăng nhập thành công");
            localStorage.setItem('test1', JSON.stringify(data));
            localStorage.setItem("nameValue", username);
            localStorage.setItem("checkStatusLogin", true);
            window.open('../main/trangchu.html');
        }
    }
}