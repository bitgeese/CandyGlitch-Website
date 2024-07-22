
  <script>
    import { onMount } from 'svelte';
    import CornerImage from './CornerImage.svelte';
    import HeroText from './HeroText.svelte';
  
    onMount(async () => {
      const { gsap } = await import('gsap');
      const { ScrollTrigger } = await import('gsap/ScrollTrigger');
  
      gsap.registerPlugin(ScrollTrigger);
  
      let mm = gsap.matchMedia();
  
      const elementsToShow = ['#corner-tl', '#corner-tr', '#corner-bl', '#corner-br', '#hero-title', '#hero-text', '#coming-soon', '#background-image'];
  
      const revealElements = () => {
        elementsToShow.forEach(selector => {
          const element = document.querySelector(selector);
          if (element) {
            element.classList.remove('opacity-0');
          }
        });
      };
  
      mm.add("(min-width: 640px)", () => {
        revealElements();
  
        gsap.from("#corner-tl", { duration: 1, opacity: 0, y: -50, delay: 0.2, stagger: 0.1 });
        gsap.from("#corner-tr", { duration: 1, opacity: 0, y: -50, delay: 0.4, stagger: 0.1 });
        gsap.from("#corner-bl", { duration: 1, opacity: 0, y: 50, delay: 0.6, stagger: 0.1 });
        gsap.from("#corner-br", { duration: 1, opacity: 0, y: 50, delay: 0.8, stagger: 0.1 });
        gsap.from("#hero-title", { duration: 1, opacity: 0, y: 50, delay: 1, stagger: 0.1 });
        gsap.from("#hero-text", { duration: 1, opacity: 0, y: 50, delay: 1.5, stagger: 0.1 });
        gsap.from("#coming-soon", { duration: 1, opacity: 0, y: 50, delay: 2, stagger: 0.1 });
        gsap.from("#background-image", { duration: 1.5, opacity: 0, x: 100, delay: 0.5, ease: "power4.out", stagger: 0.1 });
  
        return () => {
          gsap.killTweensOf("#corner-tl, #corner-tr, #corner-bl, #corner-br, #hero-title, #hero-text, #coming-soon, #background-image");
        };
      });
  
      mm.add("(max-width: 639px)", () => {
        revealElements();
  
        gsap.from(elementsToShow, { duration: 1, opacity: 0, delay: 0.2, stagger: 0.1 });
  
        return () => {
          gsap.killTweensOf(elementsToShow);
        };
      });
    });
  </script>
  
  
  <div class="min-h-screen h-screen relative">
    <CornerImage id="corner-tl" src="/images/corner-dashed-tl.svg" alt="Top Left Corner" positionClass="top-0 left-0" />
    <CornerImage id="corner-tr" src="/images/corner-dashed-tr.svg" alt="Top Right Corner" positionClass="top-0 right-0" />
    <CornerImage id="corner-bl" src="/images/corner-dashed-bl.svg" alt="Bottom Left Corner" positionClass="bottom-0 left-0 hidden sm:block" />
    <CornerImage id="corner-br" src="/images/corner-dashed-br.svg" alt="Bottom Right Corner" positionClass="bottom-0 right-0 hidden sm:block" />
    
    <img id="background-image" src="/images/cottoncandy-01.png" class="absolute right-0 top-1/2 transform -translate-y-[60%] h-[45%] sm:h-[55%] max-h-full z-0 opacity-0" alt="Cotton Candy Image" />
  
    <main class="h-full flex items-center justify-start relative z-10">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <HeroText />
      </div>
    </main>
  </div>
  