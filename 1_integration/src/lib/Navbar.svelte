<script>
     const links = {
		"Title 1": "#linkA",
  	    "Title 2": "#linkA",
		"Title 3": "#linkA",
		"Title 4": "#linkA",
	}

    const mainSubtexts = {
        
        "Lorem ipsum dolor sit amet  " : "",
  	    "exercitationem ": "",
		"ipsum aliquid esse veniam assumenda ": "",
    }

</script>



<div class="flex flex-col ">
    <!-- Cosmetic line -->
    <div class="relative flex py-3 items-center">
        <div class="flex-grow border-t border-slate-600 animate-pulse"></div>
    </div>

    <!-- Link array -->
    <div class="flex flex-row justify-between pt-2 ">
    {#each Object.entries(links) as [name, link]}
        <a class="text-white text-2xl font-bunkenlight tracking-widest text-center hover:text-slate-300 transition" href={link}>{name}</a>
   
    {/each}
    </div>

    <div class="flex flex-row justify-between pt-4 ">
        {#each Object.entries(mainSubtexts) as [name, link]}
            {#if (link.length >0)}
            <a class="px-2  text-slate-600 text-1xl font-bunkenlight text-center hover:text-slate-300 transition" href={link}>{name}</a>
            {:else}
            <p class="px-2 text-slate-600 text-1xl font-bunkenlight text-center transition" >{name}<p>
            {/if}

        {/each}
        </div>


</div>
