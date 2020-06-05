<template>
  <div id="Main" @click="changeRouter">
  MAin
  </div>
</template>

<script>
export default {
  name: 'Main',
  data () {
    return {}
  },
  mounted() {
  },
  methods: {
      changeRouter () {
          this.$router.push({
              name: 'Single'
          })
      }
  },
}
</script>

<style>
</style>