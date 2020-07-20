<template>
  <div class="home">
  {{this.$route.params.userId}}
  {{this.$route.params.double}}
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
