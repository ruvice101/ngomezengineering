import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import { Hero } from '../components';
import { Helmet } from 'react-helmet'


export const FormationPageTemplate = ({ title, content, image, contentComponent }) => {
  const PageContent = contentComponent || Content

  return (
    <>
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">

            <Hero image={image} title={title} />

            <div className="section">
              <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                {title}
              </h2>
              <PageContent className="content" content={content} />
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

FormationPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const FormationPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <title>A propos de nous</title>
        {/* <link rel="canonical" href="http://mysite.com/example" /> */}
      </Helmet>
      <FormationPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
        image={post.frontmatter.image}
      />
    </Layout>
  )
}

FormationPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default FormationPage

export const FormationPageQuery = graphql`
  query FormationPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
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
      }
    }
  }
`
