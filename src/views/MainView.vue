<script setup lang="ts">
import { ref } from 'vue';
import PostComponent from "@/components/PostComponent.vue";
const comments = ref([
	{
		id: 0,
		avatar: '/avatar/monkey.jpg',
		nickName: 'Chelovek',
		text: 'Вот это обезьяна',
	},
	{
		id: 0,
		avatar: '/avatar/monkey.jpg',
		nickName: 'Chelovek',
		text: 'Вот это машина',
	}
]);
</script>

<template>
<div class="flex justify-content-center align-items-center gap-5 flex-column w-full mt-4">
	<PostComponent avatar="/avatar/monkey.jpg" nickName="Jynasex" picture="/avatar/monkey.jpg" description="Сейчас я уже дома" :comments="comments" />
	<PostComponent avatar="/avatar/monkey.jpg" nickName="Jynasex" picture="/avatar/monkey.jpg" description="Сейчас я уже дома" />
</div>
</template>

<style scoped>

</style>