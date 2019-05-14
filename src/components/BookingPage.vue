<template>
  <div class="row">
    <div class="col-sm-6">
      <DevicesTable />
    </div>
    <div class="col-sm-6">Form</div>
  </div>
</template>

<script>
import DevicesTable from './DevicesTable';

export default {
  components: {
    DevicesTable,
  }
}
</script>
