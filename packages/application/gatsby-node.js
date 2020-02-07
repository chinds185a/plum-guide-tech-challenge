const path = require(`path`)

exports.createPages = async ({ actions, graphql }) => {
  const { data } = await graphql(`
    query {
      plumGuide {
        allHomes {
          id
          name
          slug
          location
          Highlights
        }
      }
    }
  `)

  data.plumGuide.allHomes.forEach(
    ({ id, name, slug, location, Highlights }) => {
      actions.createPage({
        path: slug,
        component: path.resolve(`./src/pages/home.jsx`),
        context: {
          homeId: id,
          name,
          slug,
          location,
          highlights: Highlights[0],
        },
      })
    }
  )
}
