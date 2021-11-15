<template>
  <v-navigation-drawer v-model="drawer" app>
    <v-list nav class="d-flex flex-column" height="100%">
      <v-list-item-group>
        <DigitalClock />

        <v-list-item
          v-for="item in navigators"
          :key="item.to"
          :to="{ name: item.to }"
          dense
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-title>{{ item.text }}</v-list-item-title>
        </v-list-item>
      </v-list-item-group>
      <v-list-item-group class="mt-auto"
        ><v-list-item disabled dense>
          <v-list-item-title>BobVu.vn</v-list-item-title>
        </v-list-item></v-list-item-group
      >
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import DigitalClock from "@/components/DigitalClock.vue";
export default {
  components: {
    DigitalClock,
  },
  data: () => ({
    drawer: false,
    navigators: [
      {
        text: "Home",
        to: "home",
        icon: "mdi-home",
      },
      {
        text: "Account",
        to: "account",
        icon: "mdi-account",
      },
    ],
  }),
  created() {
    this.$eventBus.$on("drawer", () => {
      this.drawer = !this.drawer;
    });
  },
};
</script>

<style scoped>
.v-list-item {
  flex: 0;
}
</style>