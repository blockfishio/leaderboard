import { createTranslationSaga } from 'spacey-dapps/dist/modules/translation/sagas'
import * as translations from './locales'

export const translationSaga = createTranslationSaga({
  translations
})
