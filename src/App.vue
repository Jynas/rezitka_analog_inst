<script setup lang="ts"></script>

<template>
	<component :is="$route.meta?.layout || 'div'">
		<router-view />
	</component>

</template>

<style lang="scss">
@import 'primeflex/primeflex.scss';
body {
	margin: 0;
}
</style>

