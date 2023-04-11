let menu = document.querySelector("#menu-bar");
let navbar = document.querySelector(".navbar");

let cart = [];

menu.onclick = () => {
    menu.classList.toggle("fa-times");
    navbar.classList.toggle("active");
};

let slides = document.querySelectorAll(".slide-container");
let index = 0;

function next() {
    slides[index].classList.remove("active");
    index = (index + 1) % slides.length;
    slides[index].classList.add("active");
}

function prev() {
    slides[index].classList.remove("active");
    index = (index - 1 + slides.length) % slides.length;
    slides[index].classList.add("active");
}

document.querySelectorAll(".featured-image-1").forEach((image_1) => {
    image_1.addEventListener("click", () => {
        var src = image_1.getAttribute("src");
        document.querySelector(".big-image-1").src = src;
    });
});

document.querySelectorAll(".featured-image-2").forEach((image_2) => {
    image_2.addEventListener("click", () => {
        var src = image_2.getAttribute("src");
        document.querySelector(".big-image-2").src = src;
    });
});

document.querySelectorAll(".featured-image-3").forEach((image_3) => {
    image_3.addEventListener("click", () => {
        var src = image_3.getAttribute("src");
        document.querySelector(".big-image-3").src = src;
    });
});

// let cartContainer = document.getElementById("cartrow");
// if (cart.length > 0) {
//     for (let i = 0; i < cart.length; i++) {
//         let htmlele = `
//         <div class="row" key=${cart[i].id}>
//     <div class="image-container">
//         <div class="big-image">
//             <img src=${cart[i].src}
//                 alt="" class="big-image-1">
//         </div>
//     </div>
//     <div class="content">
//         <h3>new nike airmac shoes</h3>
//         <div class="stars">
//             <i class="fa fa-star"></i>
//             <i class="fa fa-star"></i>
//             <i class="fa fa-star"></i>
//             <i class="fa fa-star"></i>
//             <i class="fa fa-star"></i>
//         </div>
//         <p>
//             Lorem ipsum dolor sit amet consectetur adipisicing elit.
//             Fugit officiis omnis quo laboriosam velit culpa ex illo, error enim nostrum?
//         </p>
//         <div class="price">$90 <span>$120</span></div>
//        </div>
//     </div>
//     `
//         console.log("htmlele", htmlele)
//         cartContainer.innerHTML = htmlele;
//     }
// } else {
//     cartContainer.innerHTML = "<h1 style=\"text-align: center;\">No Products in cart</h1>";
// }
