<script lang="ts">
  export let message: string;
  export let name = 'Unknown'
</script>

<h1>Welcome to SvelteKit</h1>
<p>
  {message} {name}.
</p>
<form method="post">
  <div>
    <label>
      Enter your name:
      <input type="text" name="name"/>
    </label>
  </div>
  <div>
    <button type="submit">Go</button>
  </div>
</form>