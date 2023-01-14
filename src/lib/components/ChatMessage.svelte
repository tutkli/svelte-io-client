<script lang="ts">
    import {scale} from 'svelte/transition';
    import {quintOut} from "svelte/easing";
    import type {ChatMessage} from "$lib/models/message.model";

    export let message: ChatMessage;
</script>

<div transition:scale={{easing: quintOut}}
     class="w-[80%] p-4 text-white drop-shadow-sm rounded-lg flex flex-col gap-1"
     class:self-end={message.clientMessage}
     class:text-black={!message.clientMessage}
     class:bg-gray-300={!message.clientMessage}
     class:bg-orange-500={message.clientMessage}>
    <p class="font-bold">{message.username}</p>
    <p>{message.message}</p>
    <p class="self-end font-semibold opacity-60">{message.time.toLocaleString()}</p>
</div>
