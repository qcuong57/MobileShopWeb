var buySubmit = document.querySelector('.buySubmit');
var numberProduct = document.querySelector('.numberProduct');

function buyProduct() {
    // numberProduct.classList.add('active');
    // setTimeout(() => {
    //     numberProduct.classList.remove('active');
    // },1000)
    checkStatusLogin();
}

function logoutUser(){
    localStorage.setItem("statuslogin", "false");
    document.getElementById("logout").style = "display: none";
}

if (localStorage.getItem("statuslogin") === "true") {
    document.getElementById("login").innerHTML = localStorage.getItem("nameValue");
    document.getElementById("logout").style = "display: inline-block";
}

var countCart = 0;
function buyProduct(){
    if (localStorage.getItem("statuslogin") === "true") {
        countCart++;
        localStorage.setItem('sl',JSON.stringify())
        onclickAddCart();
        document.querySelector("#numberCart").innerHTML = "Giỏ hàng (" + Number(countCart) + ")";
    } else {
        alert('Vui lòng đăng nhập để được mua hàng');
    }
}

function logoutUser(){
    localStorage.setItem("statuslogin", "false");
    document.getElementById("logout").style = "display: none";
}

if (localStorage.getItem("statuslogin") === "true") {
    document.getElementById("login").innerHTML = localStorage.getItem("nameValue");
    document.getElementById("logout").style = "display: inline-block";
}

const arrProduct = []
if (localStorage.getItem("objPut1")) {
    var json = localStorage.getItem("objPut1")
    var json1 = JSON.parse(json)
    for (var e = 0; e < json1.length; e++) {
        arrProduct[e] = json1[e]
    }
}
var url = window.location.href
var temp = url.split("?=")
// temp = temp[1]
console.log(temp[1]);
console.log(arrProduct);
var content = document.getElementsByClassName("content")[0]
console.log(content);
var test = 0;
for(let i = 0 ; i< arrProduct.length ; i++) {
    arrProduct[i].name = arrProduct[i].name.split(' ').join('-');
    if(arrProduct[i].name === temp[1]) {
        test = i;
        break;
    }
}
console.log(arrProduct);
// console.log(test);
// content.innerText = "Img: "+arrProduct[test].image+"Ten: "+arrProduct[test].name+"Gia: "+arrProduct[test].price;
content.innerHTML = `
<div class="phone_image">
<img id="picture" src="${arrProduct[test].image}" alt="">
</div>

<div class="phone_price">
<h1 id="name">${arrProduct[test].name.split('-').join(' ')}</h1>
<h2>Hàng có sẵn</h2>
<h3 id="priceTag">${arrProduct[test].price.toLocaleString('de-DE') + ' VNĐ'}</h3>
<h4>Chọn dung lượng</h4>
<ul>
    <li class="storage" id="storage1" onclick="storageButton1()" style="border: 2px solid #0055d4;">256GB</li>
</ul>
<h5>Màu</h5>
<ul>
    <li class="color" id="color1" onclick="colorButton1()" style="background-color: #e0daca; cursor: pointer; border: 2px solid #0055d4;"></li>
</ul>
<button class="buySubmit" onclick="buyProduct()">Mua ngay</button>
<ul>
    <li class="profit">
        <span class="iconify" data-icon="akar-icons:shipping-box-v1"></span> Bộ sản phẩm gồm: Cáp Type C, Cây lấy sim, Hộp, Sách hướng dẫn
    </li>
    <li class="profit">
        <span class="iconify" data-icon="akar-icons:arrow-cycle"></span> Hư gì đổi nấy 12 tháng tại 3453 siêu thị trên toàn quốc
    </li>
    <li class="profit">
        <span class="iconify" data-icon="akar-icons:shield"></span> Bảo hành chính hãng 1 năm
    </li>
    <li class="profit">
        <span class="iconify" data-icon="bi:truck"></span> Giao hàng nhanh toàn quốc
    </li>
</ul>
</div> 
`
if (localStorage.getItem('checkStatusLogin') === "true"){
    document.querySelector("#login").innerHTML = localStorage.getItem('nameValue');
    document.querySelector("#numberCart").innerHTML = "Giỏ hàng (" + localStorage.getItem('numberCart') + ")";
    document.querySelector("#login").addEventListener("mouseover", function(){
        document.querySelector("#login").innerHTML = "Đăng xuất";
    });
    document.querySelector("#login").addEventListener("mouseout", function(){
        document.querySelector("#login").innerHTML = localStorage.getItem('nameValue');
    });
    document.querySelector("#login").addEventListener("click", function(){
        localStorage.setItem('checkStatusLogin', false);
        document.querySelector("#login").setAttribute("href", "../main/trangchu.html");
        document.querySelector("#login").removeEventListener("mouseover");
        document.querySelector("#login").removeEventListener("mouseout");
    });
}


