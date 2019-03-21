import CMS from 'netlify-cms'

import MissionPagePreview from './preview-templates/AboutPagePreview'
import ProductPagePreview from './preview-templates/ProductPagePreview'
import IndexPagePreview from './preview-templates/IndexPagePreview'
import TrainingPagePreview from './preview-templates/TrainingPagePreview';

CMS.registerPreviewTemplate('index', IndexPagePreview)
CMS.registerPreviewTemplate('mission', MissionPagePreview)
CMS.registerPreviewTemplate('products', ProductPagePreview)
CMS.registerPreviewTemplate('training', TrainingPagePreview)
