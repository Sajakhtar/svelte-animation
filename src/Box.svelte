<script>
  import { drag } from './drag';
</script>

<div use:drag={{ direction: 'y' }} class="box">y direction</div>
<div use:drag={{ direction: 'x' }} class="box">x direction</div>
<div use:drag class="box">x and y direction</div>

<style>
  .box {
    background: var(--primary);
    box-shadow: var(--level-2);
    height: 100px;
    width: 100px;
  }
</style>
