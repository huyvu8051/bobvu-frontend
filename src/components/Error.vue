<template>
  <v-main>
    <Parallax
      :title="title"
      :coverImg="coverImg"
      :createdDate="createdDate"
      :height="height"
    />
  </v-main>
</template>

<script>
import Parallax from "@/components/Parallax";
export default {
  components: {
    Parallax,
  },
  data() {
    return {
      title:
        "404",
      createdDate: "Not found",
      coverImg: "",
      height: 100,
    };
  },
};
</script>

<style>
</style>