<script>
    import { onMount } from 'svelte';
  
    onMount(async () => {
      const { gsap } = await import('gsap');
      const { ScrollTrigger } = await import('gsap/ScrollTrigger');
  
      gsap.registerPlugin(ScrollTrigger);
  
      let mm = gsap.matchMedia();
  
      // Define breakpoints
      mm.add("(min-width: 640px)", () => {
        // Animations for screens wider than 640px (non-mobile)
        const elementsToShow = ['#corner-tl', '#corner-tr', '#corner-bl', '#corner-br', '#hero-title', '#hero-text', '#coming-soon', '#background-image'];
        
        elementsToShow.forEach(selector => {
          const element = document.querySelector(selector);
          if (element) {
            element.classList.remove('opacity-0');
          }
        });
  
        gsap.from("#corner-tl", {
          duration: 1,
          opacity: 0,
          y: -50,
          delay: 0.2,
          stagger: 0.1
        });
  
        gsap.from("#corner-tr", {
          duration: 1,
          opacity: 0,
          y: -50,
          delay: 0.4,
          stagger: 0.1
        });
  
        gsap.from("#corner-bl", {
          duration: 1,
          opacity: 0,
          y: 50,
          delay: 0.6,
          stagger: 0.1
        });
  
        gsap.from("#corner-br", {
          duration: 1,
          opacity: 0,
          y: 50,
          delay: 0.8,
          stagger: 0.1
        });
  
        gsap.from("#hero-title", {
          duration: 1,
          opacity: 0,
          y: 50,
          delay: 1,
          stagger: 0.1
        });
  
        gsap.from("#hero-text", {
          duration: 1,
          opacity: 0,
          y: 50,
          delay: 1.5,
          stagger: 0.1
        });
  
        gsap.from("#coming-soon", {
          duration: 1,
          opacity: 0,
          y: 50,
          delay: 2,
          stagger: 0.1
        });
  
        gsap.from("#background-image", {
          duration: 1.5,
          opacity: 0,
          x: 100,
          delay: 0.5,
          ease: "power4.out",
          stagger: 0.1
        });
  
        // Cleanup function when the media query no longer matches
        return () => {
          gsap.killTweensOf("#corner-tl, #corner-tr, #corner-bl, #corner-br, #hero-title, #hero-text, #coming-soon, #background-image");
        };
      });
  
      mm.add("(max-width: 639px)", () => {
        // Animations for screens narrower than 640px (mobile)
        const elementsToShow = ['#corner-tl', '#corner-tr', '#corner-bl', '#corner-br', '#hero-title', '#hero-text', '#coming-soon', '#background-image'];
        
        elementsToShow.forEach(selector => {
          const element = document.querySelector(selector);
          if (element) {
            element.classList.remove('opacity-0');
          }
        });
  
        gsap.from(elementsToShow, {
          duration: 1,
          opacity: 0,
          delay: 0.2,
          stagger: 0.1
        });
  
        // Cleanup function when the media query no longer matches
        return () => {
          gsap.killTweensOf(elementsToShow);
        };
      });
    });
  </script>

  <style>
:root {
  --f-size: 15;
  --f-unit: 1vmin;
  --f: calc(var(--f-size) * var(--f-unit));
  --bg: #181717; 
}

.glitch-container {
  /* font-size: var(--f); */
  display: flex;
  line-height: .75;
  margin: auto;
  color: #FFFFFF;
  text-align: center;
  transform: scaleX(var(--scale, 1));
  position: relative;
}

.glitch-container::before,
.glitch-container::after {
  --top: 0;
  --left: 0;
  --v-height: 30%;
  --n-tenth: calc(var(--f-size) * .1 * var(--top));
  --t-cut: calc(var(--n-tenth) / var(--f-size) * 100%);
  --b-cut: calc(var(--t-cut) + var(--v-height));
  content: attr(data-text);
  position: absolute;
  width: 100%;
  left: 0;
  text-align: center;
  transform: translateX(calc(var(--left) * 100%));
  filter: drop-shadow(0 0 transparent);
  background-color: var(--bg);
  clip-path: polygon(0% var(--t-cut), 100% var(--t-cut), 100% var(--b-cut), 0% var(--b-cut));
  opacity: 0; /* Hide the glitch effect initially */
}

/* Glitch text for pink */
.glitch-text-pink {
  color: #F75E86; /* Medium Pink */
}

.glitch-container:hover::before .glitch-text-pink,
.glitch-container:hover::after .glitch-text-pink {
  text-shadow: calc(var(--left) * -3em) 0 .02em #FFC0CB, /* Light Pink */
               calc(var(--left) * -6em) 0 .02em #F75E86; /* Dark Pink */
}

/* Glitch text for white */
.glitch-text-white {
  color: #FFFFFF; /* White */
}

.glitch-container:hover::before .glitch-text-white,
.glitch-container:hover::after .glitch-text-white {
  text-shadow: calc(var(--left) * -3em) 0 .02em #F75E86, /* Dark Pink */
               calc(var(--left) * -6em) 0 .02em #000000; /* Black */
}

.glitch-container:hover::before,
.glitch-container:hover::after {
  opacity: 1; /* Show the glitch effect on hover */
  animation: glitch-b 1.7s infinite alternate-reverse;
  animation: glitch-a 3.1s infinite alternate;
}

@keyframes glitch-p {
  17% { --scale: .87; }
  31% { --scale: 1.1; }
  37% { --scale: 1.3; }
  47% { --scale: .91; }
  87% { --scale: 1; }
}

@keyframes glitch-a {
  10%, 30%, 50%, 70%, 90% {
    --top: 0;
    --left: 0;
  }
  0% {
    --v-height: 15%;
  }
  20% {
    --left: .005;
  }
  40% {
    --left: .01;
    --v-height: 20%;
    --top: 3;
  }
  60% {
    --left: .03;
    --v-height: 25%;
    --top: 6;
  }
  80% {
    --left: .07;
    --v-height: 5%;
    --top: 8;
  }
  100% {
    --left: .083;
    --v-height: 30%;
    --top: 1;
  }
}

@keyframes glitch-b {
  10%, 30%, 50%, 70%, 90% {
    --top: 0;
    --left: 0;
  }
  0% {
    --v-height: 15%;
    --top: 10;
  }
  20% {
    --left: -.005;
  }
  40% {
    --left: -.01;
    --v-height: 17%;
    --top: 3;
  }
  60% {
    --left: -.03;
    --v-height: 35%;
    --top: 6;
  }
  80% {
    --left: -.07;
    --v-height: 5%;
    --top: 8;
  }
  100% {
    --left: -.083;
    --v-height: 30%;
    --top: 1;
  }
}


  </style>
  
  <div class="min-h-screen h-screen relative">
    <div id="corner-tl" class="p-1.5 absolute top-0 left-0 z-10 opacity-0">
      <img src="/images/corner-dashed-tl.svg" class="h-12 sm:h-24" alt="Top Left Corner" />
    </div>
    <div id="corner-tr" class="p-1.5 absolute top-0 right-0 z-10 opacity-0">
      <img src="/images/corner-dashed-tr.svg" class="h-12 sm:h-24" alt="Top Right Corner" />
    </div>
    <div id="corner-bl" class="hidden sm:block p-1.5 absolute bottom-0 left-0 z-10 opacity-0">
      <img src="/images/corner-dashed-bl.svg" class="h-12 sm:h-24" alt="Bottom Left Corner" />
    </div>
    <div id="corner-br" class="hidden sm:block p-1.5 absolute bottom-0 right-0 z-10 opacity-0">
      <img src="/images/corner-dashed-br.svg" class="h-12 sm:h-24" alt="Bottom Right Corner" />
    </div>
    <img id="background-image" src="/images/cottoncandy-01.png" class="absolute right-0 top-1/2 transform -translate-y-[60%] h-[45%] sm:h-[55%] max-h-full z-0 opacity-0" alt="Cotton Candy Image" />
  
    <main class="h-full flex items-center justify-start relative z-10">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <h1 id="hero-title" class="cursor-default text-4xl sm:text-8xl font-black uppercase opacity-0 glitch-container" data-text="CandyGlitch.">
            <span class="glitch-text-pink">Candy</span><span class="glitch-text-white">Glitch.</span>
          </h1>
          
        <div id="hero-text" class="mt-2 sm:mt-6 text-[#FEF5F8] font-degular lowercase font-light text-sm sm:text-lg tracking-widest max-w-xl opacity-0">
          <p>Web Design and Development Agency for <span class="font-semibold">Creatives</span>, Based in <span class="font-semibold">Warsaw,</span> Poland</p>
          <p class="mt-1 sm:mt-2">Let's Create Something Amazing Together!</p>
          <p>Contact Us at: <a class="font-semibold hover:underline hover:text-[#EA6C8A]" href="mailto:maciekjanowski42@icloud.com">MaciekJanowski42@icloud.com</a></p>
        </div>
      </div>
    </main>
  </div>