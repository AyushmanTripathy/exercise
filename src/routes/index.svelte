<script>
  let section,lists = new Array(9).fill({
    name: "pushups",
    duration: 40
  });

  function remove({ srcElement }) {
    lists.splice(srcElement.id,1);
    lists = lists
  }
</script>

<main>
  <section bind:this={section}>
    {#each lists as {name,duration},i}
      <div>
        <h1>{name}</h1>
        <h3>{duration}s</h3>
        <img src="/close.svg" alt="close" id={i} on:click={remove}>
      </div>
    {/each}
    <div>
      <input type="text" />
      <input type="number" />
    </div>
  </section>
</main>

<style lang="scss">
  @import "../global.scss";

  input {
    @include pri-fonts;

    background:none;
    outline: none;
    color: $sec;
    border: none;
    border-bottom: 1px solid $sec;
    font-size: 30px;
  }

  main {
    @include fullscreen;
    @include absolute;
    @include flex(column);
    @include center;
    @include pri-fonts;

    background:$bg;
    color:$sec;
  }

  section {
    @include flex(column);
    align-items: center;
    @include section(80vh,70vw);
    overflow: scroll;
    max-width: 800px;
    max-height: 900px;
    border: 1px solid;
  }

  div {
    display: grid;
    align-items: center;
    grid-template-columns: 5fr 2fr 1fr;
    grid-template-rows: 1fr;
    width: 90%;
    height: 10vh;
  }
</style>
