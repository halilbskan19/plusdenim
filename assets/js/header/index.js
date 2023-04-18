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
