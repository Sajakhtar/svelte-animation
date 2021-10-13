<script>
  import { drag } from './drag';
  import { fade } from 'svelte/transition';

  let isVisible = true;
  function handleDragStop(e) {
    if(e.detail.x > 300) {
      isVisible = false;
    }
  }
</script>

<!-- <div use:drag={{ direction: 'y' }} class="box">y direction</div> -->
<!-- <div use:drag={{ direction: 'x' }} class="box">x direction</div> -->

{#if isVisible}
  <div use:drag on:dragStop={handleDragStop} transition:fade class="box">x and y direction</div>
{/if}

<style>
  .box {
    background: var(--primary);
    box-shadow: var(--level-2);
    height: 100px;
    width: 100px;
  }
</style>
