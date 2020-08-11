<template>
  <section>
    <div v-if="photos" class="grid grid-cols-3 gap-4">
      <div v-for="(post, index) in photos.edges"
        :key="index">
        <a :href="`https://www.instagram.com/p/${post.node.shortcode}/`">
          <img class="object-contain"
            :src="post.node.thumbnail_src"
            :alt="post.node.accessibility_caption"
          />
        </a>
      </div>
    </div>
  </section>
</template>
<style scoped>

</style>
<script>
import axios from 'axios'

export default {
    name: 'Footer',
    data () {
      return {
        photos: null
      }
    },
    async mounted () {
      try {
        const igProfileJson = await axios.get(
          `https://www.instagram.com/family_to_family_beirut/?__a=1`
        )
        this.photos = igProfileJson.data.graphql.user.edge_owner_to_timeline_media

        // might want to log this during your testing so you can see the object you need to traverse
        console.log(this.photos)
      } catch (error) {
        console.log(error)
      }
    }
  }

</script>