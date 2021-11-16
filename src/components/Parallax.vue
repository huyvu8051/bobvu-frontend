<template>
  <v-parallax class="rounded-lg" :height="height" :src="coverImg" lazy>
    <v-row align="center" justify="center">
      <v-col class="text-center" cols="12">
        <h1 class="text-h2 font-weight-thin mb-4 shadow">{{ title }}</h1>
        <h4 class="subheading shadow">{{ createdDate }}</h4>
      </v-col>
    </v-row>
  </v-parallax>
</template>

<script>
export default {
  props: {
    coverImg: String,
    title: String,
    createdDate: String,
    height: {
      default: 200,
      type: Number,
    },
  },
};
</script>

<style>
.shadow {
  text-shadow:  1px 1px 8px #000000;
}
</style>