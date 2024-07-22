<script>
    export let id;
    export let src;
    export let alt;
    export let positionClass;
  </script>
  
  <div id={id} class={`p-1.5 absolute ${positionClass} z-10 opacity-0`}>
    <img src={src} class="h-12 sm:h-24" alt={alt} />
  </div>