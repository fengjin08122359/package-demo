<template>
  <div id="Single" @click="changeRouter">
  Single
  </div>
</template>

<script>
export default {
  name: 'Single',
  data () {
    return {}
  },
  mounted() {
  },
  methods: {
      changeRouter () {
          this.$router.push({
              name: 'Main'
          })
      }
  },
}
</script>

<style>
</style>