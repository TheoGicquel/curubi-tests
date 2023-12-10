<script>
    const features = {
        
        "width: 95m" : "",
  	    "Length: 145m ": "",
		"Height: 40m": "",
		"Crew:6": "",
		"Θ Class Jump drive": "",


    }
</script>
<div class="flex flex-row justify-around pt-2 ">
    {#each Object.entries(features) as [name]}
        
        <p class="text-slate-600 text-1xl font-bunkenlight tracking-widest text-center  transition">{name}</p>
   
    {/each}
    </div>