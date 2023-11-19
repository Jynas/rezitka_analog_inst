<script setup lang="ts">
import { ref } from 'vue';
const itemsMenu = ref([
	{
		separator: true
	},
	{
		label: 'Главная',
		icon: 'pi pi-home',
		path: '/',
	},
	{
		label: 'Поисковый запрос',
		icon: 'pi pi-search',
		path: '/',
	},
	{
		label: 'Интересное',
		icon: 'pi pi-compass',
		path: '/',
	},
	{
		label: 'Сообщения',
		icon: 'pi pi-comment',
		path: '/messenger',
	},
	{
		label: 'Уведомления',
		icon: 'pi pi-bell',
		path: '/notifications',
	},
	{
		label: 'Создать',
		icon: 'pi pi-plus-circle',
		path: '/create',
	},
])
</script>

<template>
<main class="flex w-full">
	<Menu :model="itemsMenu" class="w-full md:w-15rem">
		<template #start>
        <span class="inline-flex align-items-center gap-1 px-2 py-2">
            <Avatar image="logo.svg" />
	          <span class="font-medium text-xl font-semibold">Rezitka<span class="text-primary">Inst</span></span>
        </span>
		</template>
		<template #item="{ item, props }">
			<router-link :to="item.path"  class="flex align-items-center" v-bind="props.action">
				<span :class="item.icon" />
				<span class="ml-2">{{ item.label }}</span>
				<Badge v-if="item.badge" class="ml-auto" :value="item.badge" />
				<span v-if="item.shortcut" class="ml-auto border-1 surface-border border-round surface-100 text-xs p-1">{{ item.shortcut }}</span>
			</router-link>
		</template>
		<template #end>
			<button class="relative overflow-hidden w-full p-link flex align-items-center p-2 pl-3 text-color hover:surface-200 border-noround">
				<Avatar image="/avatar/monkey.jpg" class="mr-2" shape="circle" />
				<span class="inline-flex flex-column">
                <span class="font-bold">Jynasex</span>
            </span>
			</button>
		</template>
	</Menu>
	<div class="flex w-full">
		<slot></slot>
	</div>
</main>
</template>

<style lang="scss">
.p-menu {
	height: 100vh;
}
</style>