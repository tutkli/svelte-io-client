<script>
    import "../app.css";
    import {chatOpened} from "$lib/stores/chat.store";
    import Chat from "$lib/components/Chat.svelte";
    import ChatBubble from "$lib/components/ChatBubble.svelte";
</script>

<main class="w-screen h-screen flex justify-end items-end" style="overflow: hidden">
    {#if $chatOpened}
        <Chat />
    {:else}
        <ChatBubble />
    {/if}
</main>
