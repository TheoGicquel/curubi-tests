<script>
	import Contact from "$lib/Contact.svelte";
import Explore from "$lib/Explore.svelte";
	import Gallery from "$lib/Gallery.svelte";
import Hero from "$lib/Hero.svelte";
	import Separator from "$lib/Separator.svelte";

</script>
  
  <Hero />
  <!-- Gradients found  -->
  <!-- 
    #0a121e 
    #09131f
    #070f19 
    #040c13 
   -->
   <Separator />
   <div class="bg-gradient-to-r from-[#070f19]  to-[#040c13]">
     <Explore />
     <Gallery />
    <Separator />

     <Contact />

   </div>

