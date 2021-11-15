<template>
  <v-main>
    <Parallax
      :title="title"
      :coverImg="coverImg"
      :createdDate="createdDate"
      :height="height"
    />
    <Breadcrumbs />
    <v-card>
      <v-toolbar color="pink" dense flat>
        <v-toolbar-title class="text-body-2">
          {{ createdDate }}
        </v-toolbar-title>
      </v-toolbar>
      <v-card-text v-html="content" />
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-icon large> mdi-chevron-right </v-icon>
      </v-card-actions>
    </v-card>
  </v-main>
</template>
<script>
import Carousel from "@/components/Carousel";
import Parallax from "@/components/Parallax";
import Breadcrumbs from "@/components/Breadcrumbs";
import Search from "@/components/Search";
export default {
  components: {
    Carousel,
    Parallax,
    Breadcrumbs,
    Search,
  },
  data() {
    return {
      url: "",
      title:
        "adadDucati Lenovo Team wins the title of best MotoGP team. All Ducati podium in MotoGP!",
      subheading: "Pecco Bagnaia wins ahead of Jorge Martin and Jack Miller.",
      coverImg: "https://i.imgur.com/MMcF4DH.jpg",
      height: 700,
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.<img
      class="postImg"    
      src="https://i.imgur.com/RKwlCIk.jpg"
      /><figcaption>Scale model of the
    Eiffel tower in
    Parc Mini-France</figcaption><img
      class="postImg"    
      src="https://i.imgur.com/RZcrSjV.jpg"
      /><figcaption>Scale model of the
    Eiffel tower in
    Parc Mini-France</figcaption>`,
      createdDate: "12:45 PM 25/10/2022",
      category: "",
    };
  },
};
</script>
<style>
.postImg {
  width: 100%;
  height: auto;
  padding-top: 20px;
  padding-bottom: 5px;
  border-radius: 8px !important;
  border-top-left-radius: 8px !important;
  border-top-right-radius: 8px !important;
  border-bottom-right-radius: 8px !important;
  border-bottom-left-radius: 8px !important;
}
figcaption{
  padding-bottom: 20px;
}
</style>
