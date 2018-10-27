<template>
	<div class="layout">
		<header class="header">
			<strong>
				<g-link :to="{ name: 'home' }">Gridsome</g-link>
			</strong>
			<nav class="nav">
				<g-link 
					:to="{ name: 'home' }" 
					class="nav__link">Home</g-link>
				<g-link 
					:to="{ name: 'about' }" 
					class="nav__link">About</g-link>
			</nav>
		</header>
		<slot></slot>
	</div>
</template>

<script>
export default {
  metaInfo: {
    htmlAttrs: {
      lang: "ja"
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" }
    ],
    link: [
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css?family=Noto+Sans+JP"
      }
    ]
  }
};
</script>

<style lang="scss">
body {
  padding: 0;
  margin: 0;
  font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, sans-serif;
  line-height: 1.5;
}

.layout {
  max-width: 600px;
  padding-right: 20px;
  padding-left: 20px;
  margin: 0 auto;

  .header {
    font-size: 4rem;
  }
}

.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 80px;
  margin-bottom: 20px;
}

.nav__link {
  margin-left: 20px;
  color: $color-primary;
}
</style>
