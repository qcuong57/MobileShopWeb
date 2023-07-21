function logoutUser() {
    localStorage.setItem("statuslogin", "false");
    document.getElementById("logout").style = "display: none";
}

if (localStorage.getItem("statuslogin")) {
    document.getElementById("login").innerHTML = localStorage.getItem("nameValue");
    document.getElementById("logout").style = "display: inline-block";
}

//cart
var modal = document.getElementById("myModal");
var btn = document.getElementById("dongy1");
var close = document.getElementsByClassName("close")[0];
var close_footer = document.getElementsByClassName("close-footer")[0];
var order = document.getElementsByClassName("order")[0];
btn.onclick = function () {
    modal.style.display = "block";
}
close.onclick = function () {
    modal.style.display = "none";
}
close_footer.onclick = function () {
    modal.style.display = "none";
}

var arrcart = []
if (localStorage.getItem("arrShopping")) {
    var json = localStorage.getItem("arrShopping")
    var json1 = JSON.parse(json)
    for (var i = 0; i < json1.length; i++) {
        arrcart[i] = json1[i]
    }
}

function shownewCart() {
    var html = '';
    if (localStorage.getItem("arrShopping")) {
        var newProduct = JSON.parse(localStorage.getItem('arrShopping'));

        const product = newProduct.map((item) => {
            html += `   
            <tr class="infoProduct_cart">
            <th>
            <img class="img__shop" src="${item.img}" style="width: 20px"></img>
            </th>
            <th class="title-th">${item.title}</th>
            <th class="priceproduct_cart">${item.price}</th>
            <th class="quantityproduct_cart"><input class="cart-quantity-input" type="number" min="1" onchange="quantity()" value="${item.quantity}" ></th>
            <th><button class="btn btn-danger" type="button" onclick= " xoasp()">Xóa</button></th>
            </tr>`;

        })
    }
    else {
        var newProduct = JSON.parse(localStorage.getItem('mainProduct'));

        const product = newProduct.map((item) => {
            html += `   
            <tr class="infoProduct_cart">
            <th>
            <img class="img__shop" src="${item.image}" style="width: 20px"></img>
            </th>
            <th class="title-th">${item.name}</th>
            <th class="priceproduct_cart">${item.price}</th>
            <th class="quantityproduct_cart"><input class="cart-quantity-input" type="number" min="1" onchange="quantity()" value="1" ></th>
            <th><button class="btn btn-danger" type="button" onclick= " xoasp()">Xóa</button></th>
            </tr>`;

        })
    }

    document.getElementById("mycart").innerHTML = html;

    countCart();

    TinhTong();

}


var img__shop = document.getElementsByClassName("img__shop")
var title_th = document.getElementsByClassName("title-th")
var price__shop = document.getElementsByClassName("priceproduct_cart")
var cart_quantity_input = document.getElementsByClassName("cart-quantity-input")

function quantity() {
    var arr = []
    for (var i = 0; i < img__shop.length; i++) {
        var shopcart = {
            img: img__shop[i].src,
            title: title_th[i].innerText,
            price: price__shop[i].innerText,
            quantity: cart_quantity_input[i].value
        }
        arr.push(shopcart)
    }
    for (var i = 0; i < arr.length; i++) {
        arrcart[i] = arr[i]
    }
    var json = JSON.stringify(arrcart)
    localStorage.setItem("arrShopping", json)
    TinhTong()
}

function countCart() {
    var infoProduct_cart = document.getElementsByClassName("infoProduct_cart")
    var numberCart = 0;
    for (var i = 0; i < infoProduct_cart.length; i++) {
        var quantity = infoProduct_cart[i].getElementsByClassName("cart-quantity-input")[0].value
        numberCart += Number(quantity);
    }
    localStorage.setItem('numberCart', numberCart);
}

function TinhTong() {
    var totalPrice = 0;
    var infoProduct_cart = document.getElementsByClassName("infoProduct_cart")
    if (infoProduct_cart.length === 0) {
        document.getElementById("newPrice").innerHTML = 0 + ' VNĐ';
    }
    var price = infoProduct_cart[0].getElementsByClassName("priceproduct_cart")[0].innerText
    for (var i = 0; i < infoProduct_cart.length; i++) {
        var price = infoProduct_cart[i].getElementsByClassName("priceproduct_cart")[0].innerText
        var quantity = infoProduct_cart[i].getElementsByClassName("cart-quantity-input")[0].value

        price = price.split(".").join("")
        price = price.replace("đ", "")
        price = parseInt(price)
        totalPrice += price * quantity
    }
    countCart();
    document.getElementById("newPrice").innerHTML = totalPrice.toLocaleString('de-DE') + ' VNĐ';
}

window.addEventListener ("change", function(){
    this.location.reload();
})

//Hàm check đăng nhập
if (localStorage.getItem('checkStatusLogin') === "true") {
    document.querySelector("#login").innerHTML = localStorage.getItem('nameValue');
    document.querySelector("#numberCart").innerHTML = "Giỏ hàng (" + localStorage.getItem('numberCart') + ")";
    document.querySelector("#login").addEventListener("mouseover", function () {
        document.querySelector("#login").innerHTML = "Đăng xuất";
    });
    document.querySelector("#login").addEventListener("mouseout", function () {
        document.querySelector("#login").innerHTML = localStorage.getItem('nameValue');
    });
    document.querySelector("#login").addEventListener("click", function () {
        localStorage.setItem('checkStatusLogin', false);
        document.querySelector("#login").setAttribute("href", "../main/trangchu.html");
        document.querySelector("#login").removeEventListener("mouseover");
        document.querySelector("#login").removeEventListener("mouseout");
    });
}

function xoasp() {
    var newProduct = JSON.parse(localStorage.getItem('arrShopping'));
    var itemIndex = 0;
    newProduct.splice(itemIndex, 1)
    localStorage.setItem('arrShopping', JSON.stringify(newProduct));
    localStorage.setItem('mainProduct', JSON.stringify(newProduct));
    shownewCart();
}

function User() {
    var existUser = JSON.parse(localStorage.getItem('mainUser'));
    if (existUser == null) existUser = [];
    var nodeThongtin = document.getElementById("id").value;
    var nodeDienthoai = document.getElementById("phone").value;
    var nodeEmail = document.getElementById("email").value;
    var nodeDiachi = document.getElementById("address").value;
    var filter1 = /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if (!filter1.test(phone.value)) {
        alert('Hay nhap so dien thoai hop le.');
        phone.focus;
        return false;
    } else if (!filter.test(email.value)) {
        alert('Hay nhap dia chi email hop le.');
        email.focus;
        return false;
    } else {
        alert("Thanh toán thành công");
    }
    //
    var date = new Date()
    var day = date.getDate()
    var month = date.getMonth() + 1
    var year = date.getFullYear()
    var hour = date.getHours()
    var minuter = date.getMinutes()
    var second = date.getSeconds()
    //
    var infor = {
        id: nodeThongtin,
        phone: nodeDienthoai,
        email: nodeEmail,
        address: nodeDiachi,
    }
    var arr = []
    var json = localStorage.getItem("arrShopping")
    var json1 = JSON.parse(json)
    for (var i = 0; i < json1.length; i++) {
        arr[i] = json1[i]
    }
    var arrthongke = []
    if (localStorage.getItem("arrThongke")) {
        var json = localStorage.getItem("arrThongke")
        var json1 = JSON.parse(json)
        for (var i = 0; i < json1.length; i++) {
            arrthongke[i] = json1[i]
        }
    }
    for(var i = 0 ; i < arr.length ; i++) {
        var product_user = {
            id : i + 1,
            code : i + 1,
            username : nodeThongtin,
            name : arr[i].title,
            soluong : arr[i].quantity,
            price : arr[i].price,
            ngaymua : day +"/" +month+"/"+year,
            giomua : hour +":"+minuter+":"+second,
            tinhtrang : false
        }
        arrthongke.push(product_user)
    }
    var json = JSON.stringify(arrthongke)
    localStorage.setItem("arrThongke",json)


    localStorage.setItem('testUser', JSON.stringify(existUser));
    existUser.push(infor);
    localStorage.setItem('mainUser', JSON.stringify(existUser));
}

