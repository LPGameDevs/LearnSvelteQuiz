<script lang="ts">
  import {createEventDispatcher} from "svelte";

  let message = 'This is going to be <strong>great</strong>!'
  let code = '';

  const dispatch = createEventDispatcher();

  function startQuiz() {
    dispatch("click", {code});
  }
</script>

<div>
    <h1>Join a Quiz!</h1>

    <p>{@html message}</p>

    <input
            bind:value={code}
            placeholder="Enter Code"
    />

    <button on:click={startQuiz}>
        Join
    </button>
</div>
