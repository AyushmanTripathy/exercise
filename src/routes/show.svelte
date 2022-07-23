<script>
  import { onMount } from "svelte";
  
  let started = false, paused = false;
  let bar,text,button,textElement,lists = [
    Add("tipewriter are good pushups",3),
    Add("Rest",2),
    Add("Diamonds",2)
  ];

  function play() {
    if (!started) {
      textElement.style.display = "block";
      button.classList.add("pause_button");
      started = true;
      return loop(0);
    }
    paused = paused ? false: true;
  }
  function Add(name,duration) {
    return { name,duration }
  }
  function loop(i) {
    const time = lists[i].duration * 1000;
    text = lists[i].name;
  
    // bar
    const count = 1000;
    let width = 0;

    const id = setInterval(() => {
      try {
        bar.style.width = width/10 + "%";
        if (!paused) width++;
        if (width == count) {
          clearInterval(id)
          bar.style.width = 0;
          if (i != lists.length - 1) loop(i+1);
          else {
            // loop ended
            button.classList.remove("pause_button");
            textElement.style.display = "none";
            bar.style.width = "100%";
            started = false;
          }
        }
      } catch (e) {
        console.error(e);
        clearInterval(id);
      }
    },time/count)
  }
</script>

<main>
  <h1 contenteditable
  autocomplete="off"
  autocorrect="off"
  bind:this={textElement}
  spellcheck="false" bind:innerHTML={text}> 
  </h1>
  <img src="/play.svg" bind:this={button} alt="play" on:click={play} />
</main>
<div bind:this={bar} ></div>

<style lang="scss">
  @import "../global.scss";
  main {
    @include fullscreen;
    @include flex(column);
    @include center;
    @include absolute;
    @include pri-fonts;

    background: $bg;
    color: $sec;
  }
  div {
    @include fixed;
    @include section(10vh,100vw);
    background: $hl;
    z-index: 2;
  }
  h1 {
    display:none;
    outline:none;
    font-size: 15vw;
    text-align:center;
  }
  img {
    @include section(50vh,50vh);
    max-height: 200px;
    max-width: 200px;
    transition: all 1s ease;
  }
</style>
