var mensagem;

var cena2 = new Phaser.Scene("Cena 2");

cena2.preload = function() {
  this.load.image("sky", "assets/sky.png");
};

cena2.create = function() {
  this.add.image(400, 300, "sky");

  mensagem = this.add.text(16, 16, "Fim", {
    fontSize: "32px",
    fill: "#000"
  });

  // Botão de ativar/desativar tela cheia
  let isFullscreen;
  if (this.scale.isFullscreen) isFullscreen = 1;
  else isFullscreen = 0;

  var button = this.add
    .image(800 - 16, 16, "fullscreen", isFullscreen)
    .setOrigin(1, 0)
    .setInteractive();

  // Ao clicar no botão de tela cheia
  button.on(
    "pointerup",
    function() {
      if (this.scale.isFullscreen) {
        button.setFrame(0);
        this.scale.stopFullscreen();
      } else {
        button.setFrame(1);
        this.scale.startFullscreen();
      }
    },
    this
  );

  // Tecla "F" também ativa/desativa tela cheia
  var FKey = this.input.keyboard.addKey("F");
  FKey.on(
    "down",
    function() {
      if (this.scale.isFullscreen) {
        button.setFrame(0);
        this.scale.stopFullscreen();
      } else {
        button.setFrame(1);
        this.scale.startFullscreen();
      }
    },
    this
  );
};

cena2.update = function() {
  mensagem.setText("Fim do jogo");
};

export { cena2 };
