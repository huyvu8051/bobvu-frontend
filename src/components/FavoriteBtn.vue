<template>
  <v-tooltip top>
    <template v-slot:activator="{ on, attrs }">
      <v-btn
        v-bind="attrs"
        v-on="on"
        :class="fav ? 'red--text' : ''"
        icon
        @click="fav = !fav"
      >
        <v-icon>mdi-heart</v-icon>
      </v-btn>
    </template>
    <span>Add to favorite</span>
  </v-tooltip>
</template>

<script>
export default {
  data() {
    return {
      fav: true,
    };
  },
};
</script>

<style>
</style>