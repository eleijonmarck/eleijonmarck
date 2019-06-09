<template>
    <div class="error">
		<g-image alt="feelings" class="error__image" src="~/assets/images/crying_unicorn.gif" />

        <h3 >It's just a 404 Error!</h3>
        <p>
            What you’re looking for may have been misplaced in your Long Short Term Memory.
        </p>
    </div>
</template>
      
<script>
      export default {};
</script>

<style lang="scss">
.error {
	margin: 0 auto;
	max-width: 500px;
	text-align: center;
	padding: calc(var(--space) / 2) 0;

    &__image {
        float: left;
        width: 40%;
        padding: 30px;
        padding-top: 40px;
    }
}
</style>

