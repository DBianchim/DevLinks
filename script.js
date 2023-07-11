function toggleMode() {
  const html = document.documentElement

  // if (html.classList.contains("light")) {
  //   html.classList.remove("light")
  // } else {
  //   html.classList.add("light")
  // } ou ->
  html.classList.toggle("light")

  //Selecionar tag img
  const img = document.querySelector("#profile img")

  //Substuir a imagem
  if (html.classList.contains("light")) {
    //Se true light, selecionar imagem light
    img.setAttribute("src", "./assets/avatar-light.png")
    img.setAttribute(
      "alt",
      "Imagem: Mordecay personagem do desenho Apenas um Show da Cartoon Network."
    )
  } else {
    //Se false light, selecionar imagem dark
    img.setAttribute("src", "./assets/avatar-dark.png")
    img.setAttribute(
      "alt",
      "Imagem: Rigby personagem do desenho Apenas um Show da Cartoon Network."
    )
  }
}
