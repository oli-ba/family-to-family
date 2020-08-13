<template>
  <p class="font-bold mb-6" style="height:30px">{{fundProgress}}</p>
</template>
<script>
import axios from 'axios'
import cheerio from 'cheerio'

export default {
    data () {
      return {
        fundProgress: null,
        fundTarget: null,
        fundDoners: null
      }
    },
    mounted () {
      try {
        axios.get('https://cors-anywhere.herokuapp.com/https://www.gofundme.com/f/sakaan-family-beirut-emergency-fund').then(resp => {
            // console.log(resp.data);
          const $ = cheerio.load(resp.data);
          this.fundProgress = $("h2.m-progress-meter-heading").text();
        });
      } catch (error) {
        console.log('error: ' + error)
      }
    }
  }
</script>