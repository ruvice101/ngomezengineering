import CMS from 'netlify-cms'

import MissionPagePreview from './preview-templates/AboutPagePreview'
import ProductPagePreview from './preview-templates/ProductPagePreview'
import IndexPagePreview from './preview-templates/IndexPagePreview'
import FormationPagePreview from './preview-templates/FormationPagePreview';
import FormationDetailPreview from './preview-templates/FormationDetailPreview';

CMS.registerPreviewTemplate('index', IndexPagePreview)
CMS.registerPreviewTemplate('mission', MissionPagePreview)
CMS.registerPreviewTemplate('products', ProductPagePreview)
CMS.registerPreviewTemplate('formations', FormationPagePreview)
CMS.registerPreviewTemplate('formation', FormationDetailPreview)
