import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    devices: [
      {
        id: 1,
        name: 'iPhone X',
        version: '12.3',
        udid: '123456',
      },
      {
        id: 2,
        name: 'Zenphone 3',
        version: 'Android 8',
        udid: '',
      },
      {
        id: 3,
        name: 'Pixel 4',
        version: 'Android 9',
        udid: '',
      }
    ],
    bookedDates: [
      {
        id: 1,
        date: '14/05/2019',
        deviceId: 1,
        fullName: 'C. Ronaldo',
      },
    ],
    today: '14/05/2019',
  },
  getters: {
    getBookedDates: (state) => state.bookedDates,
    getToday: (state) => state.today,
    getAllDevices: (state, getters) => {
      const result = state.devices.map((device) => ({
        ...device,
        status: getters.getBookedDates.some((e) => e.date === getters.getToday && e.deviceId === device.id) ? 'Busy' : 'Available',
      }));
      return result;
    }
  },
  mutations: {
    addBookedDate (state, payload) {
      const currentIdNumber = state.bookedDates[state.bookedDates.length - 1].id;
      state.bookedDates.push({
        id: currentIdNumber + 1,
        date: payload.date,
        deviceId: payload.deviceId,
        fullName: payload.name,
      })
    },
  },
  actions: {
    // Create actions
  },
});
