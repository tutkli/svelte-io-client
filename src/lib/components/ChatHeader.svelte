<script lang="ts">
    import {connected} from "$lib/stores/socket.store";
    import {chatOpened} from "$lib/stores/chat.store";
</script>

<div class="w-full flex flex-row justify-between sm:px-10 p-4 bg-orange-500 text-white rounded-t-xl drop-shadow-xl">
    <div class="flex items-center gap-4">
        <div class="p-4 border-solid border-4 border-white rounded-full bg-orange-700">
            <svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" viewBox="0 0 24 24" style="fill: currentColor;"><path d="M21.928 11.607c-.202-.488-.635-.605-.928-.633V8c0-1.103-.897-2-2-2h-6V4.61c.305-.274.5-.668.5-1.11a1.5 1.5 0 0 0-3 0c0 .442.195.836.5 1.11V6H5c-1.103 0-2 .897-2 2v2.997l-.082.006A1 1 0 0 0 1.99 12v2a1 1 0 0 0 1 1H3v5c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2v-5a1 1 0 0 0 1-1v-1.938a1.006 1.006 0 0 0-.072-.455zM5 20V8h14l.001 3.996L19 12v2l.001.005.001 5.995H5z"></path><ellipse cx="8.5" cy="12" rx="1.5" ry="2"></ellipse><ellipse cx="15.5" cy="12" rx="1.5" ry="2"></ellipse><path d="M8 16h8v2H8z"></path></svg>
        </div>

        <div class="flex flex-col">
            <h1 class="text-xl font-semibold">Socket.io Client</h1>
            <div class="flex gap-2 items-center">
                <div class="w-4 h-4 rounded-full" class:bg-green-500={$connected} class:bg-red-500={!$connected}></div>
                <p>{#if $connected} Online {:else} Offline {/if}</p>
            </div>
        </div>
    </div>

    <button class="p-4 rounded-full hover:opacity-80" on:click={() => chatOpened.set(false)}>
        <svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" viewBox="0 0 24 24" style="fill: currentColor;"><path d="m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z"></path></svg>
    </button>
</div>
