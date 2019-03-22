import React from 'react'
import PropTypes from 'prop-types'
import { FormationDetailTemplate } from '../../templates/formation-detail';

const FormationDetailPreview = ({ entry, widgetFor }) => {
    return (
        <FormationDetailTemplate
            title={entry.getIn(['data', 'title'])}
            heading={entry.getIn(['data', 'heading'])}
            description={entry.getIn(['data', 'description'])}
            content={widgetFor('body')}
        />
    )
}

FormationDetailPreview.propTypes = {
    entry: PropTypes.shape({
        getIn: PropTypes.func,
    }),
    getAsset: PropTypes.func,
}

export default FormationDetailPreview
