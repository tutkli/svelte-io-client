<script lang="ts">
    import ChatMessage from "./ChatMessage.svelte";
    import {afterUpdate, beforeUpdate} from "svelte";
    import {messages} from "$lib/stores/chat.store";

    let container: HTMLDivElement;
    let autoscroll;

    beforeUpdate(() => {
        autoscroll = container && (container.offsetHeight + container.scrollTop) > (container.scrollHeight - 20);
    });

    afterUpdate(() => {
       if (autoscroll) container.scrollTo({top: container.scrollHeight, behavior: 'smooth'});
    });
</script>

<div bind:this={container} class="grow bg-gray-100 p-6 flex flex-col gap-4 overflow-auto">
    {#each $messages as message (message.id)}
        <ChatMessage message="{message}" />
    {/each}
</div>

<style>
    ::-webkit-scrollbar {
        width: 10px;
    }
    ::-webkit-scrollbar-track {
        background: #f1f1f1;
    }
    ::-webkit-scrollbar-thumb {
        background: #888;
    }
    ::-webkit-scrollbar-thumb:hover {
        background: #555;
    }
</style>
