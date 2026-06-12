const botoesMenu = document.querySelectorAll(".menu-btn:not(.menu-link)");
const cards = document.querySelectorAll(".card");

const modal = document.getElementById("modal");
const modalTitulo = document.getElementById("modalTitulo");
const fecharModal = document.getElementById("fecharModal");

const secoes = {
  aira: ".area-aira",
  zau: ".area-zau",
  artes: ".area-artes",
  insta: ".area-artes"
};

botoesMenu.forEach((botao) => {
  botao.addEventListener("click", () => {
    botoesMenu.forEach((b) => b.classList.remove("ativo"));
    botao.classList.add("ativo");

    const secao = botao.dataset.section;

    if (secoes[secao]) {
      document.querySelector(secoes[secao]).scrollIntoView({
        behavior: "smooth"
      });
    }
  });
});

cards.forEach((card) => {
  card.addEventListener("click", () => {
    const titulo = card.dataset.modal || "Conteúdo";
    modalTitulo.textContent = titulo;

    const destino = buscarSecaoPorTitulo(titulo);

    if (destino) {
      document.querySelector(destino).scrollIntoView({
        behavior: "smooth"
      });
      return;
    }

    modal.classList.add("ativo");
  });
});

function buscarSecaoPorTitulo(titulo) {
  const nome = titulo.toLowerCase();

  if (nome.includes("pioneiros")) {
    return ".area-pioneiros";
  }

  if (nome.includes("transição") || nome.includes("transicao")) {
    return ".area-transicao";
  }

  if (nome.includes("trajetória") || nome.includes("trajetoria")) {
    return ".area-trajetoria-1";
  }

  if (nome.includes("história") || nome.includes("historia")) {
    return ".area-historia-viaduto";
  }

  return null;
}

fecharModal.addEventListener("click", () => {
  modal.classList.remove("ativo");
});

modal.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.classList.remove("ativo");
  }
});