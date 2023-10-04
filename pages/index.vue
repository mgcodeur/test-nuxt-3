<template>
  <div class="mt-5">
        <div class="container">
            <div class="d-flex flex-wrap justify-content-center justify-content-sm-between mb-4 align-items-center">
                <h4 class="mb-0">Historique des réclamations</h4>
                <AddButton to="#">
                    Nouvelle reclamation
                </AddButton>
            </div>
            <div class="card table-responsive">
                <div class="card-body">
                    <div class="d-flex flex-wrap justify-content-between mb-4 align-items-center">
                        <TableSearch
                            v-model="filters.search"
                            class="mb-4 mb-md-0"
                            placeholder="Lieu de l'évènement"
                            @input="useEventsStore().filterEvents(filters)"
                        />
    
                        <div class="d-flex">
                            <ExcelExportButton>
                                Exporter Sous Excel
                            </ExcelExportButton>
    
                            <div class="ms-4">
                                <BootstrapDatePicker
                                    output-format="dd/mm/yyyy"
                                    v-model="filters.date"
                                    @input="useEventsStore().filterEvents(filters)"
                                />
                            </div>
                        </div>
                    </div>
    
                    <table class="table table-borderless table-outlined table-striped">
                        <thead>
                            <tr>
                                <th>Type de reclamation</th>
                                <th>Date de l'évènement</th>
                                <th>Lieu de l'évènement</th>
                                <th>Heure de l'évènement</th>
                                <th>Pièce Jointe</th>
                                <th>Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr
                                v-for="event in events"
                                :key="`event_item_${event.id}`"
                            >
                                <td>{{ event.type }}</td>
                                <td>{{ event.date }}</td>
                                <td>{{ event.location }}</td>
                                <td>{{ event.hour }}</td>
                                <td>{{ event.file }}</td>
                                <td>{{ event.description }}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useEventsStore } from '~/store/api/event';

useAsyncData(async () => {
    await useEventsStore().getEvents();
})

const filters = reactive({
    date: '',
    search: ''
})

const events = computed(() => {
    return useEventsStore().events;
})
</script>