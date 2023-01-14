<script>
    import {fly} from 'svelte/transition';
    import {quintOut} from 'svelte/easing';
    import ChatHeader from "./ChatHeader.svelte";
    import ChatBody from "./ChatBody.svelte";
    import ChatInput from "./ChatInput.svelte";
</script>

<div transition:fly={{x: 500, easing: quintOut}} class="w-full h-full max-h-full flex flex-col">
    <ChatHeader />
    <ChatBody />
    <ChatInput />
</div>
