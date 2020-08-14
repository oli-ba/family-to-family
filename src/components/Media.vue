<template>
  <section class="md:py-28 pb-16">
    <h3 class="text-colorPrimary py-8 text-center">In The Media</h3>
    <div class="flex flex-wrap justify-center">
      <div class="rounded-lg overflow-hidden m-3 p-3" style="background-color: #57a9d3">
        <div class="flex justify-center items-center h-32">
          <RPLogo />
        </div>
        <!-- <av-line
          :line-width="2"
          line-color="#fff"
          audio-src="https://static.olivierbalaguer.com/audio/20200812_rteradio1-todayradio-beirut.mp3"
        ></av-line> -->
        <audio
        controls
        src="https://static.olivierbalaguer.com/audio/20200812_rteradio1-todayradio-beirut.mp3"
        type="audio/mpeg">
          Your browser does not support the <code>audio</code> element.
        </audio>
      </div>
      <div class="rounded-lg overflow-hidden m-3 p-3" style="background-color: #036">
        <div class="flex justify-center items-center h-32">
          <BBC4 />
        </div>
        <!-- <av-line
          :line-width="2"
          line-color="#fff"
          audio-src="https://static.olivierbalaguer.com/audio/F2F-BBC-Radio4.mp3"
        ></av-line> -->
        <audio
        controls
        src="https://static.olivierbalaguer.com/audio/F2F-BBC-Radio4.mp3"
        type="audio/mpeg">
          Your browser does not support the <code>audio</code> element.
        </audio>
      </div>
    </div>
  </section>
</template>
<style scoped>
audio {margin: auto}
</style>
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