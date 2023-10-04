<template>
    <nuxt-link :to="props.to" class="btn btn-primary border-radius-0 text-white">
        <i class="tabler-icon">
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-circle-plus" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
                <path d="M9 12h6"></path>
                <path d="M12 9v6"></path>
            </svg>
        </i>
        <span>
            <slot></slot>
        </span>
    </nuxt-link>
</template>

<script setup>
    const props = defineProps(
        {
            to: {
                type: String || Object,
                required: true,
                default: () => '#'
            }
        }
    );
</script>w²