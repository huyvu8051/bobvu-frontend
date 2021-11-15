<template>
  <v-list-item disabled>
    <v-layout align-center justify-center>
      <v-flex xs12 sm12 md8>
        <v-list-item-title class="font-weight-bold text-lg-h6">{{ time }}</v-list-item-title>
        <v-list-item-title>{{ date }}</v-list-item-title>
      </v-flex>
    </v-layout>
  </v-list-item>
</template>

<script>
export default {
  data: () => ({
    time: "",
    date: "",
    week: ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"],
  }),
  mounted() {
    this.run();
  },
  methods: {
    run() {
      var timerID = setInterval(this.updateTime, 1000);
    },
    updateTime() {
      var cd = new Date();
      this.time =
        this.zeroPadding(cd.getHours(), 2) +
        ":" +
        this.zeroPadding(cd.getMinutes(), 2) +
        ":" +
        this.zeroPadding(cd.getSeconds(), 2);
      this.date =
        this.zeroPadding(cd.getFullYear(), 4) +
        "-" +
        this.zeroPadding(cd.getMonth() + 1, 2) +
        "-" +
        this.zeroPadding(cd.getDate(), 2) +
        " " +
        this.week[cd.getDay()];
    },
    zeroPadding(num, digit) {
      var zero = "";
      for (var i = 0; i < digit; i++) {
        zero += "0";
      }
      return (zero + num).slice(-digit);
    },
  },
};
</script>

<style scoped>
</style>