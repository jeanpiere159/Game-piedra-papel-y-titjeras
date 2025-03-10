const gameContainer = document.querySelector(".game-container"),
  userResult = document.querySelector(".user_result img"),
  cpuResult = document.querySelector(".cpu_result img"),
  results = document.querySelector(".results"),
  optionImages = document.querySelectorAll(".option_image");

let time; 

optionImages.forEach((image, index) => {
  image.addEventListener("click", () => {

    userResult.src = "images/rock.png";
    cpuResult.src = "images/rock.png";
    results.textContent = "Un momento..."; 

    clearTimeout(time);
    optionImages.forEach((image2, index2) => {
      index === index2
        ? image2.classList.add("active")
        : image2.classList.remove("active");
    });


    if (gameContainer) gameContainer.classList.add("start");


    time = setTimeout(() => {
      if (gameContainer) gameContainer.classList.remove("start");


      let imageSrc = image.querySelector("img").src;
      userResult.src = imageSrc;


      let random = Math.floor(Math.random() * 3);
      let cpuImages = [
        "images/rock.png",
        "images/paper.png",
        "images/scissors.png",
      ];
      cpuResult.src = cpuImages[random];

      let cpuValue = ["Piedra", "Papel", "Tijera"][random];
      let userValue = ["Piedra", "Papel", "Tijera"][index];


      let outcomes = {
        PiedraPiedra: "Empate",
        PiedraPapel: "Gana la computadora",
        PiedraTijera: "Gana Usuario",
        PapelPiedra: "Gana Usuario",
        PapelPapel: "Empate",
        PapelTijera: "Gana la computadora",
        TijeraPiedra: "Gana la computadora",
        TijeraPapel: "Gana Usuario",
        TijeraTijera: "Empate",
      };

      let outcomeValue = outcomes[userValue + cpuValue];

      results.textContent = outcomeValue;
    }, 2500);
  });
});
