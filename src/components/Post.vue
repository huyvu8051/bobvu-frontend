<template>
  <v-main>
    <Parallax
      :title="post.title"
      :coverImg="post.coverImg"
      :createdDate="post.createdDate"
      :height="post.height"
    />
    <Breadcrumbs />
    <v-card>
      <v-toolbar color="pink" dense flat>
        <v-toolbar-title class="text-body-2">
          {{ post.subheading }}
        </v-toolbar-title>
      </v-toolbar>
      <v-card-text v-html="post.content" />
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
import Post from "@/services/Post";
export default {
  components: {
    Carousel,
    Parallax,
    Breadcrumbs,
    Search,
  },
  data() {
    return {
      post: {
        url: "",
        title: "Title!",
        subheading: "Subheading",
        coverImg: "https://i.imgur.com/MMcF4DH.jpg",
        height: 700,
        content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.`,
        createdDate: "12:45 PM 25/10/2022",
        category: "",
      },
    };
  },
  created() {
    this.init();
  },
  methods: {
    init() {
      var url = this.$route.params.url;
      // console.log(url);
      try {
        var result = Post.findOneByUrl(url);
        // console.log(result);

        this.post = result;
      } catch (error) {
        this.$router.push({
          name: "404",
        });
      }
    },
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
figcaption {
  padding-bottom: 20px;
}
</style>
