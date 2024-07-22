<script>
    import { onMount } from 'svelte';
    import { gsap } from 'gsap';
  
    onMount(() => {
        gsap.from("#corner-tl", {
    duration: 1,
    opacity: 0,
    y: -50,
    delay: 0.2
  });

  gsap.from("#corner-tr", {
    duration: 1,
    opacity: 0,
    y: -50,
    delay: 0.4
  });

  gsap.from("#corner-bl", {
    duration: 1,
    opacity: 0,
    y: 50,
    delay: 0.6
  });

  gsap.from("#corner-br", {
    duration: 1,
    opacity: 0,
    y: 50,
    delay: 0.8
  });

  gsap.from("#hero-title", {
    duration: 1,
    opacity: 0,
    y: 50,
    delay: 1
  });

  gsap.from("#hero-text", {
    duration: 1,
    opacity: 0,
    y: 50,
    delay: 1.5
  });

  gsap.from("#coming-soon", {
    duration: 1,
    opacity: 0,
    y: 50,
    delay: 2
  });

  gsap.from("#background-image", {
    duration: 1.5,
    opacity: 0,
    x: 100,
    delay: 0.5,
    ease: "power4.out"
  });
  
      
    });
  </script>
  <div class="h-screen relative">
    <div id="corner-tl" class="p-1.5 absolute top-0 left-0 z-10">
        <img src="/images/corner-dashed-tl.svg" class="h-24" alt="Top Left Corner" />
    </div>
    <div id="corner-tr" class="p-1.5 absolute top-0 right-0 z-10">
        <img src="/images/corner-dashed-tr.svg" class="h-24" alt="Top Right Corner" />
    </div>

    <div id="corner-bl" class="p-1.5 absolute bottom-0 left-0 z-10">
        <img src="/images/corner-dashed-bl.svg" class="h-24" alt="Bottom Left Corner" />
    </div>
    <div id="corner-br" class="p-1.5 absolute bottom-0 right-0 z-10">
        <img src="/images/corner-dashed-br.svg" class="h-24" alt="Bottom Right Corner" />
    </div>

    <!-- <div id="coming-soon" class="absolute bottom-1/4 right-1/3">
        <div class="font-handwritten text-2xl rotate-12 skew-y-6">More Coming Soon!</div>
    </div> -->

    <!-- Background Image -->
    <img id="background-image" src="/images/cottoncandy-01.png" class="absolute right-0 top-1/2 transform -translate-y-1/2 h-auto max-h-full z-0" alt="Cotton Candy Image" style="height: 75%; right: 0; transform: translateY(-60%) translateX(0);" />

    <main class="h-full flex items-center justify-start relative z-10">
        <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative">
            <h1 id="hero-title" class="text-8xl font-black uppercase"><span class="text-[#F75E86]">Candy</span>Glitch.</h1>
            <div id="hero-text" class="mt-4 text-[#FEF5F8] font-degular lowercase font-light text-lg tracking-widest max-w-xl">
                <p>Web Design and Development Agency for Creatives Based in Warsaw Poland</p>
                <p>projects: <a href="mailto:maciekjanowski42@icloud.com">MaciekJanowski42@icloud.com</a></p>
            </div>
            <!-- <div id="hero-text" class="font-handwritten text-3xl">
                <p>Web Design and Development Agency for Creatives Based in Warsaw Poland</p>
                <p>For projects: MaciejJanowski42@icloud.com</p>
            </div> -->
            
        </div>
    </main>
</div>
