<template>
  <div>
    <h4>Devices</h4>
    <table class="table table-striped">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">Version</th>
          <th scope="col">UDID</th>
          <th scope="col">Status</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="device in getAllDevices"
          :key="device.id"
        >
          <th scope="row">{{ device.id }}</th>
          <td>{{ device.name }}</td>
          <td>{{ device.version }}</td>
          <td>{{ device.udid }}</td>
          <td>{{ device.status }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  computed: {
    getAllDevices() {
      return this.$store.getters.getAllDevices;
    }
  }
}
</script>
