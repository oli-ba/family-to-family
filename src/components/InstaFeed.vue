<template>
  <section class="md:py-28 pb-16">
    <h3 class="text-colorPrimary py-8 text-center">Latest From Instagram</h3>
    <div v-if="photos" class="flex m-auto">
      <div class="grid grid-cols-3 row-auto gap-3">
        <div v-for="(post, index) in photos.edges"
          :key="index">
          <a :href="`https://www.instagram.com/p/${post.node.shortcode}/`">
            <img
              :src="post.node.thumbnail_src"
              :alt="post.node.accessibility_caption"
            />
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped>
 img {
   /* width: 320px; */
   /* height: 320px; */
   /* object-fit: cover; */
 }
 .instaGrid {
    /* grid-template-columns: repeat(3, minmax(96px, 320px));
    grid-template-rows: repeat(auto, minmax(96px, 320px)); 
    column-gap: 10px;
    row-gap: 15px; */
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: minmax(100px, auto);
 }
</style>
<script>
import axios from 'axios'

export default {
    data () {
      return {
        photos: null
      }
    },
    async mounted () {
      try {
        const igProfileJson = await axios.get(
          `https://www.instagram.com/family_to_family_beirut/?__a=1`,
          // { headers: {
          //   'User-Agent': 'Mozilla/5.0 (X11; CrOS x86_64 8172.45.0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.64 Safari/537.36',
          //   } 
          // }
        )
        this.photos = igProfileJson.data.graphql.user.edge_owner_to_timeline_media

        // might want to log this during your testing so you can see the object you need to traverse
        console.log(igProfileJson)
      } catch (error) {
        console.log(error)
      }
    }
  }
</script>