<template>
  <v-app-bar app hide-on-scroll>
    <v-app-bar-nav-icon @click="drawer"></v-app-bar-nav-icon>
    <router-link :to="{ name: 'home' }">
      <v-img
        class="mx-2"
        src="https://i.imgur.com/PiabvKC.png"
        max-height="150"
        max-width="150"
        contain
      ></v-img
    ></router-link>
    <v-spacer></v-spacer>

    <AccountPanel />
  </v-app-bar>
</template>

<script>
import AccountPanel from "@/components/AccountPanel";

export default {
  components: {
    AccountPanel,
  },
  data: () => ({
    icons: ["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-instagram"],
  }),
  methods: {
    drawer() {
      this.$eventBus.$emit("drawer");
    },
  },
};
</script>

<style></style>
