<template>
  <section class="bg-colorSecondary text-colorPrimary">
    <div class="flex flex-col">
      <div class="flex-col px-6 md:px-40 py-16">
        <blockquote
          class="quote font-sans font-bold text-xl md:text-2xl leading-tight mb-12"
        >For the many of you who know and love Beirut, and in response to the outpouring of love and questions of how to help, we have set up this fund to get aid directly to families in dire need of help today. The economic crisis and hyperinflation means that getting money &amp; aid into the hands of those who need it is harder than it's ever been. Most of you know my sister Sarah, she and her family are currently in Beirut and safe thankfully, they are now working hard to help families there who are in desperate need of help. They are supporting families who have lost everything and are in need food and medicine today. We have been overwhelmed by people's incredible response and we are continuing with the making up of food parcels to distribute downtown. We have also now partnered with an on the ground NGO's <a href="https://beitelbaraka.net/donation/pay/">Beit el Baraka</a> and <a href="https://www.nusaned.org/en">Nusaned</a> who have over 300k registered destitute families in need of food and supplies.  Thanks in advance for your support and please lobby your MP to get Govt aid out to Lebanon NOW... rather than just being 'poised to help'.</blockquote>
        <div>
          <div>
            <h4 class="text-xl font-bold">Much love,</h4>
            <div class="uppercase tracking-wide">Reemah &amp; the Sakaan family</div>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>
<style lang="scss">
.quote {
  &::before {
    content: '"';
    margin-left: -0.55rem;
  }
  &::after {
    content: '"';
    margin-left: -0.05rem;
  }
  & a {text-decoration: underline;}
}
@screen md {
  .quote::before {
    margin-left: -0.55rem;
  }
}
</style>