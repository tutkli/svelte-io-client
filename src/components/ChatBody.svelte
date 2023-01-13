<script lang="ts">
    import {messages} from "../core/stores/chat.store";
    import ChatMessage from "./ChatMessage.svelte";
</script>

<div class="h-max bg-gray-100 p-6 flex flex-col gap-4">
    {#each $messages as message (message.id)}
        <ChatMessage message="{message}" />
    {/each}
</div>
