const tailwind = require('../tailwind')

module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "/portfolio"

  siteTitle: 'Matt Fisher - Web Developer', // Navigation and Site Title
  siteTitleAlt: 'Matt Fisher', // Alternative Site title for SEO
  siteTitleShort: 'Matt Fisher', // short_name for manifest
  siteHeadline: 'Creating Fast, High Quality Web Applications and Web Site', // Headline for schema.org JSONLD
  siteUrl: 'https://google.com', // Domain of your site. No trailing slash! /todo
  siteLanguage: 'en', // Language Tag on <html> element
  siteLogo: '/logo.png', // Used for SEO and manifest
  siteDescription: 'My personal webpage',
  author: 'Matt Fisher', // Author for schema.org JSONLD

  // siteFBAppID: '123456789', // Facebook App ID - Optional
  //  userTwitter: '@cara', // Twitter Username
  //  ogSiteName: 'Matt Fisher', // Facebook Site Name
  //  ogLanguage: 'en_US', // Facebook Language
  //  vgoogleAnalyticsID: 'UA-47519312-5',

  // Manifest and Progress color
  themeColor: tailwind.colors.orange,
  backgroundColor: tailwind.colors.blue,
}
