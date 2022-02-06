<template>
	<div id="nav">
		<router-link to="/">{{ $t('home') }}</router-link> |
		<router-link to="/about">{{ $t('about') }}</router-link>
		<div>
			<a class="flag" href="#" @click="setLocale('en')"
				><flag iso="gb"></flag
			></a>
			<a class="flag" href="#" @click="setLocale('pt')"
				><flag iso="ao"></flag
			></a>
		</div>
	</div>
	<router-view />
</template>

<script>
export default {
	name: 'app',
	components: {},
	methods: {
		setLocale(locale) {
			import(`../src/langs/${locale}.json`).then(msgs => {
				this.$i18n.setLocaleMessage(locale, msgs);
				this.$i18n.locale = locale;
			});
			// this.$i18n.locale = locale;
		}
	}
};
</script>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
}

#nav {
	padding: 30px;
}

#nav a {
	font-weight: bold;
	color: #2c3e50;
}

#nav a.router-link-exact-active {
	color: #42b983;
}
.flag {
	margin: 0.1rem;
	font-size: 1.8rem;
}
</style>
