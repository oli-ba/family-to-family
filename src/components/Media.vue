<template>
  <section class="md:py-28 pb-16">
    <h3 class="text-colorPrimary py-8 text-center">In The Media</h3>
    <div class="flex flex-wrap justify-center">
      <div class="rounded-lg overflow-hidden m-3 p-3" style="background-color: #57a9d3">
        <div class="flex justify-center items-center h-32">
          <RPLogo />
        </div>
        <audio
        controls
        src="/audio/20200812_rteradio1-todayradio-beiruttryi_c21817384_21817393_232_.mp3"
        type="audio/mpeg">
          Your browser does not support the <code>audio</code> element.
        </audio>
      </div>
      <div class="rounded-lg overflow-hidden m-3 p-3" style="background-color: #036">
        <div class="flex justify-center items-center h-32">
          <BBC4 />
        </div>
        <audio
        controls
        src="/audio/F2F-BBC-Radio4.mp3"
        type="audio/mpeg">
          Your browser does not support the <code>audio</code> element.
        </audio>
      </div>
    </div>
  </section>
</template>
<script>
import RPLogo from '~/assets/svgs/RP-Logo.svg?inline'
import BBC4 from '~/assets/svgs/BBC_Radio_4.svg?inline'
export default {
  components: {
    RPLogo,
    BBC4
  }
}
</script>