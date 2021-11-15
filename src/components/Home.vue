<template>
  <v-lazy
    v-model="isActive"
    :options="{
      threshold: 0,
    }"
    min-height="200"
    transition="fade-transition"
  >
    <v-main>
      <Parallax
        title="Bob Vu"
        coverImg="https://i.imgur.com/MMcF4DH.jpg"
        createdDate="Vuetify"
        :height="500"
      />
      <Breadcrumbs />
      <v-card>
        <v-toolbar color="pink" dense flat>
          <v-toolbar-title class="text-body-2"> Posts </v-toolbar-title>
        </v-toolbar>
      </v-card>
      <div>
        <v-row>
          <v-col
            cols="12"
            xs="12"
            sm="6"
            md="4"
            lg="3"
            xl="3"
            v-for="(item, index) in posts"
            v-bind:key="index"
          >
            <v-card class="mx-auto my-5">
              <router-link
                :to="{
                  name: 'post',
                  params: { url: item.url },
                }"
              >
                <v-img
                  height="250"
                  :src="item.coverImg"
                  lazy-src="https://i.imgur.com/6Y7CxLO.png"
                >
                  <template v-slot:placeholder>
                    <v-row
                      class="fill-height ma-0"
                      align="center"
                      justify="center"
                    >
                      <v-progress-circular
                        indeterminate
                        color="white"
                      ></v-progress-circular>
                    </v-row>
                  </template>
                </v-img>
              </router-link>
              <router-link
                :to="{
                  name: 'post',
                  params: { url: item.url },
                }"
              >
                <v-card-title style="font-size: 19px" class="link"
                  ><div class="text ellipsis">
                    <span class="text-concat">{{ item.title }}</span>
                  </div></v-card-title
                >
              </router-link>

              <v-row align="center" class="mt-5"
                ><div class="grey--text px-8">
                  {{ item.createdDate }}
                </div>
              </v-row>
              <v-row align="center" class="ma-4 pb-5">
                <v-rating :value="4.5" color="amber" dense size="20" />
                <v-spacer />
                <FavoriteBtn />
              </v-row>

              <!-- {{ item.category }} -->
            </v-card>
          </v-col>
        </v-row>
      </div>
    </v-main>
  </v-lazy>
</template>
<script>
import Carousel from "@/components/Carousel";
import Parallax from "@/components/Parallax";
import Breadcrumbs from "@/components/Breadcrumbs";
import Search from "@/components/Search";
import FavoriteBtn from "@/components/FavoriteBtn";

import Post from "@/services/Post";

export default {
  components: {
    Carousel,
    Parallax,
    Breadcrumbs,
    Search,
    FavoriteBtn,
  },
  data() {
    return {
      posts: [],
      fav: true,
      isActive: false,
    };
  },
  created() {
    this.init();
  },
  methods: {
    init() {
      var result = Post.findAll();
      this.posts = result;
    },
  },
};
</script>
<style>
a {
  text-decoration: none;
}
a:hover {
  color: #e91e63 !important;
}
.text {
  position: relative;
  font-size: 18px;; /* Could be anything you like. */
}

.text-concat {
  position: relative;
  display: inline-block;
  word-wrap: break-word;
  overflow: hidden;
  max-height: 3.6em; /* (Number of lines you want visible) * (line-height) */
  line-height: 1.2em;
  text-align: justify;
  height: 3.6em;
}

.text.ellipsis::after {
  content: "";
  position: absolute;
  right: -12px;
  bottom: 7px;
}
</style>
