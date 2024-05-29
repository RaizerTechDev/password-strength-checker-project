// Seleciona o campo de entrada de senha e o ícone de alternância
const passwordInput = document.querySelector("#passwordInput");
const togglePassword = document.querySelector("#togglePassword");

// Função para verificar a força da senha
passwordInput.addEventListener("input", function () {
  const password = this.value;

  const strengthIndicator = document.querySelector(
    "#password-strength-indicator"
  );
  const strengthText = document.querySelector("#password-strength-text");

  const strengths = {
    0: "Very weak", // Muito Fraca
    1: "Weak", // Fraca
    2: "Moderate", // Moderada
    3: "Strong", // Forte
    4: "Very strong", // Muito Forte
  };

  let score = 0;

  // Requisitos
  if (password.length >= 8) score++;
  if (password.match(/[a-z]/)) score++;
  if (password.match(/[A-Z]/)) score++;
  if (password.match(/[0-9]/)) score++;
  if (password.match(/[^a-zA-Z0-9]/)) score++;

  // Calculo da %, pq a largura vai ser em %
  const width = (score / 4) * 100;

  strengthIndicator.style.width = `${width}%`;

  switch (score) {
    case 1:
      strengthIndicator.style.backgroundColor = "#e70b0b";
      break;
    case 2:
      strengthIndicator.style.backgroundColor = "#FFB74D";
      break;
    case 3:
      strengthIndicator.style.backgroundColor = "#FFF176";
      break;
    case 4:
      strengthIndicator.style.backgroundColor = "#81C784";
      break;
    default:
      strengthIndicator.style.backgroundColor = "transparent";
      break;
  }

  if (password.length > 0) {
    strengthText.innerHTML = `Força: ${strengths[score]}`;
  } else {
    strengthText.innerHTML = "";
  }
});

// Função para alternar a visibilidade da senha
togglePassword.addEventListener("click", function () {
  //// Verifica se o campo de senha não está vazio antes de alternar a visibilidade
  if (passwordInput.value.length > 0) {
    const type =
      passwordInput.getAttribute("type") === "password" ? "text" : "password";
    passwordInput.setAttribute("type", type);

    // Alterna o ícone entre olho e olho fechado
    this.classList.toggle("fa-eye-slash");
  }
});
