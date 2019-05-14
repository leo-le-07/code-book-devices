<template>
  <div class="row">
    <div class="col-sm-6">
      <DevicesTable />
    </div>
    <div class="col-sm-6">
      <h4>Register</h4>
      <form @submit.prevent="handleSubmit">
        <div class="form-group row">
          <div class="col-sm-6">
            <label for="select-device">Select device</label>
            <select class="form-control" id="select-device" v-model="selectedDeviceId">
              <option
                v-for="item in getDeviceOptions"
                :value="item.value"
                :key="item.value"
              >
                {{ item.label }}
              </option>
            </select>
          </div>
          <div class="col-sm-6">
            <label for="date">Date</label>
            <input
              type="text"
              class="form-control"
              id="date"
              placeholder="DD/MM/YYYY"
              v-model="date"
            >
          </div>
        </div>
        <div class="form-group row">
          <div class="col-sm-6">
            <label for="name">Name</label>
            <input
              type="text"
              class="form-control"
              id="name"
              placeholder="Please enter your name"
              v-model="name"
            >
          </div>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    </div>
  </div>
</template>

<script>
import DevicesTable from './DevicesTable';

export default {
  components: {
    DevicesTable,
  },
  data() {
    return {
      selectedDeviceId: this.$store.getters.getAllDevices[0].id,
      name: '',
      date: '',
    }
  },
  computed: {
    getDeviceOptions() {
      return this.$store.getters.getAllDevices.map((device) => ({
        value: device.id,
        label: `${device.name} - ${device.version}`,
      }))
    }
  },
  methods: {
    isDeviceUnavailable(deviceId, date) {
      return this.$store.getters.getBookedDates.some((bookedDate) => bookedDate.date === date && bookedDate.deviceId === deviceId);
    },
    resetForm() {
      this.selectedDeviceId = this.$store.getters.getAllDevices[0].id;
      this.name = '';
      this.date = '';
    },
    handleSubmit() {
      if (this.isDeviceUnavailable(this.selectedDeviceId, this.date)) {
        alert('Device not available on that date');
        return
      }
      this.$store.dispatch('addBookedDate', {
        date: this.date,
        deviceId: this.selectedDeviceId,
        name: this.name,
      })
      this.resetForm();
    }
  }
}
</script>
