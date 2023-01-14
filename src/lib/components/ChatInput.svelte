<script>
    import TextInput from "./inputs/TextInput.svelte";
    import {socket} from "$lib/socketIo-client";
    import {connected} from "$lib/stores/socket.store";
    import {messages} from "$lib/stores/chat.store";

    let value = '';
    const handleSubmit = async () => {
        if (value.trim().length === 0) return;

        if (!$connected) {
            messages.addOfflineMessage();
        } else {
            socket.emit('message', value);
        }

        value = '';
    }
</script>

<div class="w-full flex bg-orange-500 rounded-b-xl border-solid border-orange-500 border-2">
    <TextInput bind:value on:submit={handleSubmit}/>

    <button class="w-20 flex justify-center items-center text-white -rotate-45 hover:opacity-80" on:click={handleSubmit}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: currentColor;"><path d="m21.426 11.095-17-8A.999.999 0 0 0 3.03 4.242L4.969 12 3.03 19.758a.998.998 0 0 0 1.396 1.147l17-8a1 1 0 0 0 0-1.81zM5.481 18.197l.839-3.357L12 12 6.32 9.16l-.839-3.357L18.651 12l-13.17 6.197z"></path></svg>
    </button>
</div>
