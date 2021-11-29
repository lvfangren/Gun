<template>
  <div class="test-class">
    <div class="input-container">
      <input
        v-for="data in inputData"
        :key="data.keyIndex"
        type="decimal"
        class="input-block"
        @focus="onFocusInputBlock(data.keyIndex)"
        @input="onInputBlock(data.keyIndex, $event)"
        maxlength="1"
        v-model="data.value"
        :ref="`inputBlock${data.keyIndex}`"
      />
    </div>
  </div>
</template>

<script>
const isNumber = (val) => {
  return (
    Object.prototype.toString.call(val) === '[object Number]' && !isNaN(val)
  );
};
export default {
  name: 'test',
  data() {
    return {
      current: 1,
      inputData: [
        {
          keyIndex: 1,
          value: ''
        },
        {
          keyIndex: 2,
          value: ''
        },
        {
          keyIndex: 3,
          value: ''
        },
        {
          keyIndex: 4,
          value: ''
        }
      ]
    };
  },
  created() {
    console.log(this.$refs, 'sss');
  },
  mounted() {
    console.log(this.$refs, 'sss');
    this.$refs[`inputBlock1`][0].focus();
  },
  watch: {
    inputData: {
      handler(value, oldVal) {
        if (value.every((item) => item.value && isNumber(Number(item.value)))) {
          console.log(1008611);
        }
      },
      deep: true
    },
    current: {
      handler(newVal, oldVal) {
        if (newVal === oldVal) {
          return;
        }
        if (newVal > 4) {
          this.$refs[`inputBlock${oldVal}`][0].blur();
          return;
        }
        this.$refs[`inputBlock${newVal}`][0].focus();
      },
      immediate: false
    }
  },
  methods: {
    onFocusInputBlock(index) {
      this.current = index;
    },
    onInputBlock(index, event) {
      if (!isNumber(Number(event?.data))) {
        return;
      }
      if (event.data) {
        this.current = index + 1;
      }
    }
  }
};
</script>

<style scoped>
.input-block {
  display: block;
  width: 14px;
  height: 14px;
  border: 1px solid black;
  padding: 0 4px;
  caret-color: red;
  box-sizing: content-box;
}
.input-block:focus {
  border: 1px solid skyblue;
}
.input-container {
  display: flex;
  width: 60%;
  justify-content: space-between;
}
</style>
