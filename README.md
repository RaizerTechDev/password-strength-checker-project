# Project-Strength-of-Password!!!

<br>

<div align="center">
<img src="https://media.giphy.com/media/9TFBxN300KpCUI6sBD/giphy.gif" align="center" height="45" width="45">

[ ( Clique aqui e escolha a força da sua senha:`Password Strength Checker`) ](https://rafarz76dev-password-strength-checker.netlify.app/)

<br>

<div align="center">
  
<img src= "https://media.giphy.com/media/3zSF3Gnr7cxMbi6WoP/giphy.gif" align="center" height="55" width="55"> [Demonstração-Password Strength Checker Project] <img src= "https://media.giphy.com/media/E5DzZsofmgxc9wjbhX/giphy.gif" align="center" height="35" width="35">

<img height="480em" src="./assets/images/readme-apresentaçao.gif"  align="center">

---

<div align="left">

### Objetivo

- O projeto que desenvolvi, "Password Strength Checker Project", é uma ferramenta essencial para minha trajetória acadêmica e profissional, realizada em colaboração com o curso Hora de Codar. Este projeto não apenas demonstra minhas habilidades técnicas, mas também minha capacidade de aplicar metodologias eficazes, como a metodologia BEM, que garante que o código seja mais fácil de entender, escalar e manter. O layout é responsivo, garantindo que o verificador funcione bem em dispositivos móveis. A funcionalidade JavaScript para alternar a visibilidade da senha e verificar sua força foi integrada e documentada, garantindo uma experiência de usuário aprimorada.

- Nesta plataforma, os usuários podem verificar a força de suas senhas em tempo real, recebendo classificações como Muito Fraca, Fraca, Moderada, Forte ou Muito Forte. As regras para a classificação das senhas incluem:

- Letras minúsculas;
- Letras maiúsculas;
- Números;
- Caracteres especiais.

---

### 📌 Estrutura do Projeto:

Adotei uma estrutura padrão de Arquitetura/Organização de Pastas para gerenciar os arquivos de forma eficiente. Utilizando HTML, CSS e JavaScript, implementei esta solução, consolidando meus conhecimentos e me preparando para desafios futuros com confiança.

```
Project-Strength-of-Password/
│
│
│
└── assets/
│ ├── images/
│ │ └── example-image.jpg
│ │
│ ├── js/
│ │ └── script.js
│ │
│ └── styles/
│ └── style.css
└── index.html
```

---

### 📌 Aqui está uma pequena documentação do Projeto: Conceitos Aplicados👇

▪ O código `HTML` consiste em uma estrutura organizada de elementos dentro de uma `<div>` com a classe .container. Elementos dentro desta `<div>`:
1.Título. 2. Descrição. 3. Campo de Entrada da Senha. 4. Ícone de Alternância da Senha. 5. Barra Força da Senha. 6. Indicador para Força da Senha. 7. Regras da Senha

🚀Copy code

```
<div class="container">
        <h2 class="container__title">Password Strength Checker</h2>
        <p class="container__description">Enter a password to verify your strength:</p>
        <div class="container__input-wrapper">
            <input type="password" id="passwordInput" class="container__input" placeholder="Enter your password">
            <i id="togglePassword" class="fas fa-eye container__toggle-password"></i>
        </div>
        <div class="container__strength-bar">
            <div id="password-strength-indicator" class="container__strength-indicator"></div>
        </div>
        <p id="password-strength-text" class="container__strength-text"></p>
        <p id="tip" class="container__tip">
            Your password must contain lowercase and uppercase letters, numbers, and
            special characters.
        </p>
    </div>
```

▪ Estrutura para a aparência e a funcionalidade da página de estilos fornecido dentro do código `CSS`:

1. Estilo do Container.
2. Título e Descrição do Container.
3. Campo de Entrada da Senha.
4. Ícone de Alternância de Visibilidade da Senha.
5. Barra de Força da Senha.
6. Indicador de Força da Senha.
7. Regras da Senha.
8. Responsividade.

🚀Copy code

```
.container__input {
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
  border: 2px solid #ddd;
  border-radius: 4px;
  margin: 15px 0;
  font-weight: bold;
}

.container__toggle-password {
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  color: #333;
}

.container__strength-bar {
  width: 100%;
  height: 20px;
  background-color: #ddd;
  border-radius: 4px;
  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.2);
  overflow: hidden;
}

.container__strength-indicator {
  height: 100%;
  width: 0;
  background-color: #e70b0b;
  transition: width 0.5s ease, background-color 0.5s ease;
}
```

▪ O `JavaScript` implementa a funcionalidade de verificar a força de uma senha inserida pelo usuário e de alternar a visibilidade da senha entre visível e oculta. A funcionalidade é fornecida por meio de eventos de entrada no campo de senha e de clique em um ícone de olho.:

🚀Copy code

```
// Seleciona o campo de entrada de senha e o ícone de alternância
const passwordInput = document.querySelector("#passwordInput");
const togglePassword = document.querySelector("#togglePassword");
```

```
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
```

```
// Função para alternar a visibilidade da senha
togglePassword.addEventListener("click", function () {
  const type =
    passwordInput.getAttribute("type") === "password" ? "text" : "password";
  passwordInput.setAttribute("type", type);

  // Alterna o ícone entre olho e olho fechado
  this.classList.toggle("fa-eye-slash");
 });
```

---

## Tecnologias

<img src="https://media.giphy.com/media/iT138SodaACo9LImgi/giphy.gif" align="center" height="75" width="75"> Tecnologias utilizadas no projeto:

- HTML5 (Linguagem de marcação utilizada para a construção das páginas web).

- CSS3 (Mecanismo para adicionar estilos a uma página web).

- JavaScript (Linguagem de programação de alto nível, que pode ser interpretada ou compilada just-in-time (JIT) para execução em um ambiente específico).

- Git (Sistema de controle de versões).

- Github (Plataforma para hospedagem de código-fonte).

- Visual Studio Code (Editor de código-fonte).

- Navegador web (Interação com documentos HTML).

---

<img src="https://media.giphy.com/media/SS8CV2rQdlYNLtBCiF/giphy.gif" align="center" height="35" width="45"> Ferramenta utilizada no projeto:

- [VsCode](https://code.visualstudio.com/download) (v1.80.1)

---

#### 💡 Insights Adicionais:

- Metodologia BEM: A aplicação da metodologia BEM (Block, Element, Modifier) no desenvolvimento do projeto facilitou a manutenção do código e permitiu uma escalabilidade mais eficiente. Essa prática é crucial para projetos em larga escala e equipes colaborativas.

- Interatividade e Feedback Imediato: A capacidade da plataforma de fornecer feedback imediato sobre a força da senha melhora significativamente a experiência do usuário, incentivando a criação de senhas mais seguras.

- Preparação para o Futuro: Este projeto não apenas solidificou minhas habilidades técnicas, mas também me preparou para enfrentar desafios futuros, tanto no ambiente acadêmico quanto profissional, com maior confiança e competência.

---

## Licença

- Esse projeto está sob a licença MIT.

---

<img src="https://media.giphy.com/media/ImmvDZ2c9xPR8gDvHV/giphy.gif" align="center" height="25" width="25"> Autor

<p>
    <img align=left margin=10 width=80 src="https://avatars.githubusercontent.com/u/87991807?v=4"/>
    <p>&nbsp&nbsp&nbspRafaRz76Dev<br>
    &nbsp&nbsp&nbsp<a href="https://api.whatsapp.com/send/?phone=47999327137">Whatsapp</a>&nbsp;|&nbsp;<a href="https://www.linkedin.com/in/rafael-raizer//">LinkedIn</a>&nbsp;|&nbsp;<a href="https://github.com/RafaRz76Dev">GitHub</a>|&nbsp;<a href="https://public.tableau.com/app/profile/rafael.raizer">Tableau</a>|&nbsp;<a href="https://portifolio-rafarz76dev.netlify.app/">Portfólio</a>&nbsp;</p>
</p>
