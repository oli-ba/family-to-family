<template>
  <section class="mx-16">
    <!-- <h2>Latest Instagram Feed</h2> -->
    <div class="grid grid-cols-3 gap-4">
      <div v-for="edge in $static.allInstagramPhoto.edges" :key="edge.node.id" class="bg-gray-400 ">
        <a :href="edge.node.is_video ? edge.node.video_url : edge.node.display_url" target="_blank" rel="noopener noreferrer">
          <!-- <img :src="[!edge.node.is_video ? edge.node.video_url : edge.node.display_url]" alt="" class="object-contain"> -->
          <img :src="edge.node.thumbnail_src" :alt="!edge.node.accessibility_caption == '' ? edge.node.accessibility_caption : 'Photo by @family_to_family_beirut'" class="object-contain">
        </a>
      </div>
    </div>
  </section>
</template>
<style scoped>

</style>
<static-query>
query {
  allInstagramPhoto {
    edges {
      node {
        display_url
        video_url
        thumbnail_src
        is_video
        accessibility_caption
        edge_media_to_caption {
          edges {
            node {
              text
            }
          }
        }
      }
    }
  }
}
</static-query>