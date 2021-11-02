const config = {
  siteTitle: 'Rozaqi',
  siteTitleShort: 'Rozaqi',
  siteTitleAlt: 'Rozaqi',
  siteLogo: '/logos/logo-1024.png',
  siteUrl: 'https://rozaqi.netlify.com',
  repo: 'https://github.com/rozaqiw/simple-blog-gatsby-js',
  pathPrefix: '',
  dateFromFormat: 'YYYY-MM-DD',
  dateFormat: 'MMMM Do, YYYY',
  siteDescription:
    '',
  siteRss: '/rss.xml',
  googleAnalyticsID: 'UA-161804685-1',
  postDefaultCategoryID: 'Tech',
  newsletter: 'https://rozaqi.substack.com',
  newsletterEmbed: 'https://rozaqi.substack.com/embed',
  userName: 'rozaqi',
  userEmail: 'rozaqiwt@gmail.com',
  userTwitter: 'rozaqi',
  menuLinks: [
    {
      name: 'About me',
      link: '/me/',
    },
    {
      name: 'Articles',
      link: '/blog/',
    },
    {
      name: 'Contact',
      link: '/contact/',
    },
  ],
  themeColor: '#3F80FF', // Used for setting manifest and progress theme colors.
  backgroundColor: '#fdfdfd',
}

// Make sure pathPrefix is empty if not needed
if (config.pathPrefix === '/') {
  config.pathPrefix = ''
} else {
  // Make sure pathPrefix only contains the first forward slash
  config.pathPrefix = `/${config.pathPrefix.replace(/^\/|\/$/g, '')}`
}

// Make sure siteUrl doesn't have an ending forward slash
if (config.siteUrl.substr(-1) === '/') config.siteUrl = config.siteUrl.slice(0, -1)

// Make sure siteRss has a starting forward slash
if (config.siteRss && config.siteRss[0] !== '/') config.siteRss = `/${config.siteRss}`

module.exports = config
