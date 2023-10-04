import { defineStore } from 'pinia';
import { fakerEvents } from '~/factories/fakeEvents';

export const useEventsStore = defineStore('events', {
    state: () => ({
        _events: [],
        _originalEvents: []
    }),

    getters: {
        events: (state) => state._events
    },

    actions: {
        async getEvents() {
            this._originalEvents = this._events = await fakerEvents;
            return this._events;
        },

        async filterEvents(payload) {
            const dateValue = payload.date || null;
            const searchValue = payload.search.toLowerCase() || null;
            const filtersIsEmpty = !dateValue && !searchValue;

            if(filtersIsEmpty) {
                this._events = this._originalEvents
                return false;
            }

            this._events = await this._originalEvents.filter(event => {
                return event.type.toLowerCase().includes(searchValue) || 
                event.description.toLowerCase().includes(searchValue) || 
                event.location.toLowerCase().includes(searchValue) || 
                event.date.includes(dateValue)
            });
        }
    }
});