document.getElementsByClassName("hamb")[0].addEventListener("click", () => {
  if (document.getElementById("side-menu").checked == false) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "";
  }
});

const arr = document.querySelectorAll(".navigation a");

for (let i = 0; i < arr.length; i++) {
  const element = arr[i];

  element.addEventListener("click", () => {
    document.body.style.overflow = "";
  });
}

function isTouchDevice() {
  return (
    "ontouchstart" in window ||
    navigator.maxTouchPoints > 0 ||
    navigator.msMaxTouchPoints > 0
  );
}

if (isTouchDevice()) {
  document
    .getElementsByClassName("js-mega-menu-click")[0]
    .addEventListener("click", () => {
      document
        .getElementsByClassName("mega-menu__wrapper")[0]
        .classList.toggle("opened");
    });
}

// for (let i = 1; i < 21; i++) {
//   const count = i;

//   var html = 
//   `<div class="product__card">
//     <div class="glide product-slider">
//       <div class="glide__track" data-glide-el="track">
//         <ul class="glide__slides">
//           <li class="glide__slide product-slider__slide">
//             <div class="glide-card">
//               <img
//                 src="/public/images/women/tops/model `+count+` (a).jpeg"
//                 alt="image"
//               />
//             </div>
//           </li>
//           <li class="glide__slide product-slider__slide">
//             <div class="glide-card">
//               <img
//                 src="/public/images/women/tops/model `+count+` (b).jpeg"
//                 alt="image"
//               />
//             </div>
//           </li>
//           <li class="glide__slide product-slider__slide">
//             <div class="glide-card">
//               <img
//                 src="/public/images/women/tops/model `+count+` (c).jpeg"
//                 alt="image"
//               />
//             </div>
//           </li>
//         </ul>
//       </div>
//       <div data-glide-el="controls">
//         <button
//           class="slider__arrow slider__arrow--prev glide__arrow glide__arrow--prev"
//           data-glide-dir="<"
//         >
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             width="18"
//             height="18"
//             viewBox="0 0 24 24"
//           >
//             <path
//               d="M0 12l10.975 11 2.848-2.828-6.176-6.176H24v-3.992H7.646l6.176-6.176L10.975 1 0 12z"
//             ></path>
//           </svg>
//         </button>

//         <button
//           class="slider__arrow slider__arrow--next glide__arrow glide__arrow--next"
//           data-glide-dir=">"
//         >
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             width="18"
//             height="18"
//             viewBox="0 0 24 24"
//           >
//             <path
//               d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z"
//             ></path>
//           </svg>
//         </button>
//       </div>
//     </div>
//     <div class="thumbnails">
//       <a
//         href="/public/images/women/tops/model `+count+` (a).jpeg"
//         class="glightbox"
//       >
//         <img
//           src="/public/images/women/tops/model `+count+` (a).jpeg"
//           alt="image"
//         />
//       </a>
//       <a
//         href="/public/images/women/tops/model `+count+` (b).jpeg"
//         class="glightbox"
//       >
//         <img
//           src="/public/images/women/tops/model `+count+` (b).jpeg"
//           alt="image"
//         />
//       </a>
//       <a
//         href="/public/images/women/tops/model `+count+` (c).jpeg"
//         class="glightbox"
//       >
//         <img
//           src="/public/images/women/tops/model `+count+` (c).jpeg"
//           alt="image"
//         />
//       </a>
//     </div>
//   </div>`;
//   console.log(html);
// }

