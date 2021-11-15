<template>
  <v-breadcrumbs :items="items"></v-breadcrumbs>
</template>

<script>
export default {
  data: () => ({
    items: [
      {
        text: "Home",
        disabled: false,
        href: "breadcrumbs_dashboard",
      },
      {
        text: "Category 1",
        disabled: false,
        href: "breadcrumbs_link_1",
      },
      {
        text: "Title of post",
        disabled: true,
        href: "breadcrumbs_link_2",
      },
    ],
  }),
};
</script>

<style>
</style>