function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  //pegar a tag img
  const img = document.querySelector("#profile img")

  //substituir img
  if (html.classList.contains("light")) {
    //se tiver lightmode
    img.setAttribute("src", "./assets/avatar-light.png")
  } else {
    //se tiver sem lightmode
    img.setAttribute("src", "./assets/avatar.png")
  }
}
