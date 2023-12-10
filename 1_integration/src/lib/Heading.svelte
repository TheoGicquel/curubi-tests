<script>
	import SubHeading from "./SubHeading.svelte";
    export let title = 'Titre';
    export let subtitle = '';
    let hrWidth = 30
  </script>
<div class="flex flex-col">
    <h2 class="text-white text-4xl font-bunkenwide tracking-widest text-center">{title}</h2>
    {#if subtitle.length > 0 }
    <SubHeading text={subtitle}/>
    {:else}
    <div class="relative flex py-3 items-center">
        <div class="flex-grow border-t border-red-700 animate-pulse"></div>
    </div>
    {/if}
</div>    


