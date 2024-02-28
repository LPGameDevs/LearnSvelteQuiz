<script lang="ts">
    import {createEventDispatcher} from "svelte";

    export let label: string = '';
    export let isCorrect: boolean = false;
    export let showAnswer: boolean = false;
    export let canSelect: boolean;

    let selected = false;

    const dispatch = createEventDispatcher();


    function selectAnswer() {
      selected = true;
      dispatch('selected')
    }
</script>

<button
        disabled={!canSelect}
        class:selected={selected}
        class:incorrect={selected && showAnswer && !isCorrect}
        class:correct={showAnswer && isCorrect}
        on:click={selectAnswer}
>
    {label}
</button>

<style>
    .selected {
        background-color: orangered;
    }

    .correct {
        background-color: #4caf50;
    }

    .incorrect {
        background-color: red;
    }
</style>