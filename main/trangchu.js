/* Product */
const productIphone = [

]

const productSamsung = [

]

const productXiaomi = [

]


const productOppo = [

]


const productASUS = [

]

let j = 0;
//TEST
if (localStorage.getItem("objPut1")) {
    var ds = localStorage.getItem("objPut1")
    var json = JSON.parse(ds)
    var demi = 0,
        demx = 0,
        dema = 0,
        demo = 0,
        dems = 0
    for (var k = 0; k < json.length; k++) {

        if (json[k].hang == "ASUS") {
            productASUS[j++] = json[k]
            dema++
        }
        if (dema == 6) break
    }

    for (var k = 0; k < json.length; k++) {
        if (json[k].hang == "iPhone") {
            productIphone[j++] = json[k]
            demi++
        }
        if (demi == 6) break
    }

    for (var k = 0; k < json.length; k++) {
        if (json[k].hang == "Samsung") {
            productSamsung[j++] = json[k]
            dems++
        }
        if (dems == 6) break
    }

    for (var k = 0; k < json.length; k++) {
        if (json[k].hang == "Xiaomi") {
            productXiaomi[j++] = json[k]
            demx++
        }
        if (demx == 6) break
    }

    for (var k = 0; k < json.length; k++) {
        if (json[k].hang == "OPPO") {
            productOppo[j++] = json[k]
            demo++
        }
        if (demo == 6) break
    }
}

let items = document.querySelectorAll('.content_lists-items');

document.onscroll = (e) => {
    items.forEach((item) => {
        if (item.offsetTop - window.screenY < 3500) {
            item.classList.add('active');
        }
    })
}

function renderProduct() {
    /* Iphone */
    let htmlIphone = '';
    const iPhoneProduct = productIphone.map((item, index) => {
        htmlIphone += `
        <a href="${item.url}" class="content_lists-item-product content_lists-item-product-1 mt-32">
            <div class="content_list-item-product-1 ">
                <header>Mới</header>
                <div class="content_list-item-product-1-detail">
                    <img src="${item.image}" alt="">
                    <div class="product_header mt-32">
                        <h3>${item.name}</h3>
                    </div>
                    <div class="product_footer mt-16">
                        <span>${item.price.toLocaleString('de-DE') + ' VNĐ'}</span>
                    </div>
                </div>
            </div>
        </a>
               `
        document.getElementById('iPhone').innerHTML = htmlIphone;
    })

    /* Samsung*/
    let htmlSamsung = '';
    const samsungProduct = productSamsung.map((item, index) => {
        htmlSamsung += `
        <a href="${item.url}" class="content_lists-item-product content_lists-item-product-1 mt-32">
            <div class="content_list-item-product-1">
                <header>Mới</header>
                <div class="content_list-item-product-1-detail">
                    <img src="${item.image}" alt="">
                    <div class="product_header mt-32">
                        <h3>${item.name}</h3>
                    </div>
                    <div class="product_footer mt-16">
                        <span>${item.price.toLocaleString('de-DE') + ' VNĐ'}</span>
                    </div>
                </div>
            </div>
        </a>
               `
        document.getElementById('Samsung').innerHTML = htmlSamsung;
    })

    /* Xiaomi */
    let htmlXiaomi = '';
    const XiaomiProduct = productXiaomi.map((item, index) => {
        htmlXiaomi += `
        <a href="${item.url}" class="content_lists-item-product content_lists-item-product-1 mt-32">
            <div class="content_list-item-product-1">
                <header>Mới</header>
                <div class="content_list-item-product-1-detail">
                    <img src="${item.image}" alt="">
                    <div class="product_header mt-32">
                        <h3>${item.name}</h3>
                    </div>
                    <div class="product_footer mt-16">
                        <span>${item.price.toLocaleString('de-DE') + ' VNĐ'}</span>
                    </div>
                </div>
            </div>
        </a>
               `
        document.getElementById('Xiaomi').innerHTML = htmlXiaomi;
    })

    /* Oppo */
    let htmlOppo = '';
    const OppoProduct = productOppo.map((item, index) => {
        htmlOppo += `
        <a href="${item.url}" class="content_lists-item-product content_lists-item-product-1 mt-32">
            <div class="content_list-item-product-1">
                <header>Mới</header>
                <div class="content_list-item-product-1-detail">
                    <img src="${item.image}" alt="">
                    <div class="product_header mt-32">
                        <h3>${item.name}</h3>
                    </div>
                    <div class="product_footer mt-16">
                        <span>${item.price.toLocaleString('de-DE') + ' VNĐ'}</span>
                    </div>
                </div>
            </div>
        </a>
               `
        document.getElementById('Oppo').innerHTML = htmlOppo;
    })

    /* Asus */
    let htmlAsus = '';
    const AsusProduct = productASUS.map((item, index) => {
        htmlAsus += `
        <a href="${item.url}" class="content_lists-item-product content_lists-item-product-1 mt-32">
            <div class="content_list-item-product-1">
                <header>Mới</header>
                <div class="content_list-item-product-1-detail">
                    <img src="${item.image}" alt="">
                    <div class="product_header mt-32">
                        <h3>${item.name}</h3>
                    </div>
                    <div class="product_footer mt-16">
                        <span>${item.price.toLocaleString('de-DE') + ' VNĐ'}</span>
                    </div>
                </div>
            </div>
        </a>
               `
        document.getElementById('Asus').innerHTML = htmlAsus;
    })
}

renderProduct();

var result = JSON.parse(localStorage.getItem('objPut1'));
var listItem = document.querySelector('.content_list');
var listItem1 = document.querySelector('.content_lists');
var search = document.querySelector('.content_search');
let tong = 0;
let listProduct = [];
let arr = new Array();
var inputValue = document.getElementById('test1');

function searchProduct() {
    let idProduct = 0;
    inputValue.addEventListener("keypress", (e) => {
        arr = [];
        if (e.key == "Enter") {
            e.preventDefault();
            search.style.display = "block";
            let htmlKaka = '';
            const product = result.map((item, index) => {
                    if (!item.name.toLowerCase().indexOf(inputValue.value.toLowerCase())) {
                        idProduct++;
                        var product = {
                                index: idProduct,
                                image: item.image,
                                name: item.name,
                                price: item.price.toLocaleString('de-DE') + ' VNĐ',
                            }
                            // console.log(product);
                        listProduct.push(product);

                        listItem.style.display = "none";
                        listItem1.classList.add('itemSearch')
                        htmlKaka += `
                    <a href="${item.url}" class="content_lists-item-product content_lists-item-product-1 mt-32">
                <div class="content_list-item-product-1">
                    <header>Mới</header>
                    <div class="content_list-item-product-1-detail">
                        <img src="${item.image}" alt="">
                        <div class="product_header mt-32">
                            <h3>${item.name}</h3>
                        </div>
                        <div class="product_footer mt-16">
                            <span>${item.price.toLocaleString('de-DE') + ' VNĐ'}</span>
                        </div>
                    </div>
                </div>
            </a>
                    `
                            // tong++;
                    }
                })
                // console.log(listProduct);
            for (let i = 0; i < listProduct.length; i++) {
                arr.push(listProduct[i]);
            }
            listProduct = [];
            idProduct = 0;
            document.getElementById('search').innerHTML = htmlKaka;
        }
    })
}

function checkPrice(checkPriceProduct) {
    var priceValue = checkPriceProduct.value;
    switch (priceValue) {
        case "default":
            break;
        case "increase":
            for (let i = 0; i < arr.length; i++) {
                for (let j = i + 1; j < arr.length; j++) {
                    if (arr[i].price > arr[j].price) {
                        var temp = arr[i];
                        arr[i] = arr[j];
                        arr[j] = temp;
                    }
                }
            }
            let htmlIncrease = '';
            const productIncrease = arr.map((item, index) => {
                htmlIncrease += `
                    <a href="${item.url}" class="content_lists-item-product content_lists-item-product-1 mt-32">
                    <div class="content_list-item-product-1">
                        <header>Mới</header>
                        <div class="content_list-item-product-1-detail">
                            <img src="${item.image}" alt="">
                            <div class="product_header mt-32">
                                <h3>${item.name}</h3>
                            </div>
                            <div class="product_footer mt-16">
                                <span>${item.price.toLocaleString('de-DE')}</span>
                            </div>
                        </div>
                    </div>
                </a>
                    `
            })
            document.getElementById('search').innerHTML = htmlIncrease;
            break;
        case "decrease":
            for (let i = 0; i < arr.length; i++) {
                for (let j = i + 1; j < arr.length; j++) {
                    if (arr[i].price < arr[j].price) {
                        var temp = arr[i];
                        arr[i] = arr[j];
                        arr[j] = temp;
                    }
                }
            }
            let htmlDecrease = '';
            const productDecrease = arr.map((item, index) => {
                htmlDecrease += `
                    <a href="${item.url}" class="content_lists-item-product content_lists-item-product-1 mt-32">
                    <div class="content_list-item-product-1">
                        <header>Mới</header>
                        <div class="content_list-item-product-1-detail">
                            <img src="${item.image}" alt="">
                            <div class="product_header mt-32">
                                <h3>${item.name}</h3>
                            </div>
                            <div class="product_footer mt-16">
                                <span>${item.price.toLocaleString('de-DE')}</span>
                            </div>
                        </div>
                    </div>
                </a>
                    `
            })
            document.getElementById('search').innerHTML = htmlDecrease;
            break;
    }
}

searchProduct();

/* Animation Slide */
var images = document.querySelectorAll('.kakahihi');
var slider = document.querySelector('.lamnen');

let i = 1;
setInterval(() => {
    const image = images[i];

    document.querySelector('.kakahihi.active').classList.remove('active');
    image.classList.add('active');

    const widthItem = slider.offsetWidth;
    slider.scrollLeft += widthItem;

    if (slider.scrollLeft >= 2350) {
        slider.scrollLeft = 0;
    }

    i++;
    if (i == images.length) i = 0;
}, 3000)

let y = 1;

function next() {
    const image = images[y];

    const widthItem = slider.offsetWidth;
    slider.scrollLeft += widthItem;

    if (slider.scrollLeft >= 2350) {
        slider.scrollLeft = 0;
    }

    document.querySelector('.kakahihi.active').classList.remove('active');
    image.classList.add('active');

    y++;

    if (y == images.length) y = 0;
}

let z = 1;

function back() {
    const image = images[z];

    const widthItem = slider.offsetWidth;
    slider.scrollLeft -= widthItem;

    if (slider.scrollLeft <= 0) {
        slider.scrollLeft = 2400;
    }

    document.querySelector('.kakahihi.active').classList.remove('active');
    image.classList.add('active');

    z--;

    if (z == images.length) z = 0;
}

var nextButton = document.querySelectorAll(".content_lists-items--next");
var backButton = document.querySelectorAll('.content_lists-items--prev');
var container = document.querySelectorAll('.content_lists-container');

nextButton.forEach((item, index) => {
    item.onclick = () => {
        const widthItem = container[index].offsetWidth;
        container[index].scrollLeft += widthItem;
    }
})

backButton.forEach((item, index) => {
    item.onclick = () => {
        const widthItem = container[index].offsetWidth;
        container[index].scrollLeft -= widthItem;
    }
})



//Hàm check đăng nhập
if (localStorage.getItem('checkStatusLogin') === "true") {
    document.querySelector("#login").innerHTML = localStorage.getItem('nameValue');
    document.querySelector("#numberCart").innerHTML = "Giỏ hàng (" + localStorage.getItem('numberCart') + ")";
    document.querySelector("#login").addEventListener("mouseover", function() {
        document.querySelector("#login").innerHTML = "Đăng xuất";
    });
    document.querySelector("#login").addEventListener("mouseout", function() {
        document.querySelector("#login").innerHTML = localStorage.getItem('nameValue');
    });
    document.querySelector("#login").addEventListener("click", function() {
        localStorage.setItem('checkStatusLogin', false);
        document.querySelector("#login").setAttribute("href", "../main/trangchu.html");
        document.querySelector("#login").removeEventListener("mouseover");
        document.querySelector("#login").removeEventListener("mouseout");
    });
}

window.addEventListener("load", countCart());
document.querySelector("#header_logo").addEventListener("click", countCart());

function buyProduct() {
    var name = JSON.parse(localStorage.getItem(name))
    if (localStorage.getItem("nameValue") == name) {
        alert("Vui lòng đăng nhập để được mua hàng");
    } else {
        //Redirect to buy product
        onclickAddCart();
        buyProduct11();
    }
}

function checkSP(x) {
    let vitri = -1;
    for (let i = 0; i < existLocal.length; i++) {
        if (existLocalp[i].name == x) {
            vitri = i;
            break;
        }
    }
}


function onclickAddCart() {
    var existLocal = JSON.parse(localStorage.getItem('mainProduct'));
    //
    var arr = []
    if (localStorage.getItem("arrShopping")) {
        var json = localStorage.getItem("arrShopping")
        var json1 = JSON.parse(json)
        for (var i = 0; i < json1.length; i++) {
            arr[i] = json1[i]
        }
    }
    //

    if (existLocal == null) existLocal = [];
    var nodeHinhAnh = document.getElementById("picture").src;
    var nodeTen = document.getElementById("name").innerText;
    var nodeTien = document.getElementById("priceTag").innerText;

    var sanPham = {
        image: nodeHinhAnh,
        name: nodeTen,
        price: nodeTien,
        soLuong: 1,
    }

    //
    var sp1 = {
            img: nodeHinhAnh,
            title: nodeTen,
            price: nodeTien,
            quantity: 1,
        }
        //

    alert('Đã thêm vào giỏ hàng')
    existLocal.push(sanPham);
    localStorage.setItem('test1', JSON.stringify(existLocal));
    localStorage.setItem('mainProduct', JSON.stringify(existLocal));



    arr.push(sp1)
    var json = JSON.stringify(arr)
    localStorage.setItem('arrShopping', json)


    var sanPhamNew = {
        image: nodeHinhAnh,
        name: nodeTen,
        price: nodeTien,
        soLuong: 1,
    }



    var testcai = JSON.parse(localStorage.getItem(localStorage.getItem('nameValue')));
    testcai.product.push(sanPhamNew);
    localStorage.setItem(localStorage.getItem('nameValue'), JSON.stringify(testcai))
}

var buySubmit = document.querySelector('.buySubmit');
var numberProduct = document.querySelector('.numberProduct');

function buyProduct11() {
    numberProduct.classList.add('active');
    setTimeout(() => {
        numberProduct.classList.remove('active');
    }, 1000)
}