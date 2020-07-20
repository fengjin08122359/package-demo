<template>
  <div class="home">
  {{homeindex}}
  {{aboutindex}}
  </div>
</template>

<script>
// @ is an alias to /src
import {mapState} from 'vuex'

export default {
  name: "Home",
  computed: {
    ...mapState({
      homeindex:(state) => {
        console.log(state)
        return state.homepageHome.index
      },
      aboutindex:(state) => state.homepageAbout.index,
    }) 
  },
  mounted() {
    console.log(process.env)
  },
};
</script>
