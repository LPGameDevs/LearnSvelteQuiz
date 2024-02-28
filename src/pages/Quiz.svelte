<script lang="ts">
  import Answer from "../componenets/Answer.svelte";

  export let question = 'Question time';
  export let answers = [
    {label: 'Nothing 1', isCorrect: true},
    {label: 'Nothing 2'},
    {label: 'Nothing 3'},
    {label: 'Nothing 4'},
  ];

</script>

<div>
    <h1>Its Quiz Time</h1>

    <strong>{question}</strong>

    <div>
        {#each answers as answer, key (key)}
            <Answer
                    {...answer}
            />


        {/each}
    </div>
</div>
