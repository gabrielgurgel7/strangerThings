gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

// SCROLL SUAVE
ScrollSmoother.create({
  smooth: 1.5,
  effects: true,
});

function animarPagina() {
  // ANIMAÇÕES HERO

  // Controla a opacidade da seção hero:
  gsap.from(".hero", {
    opacity: 0,
    duration: 1,
  });
  // Controla o movimento vertical da figura 2:
  gsap.from("picture:nth-child(2)", {
    y: 60,
    duration: 1,
  });
  // Controla o movimento vertical da figura 1:
  gsap.from("picture:nth-child(1)", {
    y: -60,
    duration: 1,
  });

  // ANIMAÇÕES CARDS

  // Controla a opacidade e movimento dos cards:
  gsap.from(".card", {
    opacity: 0,
    y: 30,
    filter: "bur(10px)",
    stagger: 0.3,
    scrollTrigger: {
      trigger: ".cardsCidades",
      start: "0% 80%",
      end: "100% 70%",
      scrub: true,
    },
  });

  // ANIMAÇÕES CIDADES SEÇÃO AGARADECIMENTO

  // Controla a opacidade e movimento dos cards:
  gsap.from(".secaoAgradecimento ul li", {
    opacity: 0,
    x: 40,
    filter: "bur(10px)",
    duration: 1,
    stagger: 0.1,
    scrollTrigger: {
      trigger: ".secaoAgradecimento ul",
      start: "0% 80%",
      end: "100% 50%",
      scrub: 1,
    },
  });

  // ANIMAÇÕES FOOTER

  gsap.from("footer", {
    y: "-30%",
    immediateRender: false,
    scrollTrigger: {
      trigger: "footer",
      scrub: true,
      invalidateOnRefresh: true,
      end: "100% 100%",
    },
  });

  // ANIMAÇÃO TEXT SPLIT

  // Seleciona todas as tags que tem a classe .textoSplit:
  const grupoTextSplit = document.querySelectorAll(".textSplit");

  // Anima cada elemento ˆdesse grupamentoˆ:
  grupoTextSplit.forEach((textAnimateSplit) => {
    const split = SplitText.create(textAnimateSplit, {
      type: "words, chars",
      mask: "lines",
    });

    gsap.from(split.chars, {
      y: 40,
      opacity: 0,
      duration: 0.3,
      stagger: 0.03,
      scrollTrigger: {
        trigger: textAnimateSplit,
      },
    });
  });
}

// ANIMAÇÃO PRÉ LOADER
const tl = gsap.timeline({
  onComplete() {
    animarPagina()
    gsap.to("#preLoader", {
      opacity: 0,
      onComplete() {
        gsap.to("#preLoader", {
          display: "none",
        });
      },
    });
  },
});

tl.to("#preLoader path", {
  duration: 1,
  strokeDashoffset: 0,
});

tl.to("#preLoader path", {
  fill: "rgb(168, 19, 19)",
  duration: 0.5,
  strokeDashoffset: 0,
});
