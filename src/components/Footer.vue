<template>
  <footer
    class="flex flex-col md:flex-row justify-between items-center text-colorSecondary bg-colorPrimary w-screen py-8"
  >
    <div class="mt-6 md:mt-0">
      &copy; {{ new Date().getFullYear() }} {{ $static.metadata.siteName }}.
    </div>
    <div class="w-full md:w-1/5 order-first md:order-last">
      <ul class="flex justify-around text-sm">
        <li>
          <a href="https://www.instagram.com/family_to_family_beirut/" title="Follow our updates on Instagram">
            <Instagram />Instagram
          </a>
        </li>
        <li>
          <a href="https://www.facebook.com/familytofamilybeirut/" title="Follow our updates on Facebook">
            <Facebook />Facebook
          </a>
        </li>
      </ul>
    </div>
  </footer>
</template>
<style lang='scss' scoped>
li { @apply list-none; }

footer svg { @apply w-6 h-6 m-auto; }

</style>
<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>
<script>
import Instagram from '~/assets/svgs/instagram.svg?inline'
import Facebook from '~/assets/svgs/facebook.svg?inline'

export default {
  name: "Footer",
  components: {
    Instagram,
    Facebook,

  }
}
</script>