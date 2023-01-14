<script lang="ts">
    import {createEventDispatcher} from "svelte";
    import {keyupEnter} from "$lib/actions/keyupEnter";

    export let maxLength = 120;
    export let value = 'Lorem ipsum dolor sit amet.';

    const dispatch = createEventDispatcher();

    $: doubled = maxLength - value.length;
    const submit = () => dispatch('submit');
</script>

<div class="w-full flex flex-row" use:keyupEnter on:enter={() => submit()}>
    <textarea bind:value
              class="w-full h-24 sm:h-20 overflow-auto outline-0 p-4 rounded-l-xl" maxlength={maxLength}></textarea>
    <div class="bg-white text-gray-500 text-base sm:text-xl font-semibold p-4 sm:p-6 flex justify-center items-center rounded-r-xl">{doubled}</div>
</div>

<style>
    textarea {
        resize: none;
    }
    ::-webkit-scrollbar {
        width: 5px;
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
