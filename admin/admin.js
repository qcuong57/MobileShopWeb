const product = [
    // { id: 1, image: "../assets/img/iPhone/iPhone-14-Pro-Max/iPhone-14-Pro-Max-purple.png", name: 'Iphone 14 Pro Max', price: 33490000, hang: 'iPhone', url: '../iPhone-14-Pro-Max/index.html' },
    // { id: 2, image: "../assets/img/iPhone/iPhone-14-Pro/iPhone-14-Pro-silver.png", name: 'Iphone 14 Pro', price: 30490000, hang: 'iPhone', url: '../iPhone-14-Pro/index.html' },
    // { id: 3, image: "../assets/img/iPhone/iPhone-14-Plus/iPhone-14-Plus-red.png", name: 'Iphone 14 Plus', price: 24990000, hang: 'iPhone', url: '../iPhone-14-Plus/index.html' },
    // { id: 4, image: "../assets/img/iPhone/iPhone-14/iPhone-14-blue.png", name: 'Iphone 14', price: 21990000, hang: 'iPhone', url: '../iPhone-14/index.html' },
    // { id: 5, image: "../assets/img/iPhone/iPhone-13-Pro-Max/iPhone-13-Pro-Max-gold.png", name: 'Iphone 13 Pro Max', price: 29490000, hang: 'iPhone', url: '../iPhone-13-Pro-Max/index.html' },
    // { id: 6, image: "../assets/img/iPhone/iPhone-13-Mini/iPhone-13-Mini-blue.png", name: 'Iphone 13 Mini', price: 17490000, hang: 'iPhone' },
    // { id: 7, image: "../assets/img/iPhone/iPhone-SE/iPhone-SE-black.png", name: 'Iphone SE', price: 9990000, hang: 'iPhone', url: '../iPhone-SE/index.html' },
    // { id: 8, image: "../assets/img/Samsung/Samsung-Galaxy-Z-Flip-4/Samsung-Galaxy-Z-Flip-4-blue.png", name: 'Samsung Galaxy Z Flip 4', price: 20990000, hang: 'Samsung', url: '../Samsung-Galaxy-Z-Flip-4/index.html' },
    // { id: 9, image: "../assets/img/Samsung/Samsung-Galaxy-Z-Fold-3/Samsung-Galaxy-Z-Fold-3-black.png", name: 'Samsung Galaxy Z Flip 3', price: 31990000, hang: 'Samsung', },
    // { id: 10, image: "../assets/img/Samsung/Samsung-Galaxy-Z-Fold-4/Samsung-Galaxy-Z-Fold-4-cream.png", name: 'Samsung Galaxy Z Fold 4', price: 37990000, hang: 'Samsung', url: '../Samsung-Galaxy-Z-Fold-4/index.html' },
    // { id: 11, image: "../assets/img/Samsung/Samsung-Galaxy-S21-FE/Samsung-Galaxy-S21-FE-purple.png", name: 'Samsung Galaxy S21 FE', price: 12990000, hang: 'Samsung', url: '../Samsung-Galaxy-S21-FE/index.html' },
    // { id: 12, image: "../assets/img/Samsung/Samsung-Galaxy-Note-10-Lite/Samsung-Galaxy-Note-10-Lite-silver.png", name: 'Samsung Galaxy Note 10 Lite', price: 10500000, hang: 'Samsung', url: '../Samsung-Galaxy-Note-10-Lite/index.html' },
    // { id: 13, image: "../assets/img/Samsung/Samsung-Galaxy-A13/Samsung-Galaxy-A13-orange.png", name: 'Samsung Galaxy A13', price: 4290000, price1: '4.290.000 VNĐ', hang: 'Samsung', url: '../Samsung-Galaxy-A13/index.html' },
    // { id: 14, image: "../assets/img/Samsung/Samsung-Galaxy-A04/Samsung-Galaxy-A04-brown.png", name: 'Samsung Galaxy A04', price: 2790000, price1: '2.790.000 VNĐ', hang: 'Samsung', url: '../Samsung-Galaxy-A04/index.html' },
    // { id: 15, image: "../assets/img/Xiaomi/Xiaomi-12T/Xiaomi-12T-blue.png", name: 'Xiaomi 12T', price: 11990000, hang: 'Xiaomi', url: '../Xiaomi-12T/index.html' },
    // { id: 16, image: "../assets/img/Xiaomi/Xiaomi-12-Pro/Xiaomi-12-Pro-purple.png", name: 'Xiaomi 12 Pro', price: 25990000, hang: 'Xiaomi', url: '../Xiaomi-12-Pro/index.html' },
    // { id: 17, image: "../assets/img/Xiaomi/Xiaomi-12/Xiaomi-12-grey.png", name: 'Xiaomi 12', price: 14490000, hang: 'Xiaomi', url: '../Xiaomi-12/index.html', },
    // { id: 18, image: "../assets/img/Xiaomi/Xiaomi-Redmi-Note-11-Pro/Xiaomi-Redmi-Note-11-Pro-white.png", name: 'Xiaomi Redmi Note 11 Pro', price: 8790000, hang: 'Xiaomi', url: '../Xiaomi-Redmi-Note-11-Pro/index.html' },
    // { id: 19, image: "../assets/img/Xiaomi/Xiaomi-11T-Pro/Xiaomi-11T-Pro-grey.png", name: 'Xiaomi 11T Pro', price: 12490000, hang: 'Xiaomi', url: '../Xiaomi-11T-Pro/index.html' },
    // { id: 20, image: "../assets/img/Xiaomi/Xiaomi-11-Lite-NE/Xiaomi-11-Lite-NE-pink.png", name: 'Xiaomi 11 Lite NE', price: 8490000, hang: 'Xiaomi', url: '../Xiaomi-11-Lite-NE/index.html' },
    // { id: 21, image: "../assets/img/Xiaomi/Xiaomi-Redmi-Note-10-Pro/Xiaomi-Redmi-Note-10-Pro-blue.png", name: 'Xiaomi Redmi Note 10 Pro', price: 7090000, hang: 'Xiaomi' },
    // { id: 22, image: "../assets/img/Oppo/Oppo-Find-X5-Pro/Oppo-Find-X5-Pro-black.png", name: 'OPPO Find X5 Pro', price: 26990000, hang: 'OPPO', url: '../Oppo-Find-X5-Pro/index.html' },
    // { id: 23, image: "../assets/img/Oppo/Oppo-Reno8-Pro/Oppo-Reno8-Pro-green.png", name: 'OPPO Reno8 Pro', price: 18490000, hang: 'OPPO', url: '../Oppo-Reno8-Pro/index.html' },
    // { id: 24, image: "../assets/img/Oppo/Oppo-Reno8/Oppo-Reno8-gold.png", name: 'OPPO Reno8', price: 13490000, hang: 'OPPO', url: '../Oppo-Reno8/index.html' },
    // { id: 25, image: "../assets/img/Oppo/Oppo-Reno7-Pro/Oppo-Reno7-Pro-green.png", name: 'OPPO Reno7 Pro', price: 14990000, hang: 'OPPO', url: '../Oppo-Reno7-Pro/index.html' },
    // { id: 26, image: "../assets/img/Oppo/Oppo-Reno6-Pro/Oppo-Reno6-Pro-grey.png", name: 'OPPO Reno 6 Pro', price: 11990000, hang: 'OPPO', url: '../Oppo-Reno6-Pro/index.html' },
    // { id: 27, image: "../assets/img/Oppo/Oppo-Reno4/Oppo-Reno4-blue.png", name: 'OPPO Reno4', price: 6490000, hang: 'OPPO', url: '../Oppo-Reno4/index.html' },
    // { id: 28, image: "../assets/img/Oppo/Oppo-A96/Oppo-A96-pink.png", name: 'OPPO A96', price: 6320000, hang: 'OPPO' },
    // { id: 29, image: "../assets/img/Asus/Asus-Zenfone-Max-Pro-M1-silver.png", name: 'ASUS Zenfone Max Pro M1', price: 3899000, hang: 'ASUS', url: '../Asus-Zenfone-Max-Pro-M1/index.html' },
    // { id: 30, image: "../assets/img/Asus/Asus-Zenfone-8-grey.png", name: 'ASUS Zenfone 8', price: 14990000, hang: 'ASUS', url: '../Asus-Zenfone-8/index.html' },
    // { id: 31, image: "../assets/img/Asus/Asus-Zenfone-7-Pro-black.png", name: 'ASUS Zenfone 7 Pro', price: 22000000, price1: '22.000.000 VNĐ', hang: 'ASUS', url: '../Asus-Zenfone-7-Pro/index.html' },
    // { id: 32, image: "../assets/img/Asus/Asus-Zenfone-7-black.png", name: 'ASUS Zenfone 7', price: 17300000, hang: 'ASUS', url: '../Asus-Zenfone-7/index.html' },
    // { id: 33, image: "../assets/img/Asus/Asus-Zenfone-6-black.png", name: 'ASUS Zenfone 6', price: 12990000, hang: 'ASUS', url: '../Asus-Zenfone-6/index.html' },
    // { id: 34, image: "../assets/img/Asus/Asus-Zenfone-5-black.png", name: 'ASUS Zenfone 5', price: 3990000, hang: 'ASUS', url: '../Asus-Zenfone-5/index.html' },
    // { id: 35, image: "../assets/img/Asus/Asus-M2-Pro/Asus-M2-Pro-blue.png", name: 'ASUS M2 Pro', price: 2350000, hang: 'ASUS' },
    // { id: 36, image: "../assets/img/Asus/Asus-M2-Pro/Asus-M2-Pro-blue.png", name: 'ASUS M2 Pro', price: 99999999, hang: 'ASUS' },

]


if (localStorage.getItem("objPut1")) {
    var ds = localStorage.getItem("objPut1")
    var json = JSON.parse(ds)
    for (var i = 0; i < json.length; i++) {
        product[i] = json[i];
    }
}

let perPage = 5; /* số sp mỗi trang*/
let currentPage = 1;
let start = 0;
let end = perPage;

var totalPages = Math.ceil(product.length / perPage);

function getCurrentPage() {
    start = (currentPage - 1) * perPage;
    end = currentPage * perPage;
}


function renderProduct() {
    let html = '';
    const content = product.map((item, index) => {
        if (index >= start && index < end) {
            html += `
        <div class="container_content--main_description--lists_content--item">
                                <div class="container_content--main_description--lists_content--id">
                                    <p>${item.id}</p>
                                </div>

                                <div class="container_content--main_description--lists_content--img">
                                    <img src="${item.image}" alt="${item.name}">
                                </div>

                                <div class="container_content--main_description--lists_content--name">
                                    <p>${item.name}</p>
                                </div>

                                <div class="container_content--main_description--lists_content--hang">
                                    <p>${item.hang}</p>
                                </div>

                                <div class="container_content--main_description--lists_content--price">
                                <p>${item.price.toLocaleString('de-DE') + ' VNĐ'}</p>
                                </div>

                                <div class="container_content--main_description--lists_content--check">
                                    <div class="kaka">
                                        
                                        <div class="test2">
                                            <button
                                                class="container_content--main_description--lists_content--check_adjust"
                                                onclick="suasp(${item.id})">
                                                <i class="fa fa-wrench"></i>
                                            </button>
                                        </div>
                                        <div class="test1">
                                            <button
                                                class="container_content--main_description--lists_content--check_delete"
                                                onclick="xoasp(${item.id})">
                                                <i class="fa fa-trash"></i>
                                            </button>
                                        </div>

                                    </div>
                                </div>

                            </div>

   `;
        }
    })
    document.getElementById('product').innerHTML = html;
}

renderProduct();


//TEST



//TEST

function dinhdang(x) {
    var dem = 0
    var j = 0
    const cham = []
    for (var i = x.length - 1; i > 0; i--) {
        cham[j] = x[i];
        dem++;
        j++;
        if (dem == 3) {
            cham = "." + cham;
            break
        }
    }
}


// function xoa(index) {
//     var newLength = objPut1.length;
//     if(index < 0) index = 0;
//     else if(index >= newLength) index = newLength - 1;
//     else 
//     for(let i = index ; i < newLength - 1 ; i++) {
//         objPut1[i] = objPut1[i+1];
//     }
//     newLength--;
// }

function themsp() {
    var objPut1 = JSON.parse(localStorage.getItem('objPut1'));
    if (objPut1 == null) objPut1 = [];
    var add = document.getElementById("add")
    var file = document.getElementById("file").files[0].name;
    var name = document.getElementById("name")
    var hang = document.getElementById("hang")
    var price = document.getElementById("price").value;

    if (add.value == "" || name.value == "" || hang.value == "" || price.value == "") {
        alert("Thiếu thông tin")
    } else {
        var testla = name.value;
        var resultTest = testla.split(' ').join('-');
        var obj = {
            id: Number(add.value),
            image: `../assets/img/${file} `,
            name: name.value,
            price: Number(price),
            hang: hang.value,
            url: `../chitiet/chitiet.html?=${resultTest}`,
        }
        objPut1.push(obj);
        localStorage.setItem('objPut1', JSON.stringify(objPut1));
        product.push(obj)
    }
    var productList = JSON.stringify(product)
    localStorage.setItem("objPut1", productList)
        //    modalSubmit.classList.remove('activeModal');
    renderProduct();
    modalPlus.classList.remove('activeModal');
    console.log(objPut1);
}

function xoasp(id) {
    if (confirm('Bạn có chắc chắn muốn xóa?')) {
        for (var i = 0; i < product.length; i++) {
            if (product[i].id == id) {
                product.splice(i, 1);
            }
        }
        for (var i = 0; i < product.length; i++) {
            product[i].id = i + 1;
        }
        localStorage.setItem("objPut1", JSON.stringify(product));
        renderProduct();
        renderPage();
    }
    var test = JSON.parse(localStorage.getItem('objPut1'));
    // for(var i = 0 ; i < test.length ; i++) {
    //     if(test[i].id === id && i === 0) {
    //         test[i+1].id = test[i+1].id - 1;
    //     }else if(test[i].id === id && i === test.length - 1) {
    //         test.splice(i,1);
    //     }else {
    //         test[i] = test[i+1];
    //     }
    // }

    localStorage.setItem('objPut1', JSON.stringify(test));
}

var modalEdit = document.getElementsByClassName("modalEdit")[0]

var edProduct = document.getElementsByClassName("container_content--main_description--lists_content--check_adjust")

var closeBtned = document.getElementsByClassName("modal_close1")[0]


function sua() {
    var objPut1 = JSON.parse(localStorage.getItem('objPut1'));
    if (objPut1 == null) objPut1 = [];
    var add1 = document.getElementById("add1")
    add1.readOnly = false;
    var file1 = document.getElementById('file1').files[0].name;
    var name1 = document.getElementById("name1")
    var hang1 = document.getElementById("hang1")
    var price1 = document.getElementById("price1")
    if (add1.value == "" || name1.value == "" || hang1.value == "" || price1.value == "") {
        alert("Thiếu thông tin")
    } else {
        var testla = name1.value;
        var resultTest1 = testla.split(' ').join('-');
        var obj = {
            id: Number(add1.value),
            image: `../assets/img/${file1}`,
            name: name1.value,
            price: Number(price1.value),
            hang: hang1.value,
            url: `../chitiet/chitiet.html?=${resultTest1}`,
        }
        console.log(obj.id);
        var test = JSON.parse(localStorage.getItem('objPut1'));
        test[obj.id - 1] = obj;
        localStorage.setItem('objPut1', JSON.stringify(test));
        product[add1.value - 1] = obj
        modalEdit.classList.remove('activeModal')
    }
    var productList = JSON.stringify(product)
    localStorage.setItem("objPut1", productList)
}



function suasp(x) {
    modalEdit.classList.add('activeModal')
    var add1 = document.getElementById('add1')
    add1.value = product[x - 1].id;
    var name1 = document.getElementById('name1')
    name1.value = product[x - 1].name
    var newHang1 = document.getElementById('hang1');
    newHang1.value = product[x - 1].hang;
    var price1 = document.getElementById('price1')
    price1.value = product[x - 1].price
    var file1 = document.getElementById('file1');
    file1 = product[x - 1].image;
    document.getElementById('imgTest').src = file1;
}


//TEST

function renderPage() {
    let html = '';
    html += `
        <li class="pagination-item active">
            <span>${1}</span>
        </li>
`
    for (let i = 2; i <= totalPages; i++) {
        html += `
        <li class="pagination-item">
            <span>${i}</span>
        </li>
    `;
    }
    document.getElementById('eachPage').innerHTML = html;
}

renderPage();

function changePagePagination() {
    const currentPages = document.querySelectorAll('.pagination-item');
    for (let i = 0; i < currentPages.length; i++) {
        currentPages[i].addEventListener('click', () => {
            let value = i + 1;
            currentPage = value;
            getCurrentPage(currentPage);
            renderProduct();
        })
    }
}

changePagePagination();

var nextProduct = document.querySelector('.pagination_next');
var backProduct = document.querySelector('.pagination_back');
var items = document.querySelectorAll('.pagination_item');

nextProduct.onclick = () => {
    currentPage++;
    if (currentPage > totalPages) {
        currentPage = totalPages;
    }
    backProduct.classList.remove('activeButton');
    if (currentPage == totalPages) {
        nextProduct.classList.add('activeButton');
    }
    getCurrentPage(currentPage);

    renderProduct();
}

backProduct.onclick = () => {
    currentPage--;
    if (currentPage <= 1) {
        currentPage = 1;
    }
    nextProduct.classList.remove('activeButton');
    if (currentPage == 1) {
        backProduct.classList.add('activeButton');
    }
    getCurrentPage(currentPage);

    renderProduct();
}

/* Modal */
var modalPlus = document.querySelector('.modalPlus');
var addProduct = document.querySelector('.content');
var closeBtn = document.querySelector('.modal_close');


addProduct.onclick = () => {
    modalPlus.classList.add('activeModal');
    var add = document.getElementById("add")
    add.value = product.length + 1
}

closeBtn.onclick = () => {
    modalPlus.classList.remove('activeModal');
}

closeBtned.onclick = () => {
    modalEdit.classList.remove('activeModal');
}

var test = document.querySelectorAll('.container_content--main_description--lists_content--check_adjust');
var currentPages = document.querySelectorAll('.pagination-item');
currentPages.forEach((item, index) => {
    item.onclick = () => {
        document.querySelector('.pagination-item.active').classList.remove('active');
        item.classList.add('active');
    }
})

function inner() {
    let html = '';
    html += `
<div class="header_icon--afterLogin">
            <p class="header_icon--admin">Xin chào, Admin</p>
            <a href="../main/trangchu.html" class="header_icon--logout">Đăng xuất</a>
        </div>
`
    document.getElementById('loginForm').innerHTML = html;
}
inner();

var logOutAdmin = document.querySelector('.header_icon--logout');
logOutAdmin.onclick = () => {
    let text = "Bạn có chắc chắn muốn đăng xuất admin?";
    if (confirm(text)) {
        return true;
    } else {
        return false;
    }
}

const currentList = document.querySelectorAll('.container_projects--item');
const currentItem = document.querySelectorAll('.container_content');
console.log(currentItem);
currentList.forEach((item, index) => {
    item.onclick = () => {
        if (index == 0) {
            document.querySelector('.container_content.activeContent').classList.remove('activeContent');
            currentItem[0].classList.add('activeContent');
        } else if (index == 1) {
            document.querySelector('.container_content.activeContent').classList.remove('activeContent');
            currentItem[1].classList.add('activeContent');
        } else if (index == 2) {
            document.querySelector('.container_content.activeContent').classList.remove('activeContent');
            currentItem[2].classList.add('activeContent');
        }
    }
})

//TEST
var user = localStorage.getItem("Taikhoandangky")

var json = JSON.parse(user)
console.log(json)
var dangky = []
for (var i = 0; i < json.length; i++) {
    dangky[i] = json[i]
}

function renderUser() {
    let html = '';
    const content = dangky.map((item, index) => {
        if (index >= start && index < end) {
            html += `
                                <div class="container_content--main_description--lists_content--item">
                                    <div class="container_content--main_description--lists_content--id">
                                        <p>${index + 1}</p>
                                    </div>

                                    <div class="container_content--main_description--lists_content--fullname">
                                         <p>${item.name}</p>  
                                    </div>

                                    <div class="container_content--main_description--lists_content--name">
                                        <p>${item.name}</p>
                                    </div>

                                    <div class="container_content--main_description--lists_content--password">
                                        <p>${item.password}</p>
                                    </div>

                                    <div class="container_content--main_description--lists_content--date">
                                    <p>${item.date}/${item.month}/${item.year}</p>
                                    </div>


                                </div>

       `;
        }
    })
    document.getElementById('user').innerHTML = html;
}
renderUser();

var totalPagesUser = Math.ceil(dangky.length / perPage);

function renderPageUser() {
    let html = '';
    html += `
            <li class="pagination-item active">
                <span>${1}</span>
            </li>
    `
    for (let i = 2; i <= totalPagesUser; i++) {
        html += `
            <li class="pagination-item">
                <span>${i}</span>
            </li>
        `;
    }
    document.getElementById('eachPageUser').innerHTML = html;
}
renderPageUser();

function xoaUser() {

}