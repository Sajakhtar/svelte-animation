

<div class="modal">
  <div class="card">
    <button class="drawer--close">X</button>
    <slot />
  </div>
  <div class="background" />
</div>


<style>
  .modal {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    /* background-color: rgba(0,0,0,0.6); */
  }

  .card {
    position: relative;
    text-align: center ;
  }

  .background {
    /* background: linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.8)) ; */
    background: linear-gradient(142deg, var(--red) 3.62%, var(--green) 100%);
    opacity: 0.8;
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: -1;
  }
</style>
