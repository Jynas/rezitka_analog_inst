<script setup lang="ts">
	import { ref } from 'vue';
	import CommentsComponent from "@/components/CommentsComponent.vue";
	const props = defineProps({
		avatar: String,
		nickName: String,
		picture: String,
		description: String,
		comments: Array,
	})
	console.log(props)
	const comment = ref();
</script>

<template>
<Card>
	<template #header>
		<div class="flex justify-content-start align-items-center ml-4">
			<Avatar :image="props.avatar" class="mr-2" shape="circle" size="large" />
			{{ props.nickName }}
		</div>
	</template>
	<template #title>
		<Image :src="props.picture" alt="Image" width="450" preview />
	</template>
	<template #subtitle>
		{{ props.description }}
	</template>
	<template #content>
		<p>Комментарии</p>
		<div class="flex gap-1 flex-column">
			<CommentsComponent :comments="props.comments" />
			<div class="flex align-items-center w-full">
				<Textarea v-model="comment" autoResize rows="1" class="w-full" placeholder="Введите комментарий" />
				<Button icon="pi pi-send" text />
			</div>
		</div>
	</template>
</Card>
</template>

<style scoped lang="scss">

</style>