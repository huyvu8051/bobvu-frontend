<template>
  <v-app>
    <Header />
    <Navigation />
    <Particles />
    <v-container fluid fill-height rounded-lg>
      <v-layout align-center justify-center>
        <v-flex xs12 sm12 md12 lg10 xl10>
          <router-view class="rounded-lg"></router-view>
        </v-flex>
      </v-layout>
    </v-container>
    <Footer />
    <GameNofication />
  </v-app>
</template>

<script>
import GameNofication from "@/components/GameNofication";
import Navigation from "@/components/Navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Particles from "@/components/Particles";

import Parallax from "@/components/Parallax";
import Breadcrumbs from "@/components/Breadcrumbs";

export default {
  name: "App",
  components: {
    GameNofication: GameNofication,
    Navigation: Navigation,
    Header: Header,
    Footer: Footer,
    Particles: Particles,
    Parallax: Parallax,
    Breadcrumbs: Breadcrumbs,
  },
  data: () => ({}),
};
</script>

<style scoped>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
