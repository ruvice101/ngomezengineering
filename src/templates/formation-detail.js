import React from 'react'
import PropTypes from 'prop-types'
// import { kebabCase } from 'lodash'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'

export const FormationDetailTemplate = ({
  content,
  contentComponent,
  keywords,
  helmet,
}) => {
  const PostContent = contentComponent || Content

  return (
    <section className="section">
      {helmet || ''}
      <div className="container content">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <PostContent content={content} />
            {keywords && keywords.length ? (
              <div style={{ marginTop: `4rem` }}>
                <h4>Mots clés:</h4>
                <ul className="taglist">
                  {keywords.map(keyword => (
                    <li key={keyword + `tag`}>
                      {keyword}
                      {/* <Link to={`/keywords/${kebabCase(keyword)}/`}>{keyword}</Link> */}
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  )
}

FormationDetailTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object,
  keywords: PropTypes.array,
}

const FormationDetail = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <FormationDetailTemplate
        content={post.html}
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
        helmet={
          <Helmet titleTemplate="%s | Formations">
            <title>{`${post.frontmatter.title}`}</title>
            <meta
              name="description"
              content={`${post.frontmatter.description}`}
            />
          </Helmet>
        }
        keywords={post.frontmatter.keywords}
        title={post.frontmatter.title}
      />
    </Layout>
  )
}

FormationDetail.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default FormationDetail

export const pageQuery = graphql`
  query FormationDetailByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        title
        description
        keywords
      }
    }
  }
`
