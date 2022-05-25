<script lang="ts">
	export let kittenName: string;
	export let testIfPropOverriddenInGet: string;
	export let method: string;
</script>

<h1>Welcome to SvelteKit</h1>

<p>
	Hello {kittenName}.
</p>
<form method="post">
	<div>
		<label>
			Kitten Name:
			<input type="text" name="kittenName" value={kittenName} />
		</label>
	</div>
	<div>
		<button type="submit">Save</button>
	</div>
</form>

<p>
	Property that might be overridden in the get method: {testIfPropOverriddenInGet}
</p>
<p>
	Request method according to server: {method}
</p>
