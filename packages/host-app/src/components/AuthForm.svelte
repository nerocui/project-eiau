<script lang="ts">
  export let handleSubmit;
  export let error;
  export let alias;
  export let pass;
  export let title;

</script>

<div>
  <h2>{title}</h2>
  <form on:submit|preventDefault={handleSubmit}>
    <input type="text" bind:value={alias}>
    <input type="password" bind:value={pass}>
    <button type="submit">Submit</button>
  </form>
  <p>{error}</p>
</div>
