<script>
  let menuOpen = false;
</script>

<header class="bg-gray-800 text-white p-4">
  <nav class="flex justify-between items-center">
    <a href="/" class="text-2xl font-bold">My Agency</a>
    <button on:click={() => menuOpen = !menuOpen} class="md:hidden">
      Menu
    </button>
    <ul class={`md:flex ${menuOpen ? 'block' : 'hidden'}`}>
      <li><a href="/" class="p-2">Home</a></li>
      <li><a href="/about" class="p-2">About</a></li>
      <li><a href="/services" class="p-2">Services</a></li>
      <li><a href="/contact" class="p-2">Contact</a></li>
    </ul>
  </nav>
</header>