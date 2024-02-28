<script lang="ts">
  import { onMount } from 'svelte';
  import Answer from "../componenets/Answer.svelte";
  import Timer from "../componenets/Timer.svelte";

  export let code: string|null = null;
  export let question = 'Question time';
  export let answers = [
    {label: 'Nothing 1', isCorrect: true},
    {label: 'Nothing 2'},
    {label: 'Nothing 3'},
    {label: 'Nothing 4'},
  ];

  let canSelect = true;

  function solve() {
    showAnswer = true;
    canSelect = false;
    countdown = null;
  }

  function disableOptions() {
    canSelect = false;
  }

  let countdown: number|null = 5;
  let showAnswer: boolean = false;
  // let urlParams = new URLSearchParams(window.location.search);

  // if (code && !urlParams.has('code')) {
  //   console.log(code);
  //   urlParams.set('code', code);
  //   window.location.search = urlParams;
  // }
</script>

<div>

    <h1>Its Quiz Time</h1>

    {#if countdown}
        <Timer
            on:finished={() => {
               solve();
            }}
            {countdown}
        />
    {/if}

    <p>
        <strong>{question}</strong>
    </p>

    <div>
        {#each answers as answer, key (key)}
            <Answer
                    on:selected={disableOptions}
                    showAnswer={showAnswer}
                    canSelect={canSelect}
                    {...answer}
            />


        {/each}
    </div>
</div>
