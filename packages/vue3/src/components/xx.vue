<template>
  <div class="hover:bg-red-700">
      1
  </div>
  <div class="order-2">
      2
  </div>
  <div>
      {{ss}}
  </div>
</template>

<script>
import { defineCustomElement } from 'vue';
export default {
    name: 'xx',
    data() {
        return {
            ss: 'csacs'
        }
    }
}
</script>

<style>

</style>