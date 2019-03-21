import React from 'react'
import PropTypes from 'prop-types'
import { TrainingDetailTemplate } from '../../templates/training-detail';

const TrainingDetailPreview = ({ entry, widgetFor }) => (
  <TrainingDetailTemplate
    content={widgetFor('body')}
    description={entry.getIn(['data', 'description'])}
    tags={entry.getIn(['data', 'tags'])}
    title={entry.getIn(['data', 'title'])}
  />
)

TrainingDetailPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default TrainingDetailPreview
