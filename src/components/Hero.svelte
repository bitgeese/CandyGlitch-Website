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
  
  <div class="min-h-screen h-screen relative">
    <div id="corner-tl" class="p-1.5 absolute top-0 left-0 z-10 opacity-0">
      <img src="/images/corner-dashed-tl.svg" class="h-12 sm:h-24" alt="Top Left Corner" />
    </div>
    <div id="corner-tr" class="p-1.5 absolute top-0 right-0 z-10 opacity-0">
      <img src="/images/corner-dashed-tr.svg" class="h-12 sm:h-24" alt="Top Right Corner" />
    </div>
    <div id="corner-bl" class="p-1.5 absolute bottom-0 left-0 z-10 opacity-0">
      <img src="/images/corner-dashed-bl.svg" class="h-12 sm:h-24" alt="Bottom Left Corner" />
    </div>
    <div id="corner-br" class="p-1.5 absolute bottom-0 right-0 z-10 opacity-0">
      <img src="/images/corner-dashed-br.svg" class="h-12 sm:h-24" alt="Bottom Right Corner" />
    </div>
    <img id="background-image" src="/images/cottoncandy-01.png" class="absolute right-0 top-1/2 transform -translate-y-[60%] h-[65%] sm:h-[75%] max-h-full z-0 opacity-0" alt="Cotton Candy Image" />
  
    <main class="h-full flex items-center justify-start relative z-10">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <h1 id="hero-title" class="text-4xl sm:text-8xl font-black uppercase opacity-0"><span class="text-[#F75E86]">Candy</span>Glitch.</h1>
        <div id="hero-text" class="mt-0 sm:mt-4 text-[#FEF5F8] font-degular lowercase font-light text-sm sm:text-lg tracking-widest max-w-xl opacity-0">
          <p>Web Design and Development Agency for Creatives Based in Warsaw Poland</p>
          <p>projects: <a href="mailto:maciekjanowski42@icloud.com">MaciekJanowski42@icloud.com</a></p>
        </div>
      </div>
    </main>
  </div>