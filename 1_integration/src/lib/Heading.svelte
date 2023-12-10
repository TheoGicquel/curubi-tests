<script>
	import SubHeading from "./SubHeading.svelte";

    export let title = 'Titre';
    export let subtitle = 'Sous titre';
    let hrWidth = 30
  </script>
<div class="flex flex-col">
    <h2 class="text-white text-4xl font-bunkenwide tracking-widest text-center">{title}</h2>
    <SubHeading text={subtitle}/>
</div>    


