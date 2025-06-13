// Declaração de variáveis
let previousImage = null;

// Troca dinâmica só após tudo carregado (inclusive imagens externas)
window.onload = changeHeroImageInterval;

// Função para trocar a imagem do hero em intervalos
function changeHeroImageInterval() {
	setRandomHeroImage();
	setTimeout(changeHeroImageInterval, 10000); // 10000 milissegundos = 10 segundos
}

// Função para definir uma imagem aleatória no hero
function setRandomHeroImage() {
	const heroSection = document.querySelector(".hero");
	const root = document.documentElement;

	// Cria uma cópia do array heroImages sem a imagem anterior
	const availableImages = heroImages.filter((image) => image !== previousImage);

	// Seleciona uma imagem aleatória do novo array
	const randomIndex = Math.floor(Math.random() * availableImages.length);
	const randomImage = availableImages[randomIndex];

	// Adiciona a classe fade-out para iniciar o efeito de desvanecimento
	heroSection.classList.add("fade-out");

	// Aguarda a transição de fade-out ser concluída
	setTimeout(() => {
		// Define a nova imagem de fundo
		root.style.setProperty("--hero-background-img", `url(${randomImage})`);

		// Atualiza a imagem anterior
		previousImage = randomImage;

		// Remove a classe fade-out e adiciona a classe fade-in para iniciar o efeito de aparecimento
		heroSection.classList.remove("fade-out");
		heroSection.classList.add("fade-in");
	}, 500); // Aguarda 500ms (0.5s) para o fade-out ser concluído

	// Aguarda a transição de fade-in ser concluída
	setTimeout(() => {
		// Remove a classe fade-in
		heroSection.classList.remove("fade-in");
	}, 1000); // Aguarda 1000ms (1s) para o fade-in ser concluído
}
