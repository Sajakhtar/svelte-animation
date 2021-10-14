<script>
  import { crossfade, fade } from 'svelte/transition';
  import { flip } from 'svelte/animate';

  let todo = [
    { id: 1, isDone: false, text: "wake up" },
    { id: 2, isDone: false, text: "make coffee" },
    { id: 3, isDone: false, text: "go to work" },
    { id: 4 , isDone: false, text: "do laundry" },
    { id: 5 , isDone: false, text: "buy groceries" }
  ];

  const [ send, receive ] = crossfade({
    fallback: fade,
  });
</script>

<style>

  .card {
    width: 50%;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  li {
    margin: 0;
    padding: 0;
  }
</style>


<div class="flex">

  <div class="card">
    <h3>To Do</h3>
    <ul>
      {#each todo.filter(item => !item.isDone) as item (item.id)}
      <li animate:flip in:receive={{ key: item.id}} out:send={{ key: item.id}}>
        <label>
          <input bind:checked={item.isDone} type="checkbox">
          {item.text}
        </label>
      </li>
      {/each}
    </ul>
  </div>

  <div class="card">
    <h3>Done Tasks</h3>
    <ul>
      {#each todo.filter(item => item.isDone) as item (item.id)}
      <li animate:flip in:receive={{ key: item.id}} out:send={{ key: item.id}}>
        <label>
          <input bind:checked={item.isDone} type="checkbox">
          {item.text}
        </label>
      </li>
    {/each}
  </ul>
</div>

</div>
