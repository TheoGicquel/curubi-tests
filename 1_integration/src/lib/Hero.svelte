<script>
	import Heading from "./Heading.svelte";
	import Navbar from "./Navbar.svelte";

</script>

<div class="bg-hero-img bg-cover h-screen bg-no-repeat" id="hero">
    <div class="flex flex-col justify-between   h-full px-60 py-36" id="home">
      
      <!-- Main header -->
      <div class="grid grid-cols-5 grid-rows-1 animate-[wiggle_8s_ease-in-out_infinite]">
        <Heading title="Sustameekt" subtitle="Exploration Redesigned" />
      </div>

      <div class="flex flex-col justify-end  p-5 animate-[wiggle_7s_ease-in-out_infinite]">

      
      <div class="col-start-2 col-end-5 px-20 w-2/3 mx-auto ">
        <Navbar />
      </div>

      <!-- Red separator -->
      <div class="col-span-5 text-white  ">
        <div class="flex-grow  border-red-800 border-t-2 "></div>

      </div>

      </div>




    </div>
</div>

  
