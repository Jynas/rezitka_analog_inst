<script setup lang="ts">
const props = defineProps({
	comments: Array,
})
</script>

<template>
<div v-for="comment in comments" :key="comment?.id" class="mb-2">
	<div class="flex gap-1 align-items-center">
		<Avatar class="mr-2" shape="circle" :image="comment?.avatar" />
		<div class="flex flex-column">
			<span>
				{{ comment?.nickName }}
			</span>
			<span>
				{{ comment.text }}
			</span>
		</div>
	</div>

</div>
</template>

<style lang="scss">

</style>