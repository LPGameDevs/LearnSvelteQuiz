<script lang="ts">
    export let label: string = '';
    export let isCorrect: boolean = false;

    function checkAnswer() {
      if (isCorrect) {
        console.log('true');
      }
      else {
        console.log('false');
      }
    }
</script>

<button on:click={checkAnswer}>
    {label}
</button>