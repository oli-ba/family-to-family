<template>
  <Layout class="bg-colorSecondary">
    <!-- <Header v-show="hasName == false" /> -->
    <section class="hero text-colorPrimary flex flex-col justify-center md:items-center pb-0 h-full">
      <div class="md:py-12 md:w-4/5 md:text-center">
        <!-- <p class="font-bold">
          &mdash; Hello <span v-show="hasName == true">{{name}},</span> I'm o·li·vyé. 
        </p> -->
        <h1 class="font-display leading-tight mb-6">
          Family to Family <br class="hidden md:block">Beirut Relief Fund
        </h1>
        <!-- <h2 class="leading-tight mb-6">Beirut Relief Fund</h2> -->
        <p class="font-body lg:w-55ch md:w-full md:m-auto">
          Sarah &amp; Family are getting aid directly to families in dire need of help today. Donate &amp; keep up with our progress&nbsp;here.
        </p>

        <Stats />
    
        <a 
          href="https://www.gofundme.com/f/sakaan-family-beirut-emergency-fund/donate" 
          class="cta text-colorSecondary bg-colorPrimary text-xl">
          Donate Now
        </a>
        <!-- <a href="https://gf.me/u/ynbtmw" class="cta text-colorSecondary bg-colorPrimary mt-2 mb-16 text-xl">Donate Now</a> -->

      </div>
    </section>
    <InstaFeed />
    <Media />
    <Partnerships />
    <Testimonial />
  </Layout>
</template>
<style>
span.cursor {
  display: inline-block;
  margin-left: 3px;
  width: 4px;
  background-color: theme('colors.colorPrimary');
  animation: cursorBlink 1s infinite;
}
span.cursor.typing {
  animation: none;
}
@keyframes cursorBlink {
  49% { background-color: theme('colors.colorPrimary'); }
  50% { background-color: transparent; }
  99% { background-color: transparent; }
}
.fade-in-out {
  opacity: 0;
  animation: in-out 3s ease;
}
@keyframes in-out {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
</style>
<script>
import Partnerships from "~/components/Partnerships.vue";
import Testimonial from "~/components/Testimonial.vue";
import InstaFeed from "~/components/InstaFeed.vue";
import Media from "~/components/Media.vue";
import Stats from "~/components/Stats.vue";

export default {
  components: {
    Partnerships,
    Testimonial,
    InstaFeed,
    Media,
    Stats
  },
  beforeCreate() {
    // this.$store.commit('setName', this.$route.query.hello)
    if (this.$route.query.hello) {
      this.name = this.$route.query.hello;
    }
  },
  created() {
    setTimeout(this.typeText, this.newTextDelay + 200);
    if (this.$route.query.hello) {
      this.hasName = true;
    }
  },
  data() {
    return {
      copyEmail: "oli@olivierbalaguer.com",
      hasName: false,
      name: this.$route.query.hello,
      message: null,
      hasCopied: false,
      typeValue: "",
      typeStatus: false,
      typeArray: ["Designer", "Facilitator", "Specialist"],
      typingSpeed: 125,
      erasingSpeed: 100,
      newTextDelay: 1250,
      typeArrayIndex: 0,
      charIndex: 0
    };
  },
  methods: {
    typeText() {
      if (this.charIndex < this.typeArray[this.typeArrayIndex].length) {
        if (!this.typeStatus) this.typeStatus = true;
        this.typeValue += this.typeArray[this.typeArrayIndex].charAt(
          this.charIndex
        );
        this.charIndex += 1;
        setTimeout(this.typeText, this.typingSpeed);
      } else {
        this.typeStatus = false;
        setTimeout(this.eraseText, this.newTextDelay);
      }
    },
    eraseText() {
      if (this.charIndex > 0) {
        if (!this.typeStatus) this.typeStatus = true;
        this.typeValue = this.typeArray[this.typeArrayIndex].substring(
          0,
          this.charIndex - 1
        );
        this.charIndex -= 1;
        setTimeout(this.eraseText, this.erasingSpeed);
      } else {
        this.typeStatus = false;
        this.typeArrayIndex += 1;
        if (this.typeArrayIndex >= this.typeArray.length)
          this.typeArrayIndex = 0;
        setTimeout(this.typeText, this.typingSpeed + 1000);
      }
    }
  },
  metaInfo: {
    title: 'Family to Family | Beirut Relief Fund | Helping Families in Need',
    titleTemplate: '%s',
    script: [
      { src: 'https://www.gofundme.com/static/js/embed.js', async: true, defer: true }
    ],
    // metaInfo: {
    //   htmlAttrs: {
    //     lang: 'en',
    //     amp: true
    //   }
    // },
    link: [
      {
        rel: "canonical",
        href: "https://familytofamilybeirut.com"
      }
    ],
    meta: [
      {
        property: "og:title",
        content: "Family to Family | Beirut Relief Fund | Helping Families in Need"
      },
      {
        property: "og:description",
        content: "Family to Family was set up by Sarah Sakaan and her family to provide aid directly to Lebanese families affected by the Beirut blast. Donate now."
      },
      {
        property: "og:image",
        content: "https://familytofamilybeirut.com/og-image.png"
      },
      {
        property: "og:url",
        content: "https://familytofamilybeirut.com"
      },
      {
        property: "og:type",
        content: "website"
      },
      {
        name: "twitter:title",
        content: "Family to Family | Beirut Relief Fund | Helping Families in Need"
      },
      {
        name: "twitter:card",
        content: "Family to Family was set up by Sarah Sakaan and her family to provide aid directly to Lebanese families affected by the Beirut blast. Donate now."
      }
    ]
  }
};
</script>