<template>
    <div class="mb-4 mb-md-0 d-flex search-form-group">
        <input
            type="text"
            class="form-control border-radius-0 ps-5"
            @input="$emit('update:modelValue', $event.target.value)"
            :placeholder="props.placeholder"
        >
        <div class="search-icon">
            <i class="tabler-icon">
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-search" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"></path>
                    <path d="M21 21l-6 -6"></path>
                </svg>
            </i>
        </div>
    </div>
</template>

<script setup>
    const props = defineProps({
        placeholder: {
            type: String,
            required: true,
            default: () => 'Search'
        }
    });
</script>