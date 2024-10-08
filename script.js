function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  // Salvar a preferência do usuário
  const isLightMode = html.classList.contains("light")
  localStorage.setItem("lightMode", isLightMode)
}

// Verificar a preferência salva do usuário ao carregar a página
document.addEventListener("DOMContentLoaded", () => {
  const isLightMode = localStorage.getItem("lightMode") === "true"
  if (isLightMode) {
    document.documentElement.classList.add("light")
  }
})
