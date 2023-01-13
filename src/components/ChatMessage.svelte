<script lang="ts">
    import {scale} from 'svelte/transition';
    import {quintOut} from "svelte/easing";
    import {ChatMessage} from "../core/models/message.model";

    export let message: ChatMessage;
</script>

<div transition:scale={{easing: quintOut}} class="w-[80%] p-4 text-white"
     class:self-end={message.clientMessage}
     class:bg-gray-300={!message.clientMessage}
     class:bg-orange-500={message.clientMessage}>
    {message.message}
</div>
