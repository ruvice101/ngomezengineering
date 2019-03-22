import React from 'react'
import PropTypes from 'prop-types'
import { FormationPageTemplate } from '../../templates/formations-page';

const FormationPagePreview = ({ entry }) => {
  return (
    <FormationPageTemplate
      image={entry.getIn(['data', 'image'])}
      title={entry.getIn(['data', 'title'])}
      heading={entry.getIn(['data', 'heading'])}
      content={widgetFor('body')}
    />
  )
}

FormationPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default FormationPagePreview
