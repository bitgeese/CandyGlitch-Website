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
  
<h1 id="hero-title" class="cursor-default text-4xl sm:text-8xl font-display font-black uppercase opacity-0 glitch-container" data-text="CandyGlitch.">
    <span class="glitch-text-pink">Candy</span><span class="glitch-text-white">Glitch.</span>
</h1>
<div id="hero-text" class="mt-2 sm:mt-6 text-[#FEF5F8] font-mono lowercase font-thin text-sm sm:text-lg tracking-widest max-w-xl opacity-0">
  <!-- <p>Web Design and Development Agency for <span class="font-semibold">Creatives</span>, Based in <span class="font-semibold">Warsaw,</span> Poland</p> -->
   <p>web design & dev for the creatively <span class="font-bold">unhinged</span></p>
   <p>warsaw-based. globally connected</p>
  <p class="mt-1 sm:mt-2">
    we craft digital <span class="font-bold">stages</span> for your art to shine
  </p>
  <p class="mt-1 sm:mt-2">wanna make some noise online?</p>
  <p>
    <!-- Contact Us at:  -->
    hit us up: <a class="font-semibold hover:underline hover:text-[#EA6C8A]" href="mailto:maciekjanowski42@icloud.com">MaciekJanowski42@icloud.com</a></p>
</div>
