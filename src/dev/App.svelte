<script lang="ts">
  import ResizeObserver from "../lib/ResizeObserver.svelte";
  import allLanguages from "./languages.json";

  let count: number = 20;
  let languages: string[] = [];
  let logs: string[] = [];

  $: languages = allLanguages.slice(0, count);
</script>

<main>
  <h1>Svelte Resize Observer</h1>
  <h4>Element resize observer to Svelte</h4>
  <div class="root">
    <div class="card">
      <div class="list">
        {#each languages as language}
          <div class="item">{language}</div>
        {/each}
        <ResizeObserver
          on:resize={(element) =>
            (logs = [
              ...logs,
              `Resize: ClienteHeight: ${element.detail.clientHeight} / ScrollHeight: ${element.detail.scrollHeight}`,
            ])}
        />
      </div>
    </div>
    <div class="card" style="padding:20px">
      <button on:click={() => count++}>Add</button>
      <button on:click={() => count--}>Remove</button>
      <br />
      <h3>Resizes</h3>
      <ul>
        {#each logs as log}
          <li>{log}</li>
        {/each}
      </ul>
    </div>
  </div>
</main>

<style>
  main {
    display: flex;
    width: 100%;
    min-height: 100%;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 16px;
    box-sizing: border-box;
  }

  h1 {
    color: white;
    text-shadow: 1px 1px 2px black;
    margin: 0;
    text-align: center;
  }

  h4 {
    color: white;
    margin: 10px 0px;
    margin-bottom: 40px;
  }

  .root {
    width: 100%;
    display: flex;
    justify-content: center;
  }

  .card {
    box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
      0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
    border-radius: 2px;
    width: 400px;
    max-width: 40%;
    background-color: white;
    box-sizing: border-box;
    min-height: 400px;
    max-height: 400px;
    overflow-x: scroll;
    padding: 0;
    margin-right: 40px;
  }

  .card:last-child {
    margin-right: 0px;
  }

  .list {
    width: 100%;
  }

  .item {
    padding: 15px;
    box-sizing: border-box;
    transition: 0.2s all;
    font-size: 14px;
  }

  .item:hover {
    background-color: #eeeeee;
  }

  button {
    padding: 10px 20px;
    width: auto;
  }

  ul {
    font-size: 12px;
    margin: 0px;
  }

  @media screen and (max-width: 800px) {
    .root {
      flex-direction: column;
    }

    .card {
      max-width: 100%;
      margin-right: 0px;
      margin-bottom: 16px;
    }
  }
</style>
