<template>
  <div >
	<v-btn  @click="$router.push('boi')" style="margin-right: 10px">Xem tử vi</v-btn>
	<v-btn @click="$router.push('hehe')"  style="margin-left: 10px">Game vòng xoay</v-btn>
  </div>
</template>
<script>

  export default {
    name: 'Hello',

    data() {
      return {
        coin: {}
      }
    },

    created() {

    },

    watch: {

    },

    methods: {

    }
  }
</script>