<script lang="ts">
  import Join from './pages/Join.svelte'
  import Quiz from './pages/Quiz.svelte'
  import Summary from './pages/Summary.svelte'
  import {getQuestion} from './utils/QuestionRequest'

  let urlParams = new URLSearchParams(window.location.search);
  const hasCode = urlParams.has('code');

  let code: string | null = hasCode ? urlParams.get('code') : null;
  let isComplete: boolean = false;

  // This message will only show if the code changes.
  $: console.log(`the code is ${code}`);

  interface QuestionData {
    question: string;
    answers: ({     label: string;     isCorrect?: boolean;   })[];
  }

  // @ts-ignore
  // let questionRequest: Promise<QuestionData> = async function () {};
  let questionRequest = null;


  function joinGame(data: CustomEvent) {
    console.log('joined');

    // @todo Fix type.
    // questionRequest: Promise<QuestionData> = getQuestion();
    questionRequest = getQuestion();

    code = data.detail.code;
  }
</script>

<main>
    {#if (!code)}
        <Join on:click={joinGame}/>
    {:else if isComplete }
        <Summary/>
    {:else}
        {#await questionRequest}
            <p>...waiting</p>
        {:then questionData}
            <Quiz
                    code={code}
                    {...questionData}
            />
        {:catch error}
            <p style="color: red">{error.message}</p>
        {/await}
    {/if}

</main>

<style>

</style>
