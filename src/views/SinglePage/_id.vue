<template>
  <div class="home">
  {{this.$route.params.id}}
  </div>
</template>

<script>
export default {
  name: "Home",
  mounted() {
    console.log(this.$route.params.id)
  },
};
</script>
