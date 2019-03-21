import React from 'react'
import PropTypes from 'prop-types'
import { TrainingPageTemplate } from '../../templates/training-page';

const TrainingPagePreview = ({ entry, widgetFor }) => (
  <TrainingPageTemplate
    image={entry.getIn(['data', 'image'])}
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}

  // heading={entry.getIn(['data', 'heading'])}
  // tags={entry.getIn(['data', 'tags'])}
  />
)

TrainingPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default TrainingPagePreview
