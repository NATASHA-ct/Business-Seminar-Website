const menu = document.querySelector(".hamburger-menu");

const navlist = document.querySelector(".nav-list");

// ............ Adding click event to the hamburger.........................

menu.addEventListener("click", () => {
  menu.classList.toggle("active");

  navlist.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach((n) =>
  n.addEventListener("click", () => {
    menu.classList.remove("active");

    navlist.classList.remove("active");
  })
);

// ............Adding event to close icon on menu.............................
document.querySelector(".close-icon").addEventListener("click", () => {
  menu.classList.remove("active");

  navlist.classList.remove("active");
});


// -----------FEATURED SPEAKERS----------//
const speakers=document.querySelector(".speakers")

const speakerDetails = [
  {
    speakerbg: "../assets/speakers/chess.png",
    speakerimage: "../assets/speakers/oprah.jpg",
    speakername: "Oprah Gail Winfrey",
    firstintro:
      "Oprah Winfrey an American talk  , actress, author, and philanthropist.",
    secondintro:
      "Dubbed the Queen of All Media, was once the world's only black billionaire.",
  },

  {
    speakerbg: "../assets/speakers/chess.png",
    speakerimage: "../assets/speakers/Dangote.jpg",
    speakername: "Aliko Dangote",
    firstintro:
      "He is a billionaire business magnate.CEO of the Dangote Group.",
    secondintro:
      "Dangote became Nigeria's first billionaire in 2007.",
  },

  {
    speakerbg: "../assets/speakers/chess.png",
    speakerimage: "../assets/speakers/gates.jpg",
    speakername:"Bill Gates",
    firstintro:"He is business magnate philanthropist and co-founder of Microsoft",
    secondintro: "Bill Gates has held the Forbes title of the richest person in the world for the longest period.",
  },

  {
    speakerbg: "../assets/speakers/chess.png",
    speakerimage: "../assets/speakers/masiyiwa.jpg",
    speakername: "Strive Masiyiwa",
    firstintro:
      "Founder of the international technology group Econet Global",
    secondintro:
      "He is a great philanthropist supproting mostly , young people.",
  },

  {
    speakerbg: "../assets/speakers/chess.png",
    speakerimage: "../assets/speakers/diane.jpg",
    speakername: "Diane Marie Hendricks",
    firstintro:
      "She is billionaire businesswoman and film producer from Wisconsin.",
    secondintro:
      "She has served on the boards.",
  },

  {
    speakerbg: "../assets/speakers/chess.png",
    speakerimage: "../assets/speakers/mars.jpg",
    speakername: "Jacqueline Mars",
    firstintro:
      "She is an American billionaire heiress and businesswoman. ",
    secondintro:
      "She has served on several boards.",
  },
];

//---Dynamic loading----
const guest = () => {
  let speakercard = "";

  for (
    let speakerIndex = 0;
    speakerIndex < speakerDetails.length;
    speakerIndex += 1
  ) {
    const card = `
            <div class="profile">
                  <div class="speaker-image">
                    <img class="sp-bg" src="${speakerDetails[speakerIndex].speakerbg}">
                    <img class="sp-image" src="${speakerDetails[speakerIndex].speakerimage}" alt="speaker's image">
                  </div>

                    <div class="details">
                        <h3 class="speaker-name">${speakerDetails[speakerIndex].speakername}</h3>
                        <p class="sp-intro1">${speakerDetails[speakerIndex].firstintro}</p>
                        <hr class="hr-2">
                        <p class="sp-intro2">${speakerDetails[speakerIndex].secondintro}</p>
                    </div>

              </div>`;
    speakercard += card;
  }
    speakers.innerHTML = speakercard;
};
guest();

speakers.innerHTML += ` 
        <button class="more-speakers">
            MORE<span class="material-symbols-outlined">expand_more</span>
        </button>`;
