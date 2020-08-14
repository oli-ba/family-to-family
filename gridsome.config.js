// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Family to Family | Beirut Relief Fund | Helping Families in Need',
  siteUrl: 'https://familytofamilybeirut.com',
  siteDescription: "Family to Family was set up by Sarah Sakaan and her family to provide aid directly to Lebanese families affected by the Beirut blast. Donate now.",
  resolveAbsolutePaths: true,
  plugins: [
    {use: 'gridsome-plugin-tailwindcss'},
    {use: 'vue-clipboard2'},
    {use: 'gridsome-plugin-svg'},
    {
      use: '@gridsome/vue-remark',
      options: {
        typeName: 'Updates', // Required
        baseDir: './src/content/updates', // Where .md files are located
        pathPrefix: '/updates', // Add route prefix. Optional
        template: './src/templates/Template_blog.vue' // Optional
      }
    }
  ]
}
