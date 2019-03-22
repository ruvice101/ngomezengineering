import React from 'react'
import PropTypes from 'prop-types'
import { FormationPageTemplate } from '../../templates/formations-page';

const FormationPagePreview = ({ entry, widgetFor }) => {
  return (
    <FormationPageTemplate
      image={entry.getIn(['data', 'image'])}
      title={entry.getIn(['data', 'title'])}
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
