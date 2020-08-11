// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Family to Family Beirut Relief Fund',
  siteUrl: 'https://www.familytofamilybeirut.com',
  siteDescription: "The economic crisis and hyperinflation means that getting money and aid into the hands of those who need it is harder than it's ever been.",
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
    },
    {
      use: '@zefman/gridsome-source-instagram',
      options: {
        username: 'family_to_family_beirut', // Instagram username
        typeName: 'InstagramPhoto' // The GraphQL type you want the photos to be added under. Defaults to InstagramPhoto
      }
    }
  ]
}
