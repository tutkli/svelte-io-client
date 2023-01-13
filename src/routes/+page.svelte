<script>
    import "../app.css";
    import ChatBubble from "../components/ChatBubble.svelte";
    import Chat from "../components/Chat.svelte";
    import {chatOpened} from "../core/stores/chat.store";
</script>

<main class="w-screen h-screen flex justify-end items-end" style="overflow: hidden">
    {#if $chatOpened}
        <Chat />
    {:else}
        <ChatBubble />
    {/if}
</main>
