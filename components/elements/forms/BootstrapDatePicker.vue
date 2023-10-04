<template>
    <input
        type="date"
        class="form-control border-radius-0"
        @input="$emit('update:modelValue', useBootstrapDatePicker(props).formatValue($event))"
    />
</template>

<script setup>
    import { useBootstrapDatePicker } from '~/composables/elements/BootstrapDatePicker';

    const props = defineProps({
        outputFormat: {
            type: String,
            default: 'dd/mm/yyyy'
        }
    });
</script>