const product = [

]

let j = 0;
//TEST
if (localStorage.getItem("objPut1")){
    var ds = localStorage.getItem("objPut1")
    var json = JSON.parse(ds)
    for (var i=0;i<json.length;i++) {  
        if (json[i].hang == "OPPO") {
            product[j++] = json[i]      
        }
    }
}

let perPage = 6; /* số sp mỗi trang*/
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
        <li class="container_productbox-item">
       <a href="${item.url}" class="container_productbox-item-link">
           <label for="">Mới</label>
           <div class="container_productbox-item-link--img">
               <img src="${item.image}" alt="">
           </div>
           <div class="container_productbox-item-link-name">
               <h3>${item.name}</h3>
           </div>

           <div class="container_productbox-item-link-price">
                <span>${item.price.toLocaleString('de-DE') + ' VNĐ'}</span>
           </div>
           
       </a>
   </li>
        `;
        }
    })
    document.getElementById('product').innerHTML = html;
}

renderProduct();

function renderPage() {
    let html = '';
    html += `
    <li href="" class="pagination-item">
     <span class="pagination-item_number activePg">1</span>
    </li>
    `
    for (let i = 2; i <= totalPages; i++) {
        html += `
            <li href="" class="pagination-item">
                <span class="pagination-item_number">${i}</span>
            </li>
        `;
    }
    document.getElementById('eachPage').innerHTML = html;
}

renderPage();

/* Underline page */
var listPg = document.querySelectorAll('.pagination-item_number');
listPg.forEach((item) => {
    item.onclick = () => {
        document.querySelector('.pagination-item_number.activePg').classList.remove('activePg');
        item.classList.add('activePg');
        changePage();
    }
})

function changePage() {
    const currentPages = document.querySelectorAll('.pagination-item');
    //console.log(currentPage); // lấy ra số pagination avalable
    for (let i = 0; i < currentPages.length; i++) {
        currentPages[i].addEventListener('click', () => {
            let value = i + 1;
            currentPage = value;
            getCurrentPage(currentPage);
            renderProduct();
        })
    }
}

changePage();

/* Price 1*/
let html = '';
var test = document.querySelector('.header_price--item-price1');
test.addEventListener('click', testcaine);

function testcaine() {
    test.classList.add('activeCai');
    test1.classList.remove('activeCai');

    const content = product.map((item, index) => {
        if (item.price >= 7000000 && item.price <= 25000000) {
            html += `
            <li class="container_productbox-item">
           <a href="" class="container_productbox-item-link">
               <label for="">Mới</label>
               <div class="container_productbox-item-link--img">
                   <img src="${item.image}" alt="">
               </div>
               <div class="container_productbox-item-link-name">
                   <h3>${item.name}</h3>
               </div>

               <div class="container_productbox-item-link-price">
                   <span>${item.price.toLocaleString('de-DE') + ' VNĐ'}</span>
               </div>

           </a>
       </li>
            `;
    }
})

html1 = '';
document.getElementById('eachPage').innerHTML = '';
document.getElementById('product').innerHTML = html1;
document.getElementById('product').innerHTML = html;
}

/* Price 2*/
var test1 = document.querySelector('.header_price--item-price2');
test1.addEventListener('click', testcainhe);
let html1 = '';

function testcainhe() {
    test.classList.remove('activeCai')
    test1.classList.add('activeCai');

    const content = product.map((item1, index) => {
        if (item1.price > 25000000) {
            html1 += `
            <li class="container_productbox-item">
           <a href="" class="container_productbox-item-link">
               <label for="">Mới</label>
               <div class="container_productbox-item-link--img">
                   <img src="${item1.image}" alt="">
               </div>
               <div class="container_productbox-item-link-name">
                   <h3>${item1.name}</h3>
               </div>

               <div class="container_productbox-item-link-price">
                   <span>${item1.price.toLocaleString('de-DE') + ' VNĐ'}</span>
               </div>

           </a>
       </li>
            `;
    }
})
html = '';
document.getElementById('eachPage').innerHTML = '';
document.getElementById('product').innerHTML = html;
document.getElementById('product').innerHTML = html1;
}

//Hàm check đăng nhập
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

