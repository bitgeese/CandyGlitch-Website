<style>

*, *:before, *:after {
  box-sizing: border-box;
  outline: none;
}

.glitch:hover:before,
.glitch:hover:after {
  position: absolute;
  content: 'CandyGlitch.';
  transform: translate(-75%, -50%);
  z-index: -1;
}

:hover:before {
  top: 49.5%;
  left: 49.5%;
  color: rgba(247, 94, 134, 0.8); /* rgba($color-1, 0.8) */
  animation: distort1 300ms linear infinite;
}

.glitch:hover:after {
  top: 50.5%;
  left: 50.5%;
  color: rgba(253, 206, 217, 0.836); /* rgba($color-2, 0.8) */
  animation: distort2 300ms linear infinite;
}

@keyframes distort1 {
  0% { top: 49.5%; left: 49.5%; }
  12.5% { top: 49.5%; left: 50%; }
  25% { top: 49.5%; left: 50.5%; }
  37.5% { top: 50%; left: 50.5%; }
  50% { top: 50.5%; left: 50.5%; }
  62.5% { top: 50.5%; left: 50%; }
  75% { top: 50.5%; left: 49.5%; }
  87.5% { top: 50%; left: 49.5%; }
  100% { top: 49.5%; left: 49.5%; }
}

@keyframes distort2 {
  0% { top: 50.5%; left: 50.5%; }
  12.5% { top: 50%; left: 50.5%; }
  25% { top: 49.5%; left: 50.5%; }
  37.5% { top: 49.5%; left: 50%; }
  50% { top: 49.5%; left: 49.5%; }
  62.5% { top: 50%; left: 49.5%; }
  75% { top: 50.5%; left: 49.5%; }
  87.5% { top: 50.5%; left: 50%; }
  100% { top: 50.5%; left: 50.5%; }
}    
</style>
  
<h1 id="hero-title" class="glitch cursor-default text-4xl sm:text-8xl font-display font-black uppercase opacity-0 glitch-container" data-text="CandyGlitch.">
    <span class="text-[#F75E86]">Candy</span><span class="">Glitch.</span>
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
