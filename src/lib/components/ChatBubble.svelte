<script lang="ts">
    import {fly} from 'svelte/transition';
    import {quintOut} from 'svelte/easing';
    import {chatOpened} from "$lib/stores/chat.store";
</script>

<button in:fly={{y: 100, easing: quintOut}} class="m-6 p-4 bg-orange-500 text-white rounded-full hover:opacity-80" on:click={() => chatOpened.set(true)}>
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: currentColor;"><path d="M5 18v3.766l1.515-.909L11.277 18H16c1.103 0 2-.897 2-2V8c0-1.103-.897-2-2-2H4c-1.103 0-2 .897-2 2v8c0 1.103.897 2 2 2h1zM4 8h12v8h-5.277L7 18.234V16H4V8z"></path><path d="M20 2H8c-1.103 0-2 .897-2 2h12c1.103 0 2 .897 2 2v8c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2z"></path></svg>
</button>
