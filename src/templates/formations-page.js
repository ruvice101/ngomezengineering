import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
// import Banner from '../components/Banner';

export const FormationPageTemplate = ({
  title,
  content,
  contentComponent,
  image
}) => {
  const PageContent = contentComponent || Content

  return (
    <section className="section section--gradient">
      <div className="container">

        <div className="columns">
          <div className="column">
            {/* <Banner image={image} title={title} /> */}
          </div>
        </div>

        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="section">
              <PageContent className="content" content={content} />
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

FormationPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
}

const FormationPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{post.frontmatter.title}</title>
        {/* <link rel="canonical" href="http://mysite.com/example" /> */}
        <meta
          name="description"
          content={`${post.frontmatter.description}`}
        />
      </Helmet>
      <FormationPageTemplate
        title={post.frontmatter.heading}
        content={post.html}
        contentComponent={HTMLContent}
        image={post.frontmatter.image}
      />
    </Layout>
  )
}

FormationPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default FormationPage

export const pageQuery = graphql`
  query FormationPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "formations-page" } }) {
      html
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        description
      }
    }
  }
`
