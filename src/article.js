let button = document.getElementById("return-button");
button.addEventListener("mouseenter", () => {
  console.log("enter");
  button.style.backgroundColor = "rgb(226, 170, 106)";
  button.innerHTML = "SPRING SING 2018"
});

button.addEventListener("mouseleave", () => {
  console.log("exit");
  button.style.backgroundColor = "#D19E64";
  button.innerHTML = "RETURN HOME"
});
