<template>
	<div class="author">

		<g-image alt="Author image" class="author__image" src="~/assets/images/unicorn.gif" width="180" height="180" blur="5" />

		<h1 v-if="showTitle" class="author__site-title">
			{{ $static.metadata.siteName }}
		</h1>

		<p class="author__intro">
				data ・ ml ・ philosophy
		</p>

		<p class="author__links">
			<a href="https://github.com/eleijonmarck">
				<font-awesome :icon="['fab', 'github']"/>
				Github
			</a>
			<a href="https://twitter.com/eleijonmarck">
				<font-awesome :icon="['fab', 'twitter']"/>Twitter
			</a>
		</p>

	</div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
export default {
	props: ['showTitle']
}
</script>

<style lang="scss">
.author {
	margin: 0 auto;
	max-width: 500px;
	text-align: center;
	padding: calc(var(--space) / 2) 0;

	&__image {
		border-radius: 100%;
		width: 90px;
		height: 90px;
		margin-bottom: 1em;
	}

	&__intro {
		opacity: .8;
		font-weight: normal;
		font-size: 0.95em;
		line-height: 0.5;
		color: #999;
	}

	&__site-title {
		font-size: 1.5em;
		color:coral;
	}

	&__links {
		margin-top: -.5em;
		a {
			margin: 0 .5em;
		}
		font-size: 0.65em;
	}
}
</style>