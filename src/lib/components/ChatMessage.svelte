<script lang="ts">
    import {scale} from 'svelte/transition';
    import {quintOut} from "svelte/easing";
    import type {ChatMessage} from "$lib/models/message.model";
    import {client} from "$lib/stores/chat.store";

    export let message: ChatMessage;
</script>

<div transition:scale={{easing: quintOut}}
     class="w-[80%] p-4 text-white drop-shadow-sm rounded-lg flex flex-col gap-1"
     class:self-end={message.clientId === $client.id}
     class:text-black={message.clientId !== $client.id}
     class:bg-gray-300={message.clientId !== $client.id}
     class:bg-orange-500={message.clientId === $client.id}>
    <p class="font-bold">{message.username}</p>
    <p>{message.text}</p>
    <p class="self-end font-semibold opacity-60">{message.time.toLocaleString()}</p>
</div>
