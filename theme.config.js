export default {
  projectLink: 'https://github.com/Yukiniro/create-nextra-app', // GitHub link in the navbar
  docsRepositoryBase: 'https://github.com/Yukiniro/create-nextra-app/blob/master', // base URL for the docs repository
  titleSuffix: ' - Yukiniro',
  nextLinks: true,
  prevLinks: true,
  search: true,
  customSearch: null, // customizable, you can use algolia for example
  darkMode: true,
  footer: true,
  footerText: `MIT ${new Date().getFullYear()} © Yukiniro.`,
  footerEditLink: ``,
  logo: (
    <span>Just Javascript [译]</span>
  ),
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content="Nextra: the next docs builder" />
      <meta name="og:title" content="Nextra: the next docs builder" />
    </>
  ),
}