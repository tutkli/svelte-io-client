<script>
    import {fly} from 'svelte/transition';
    import {quintOut} from 'svelte/easing';
    import ChatHeader from "./ChatHeader.svelte";
    import ChatBody from "./ChatBody.svelte";
</script>

<div transition:fly={{x: 500, easing: quintOut}} class="w-full h-full flex-col">
    <ChatHeader />
    <ChatBody />
</div>
