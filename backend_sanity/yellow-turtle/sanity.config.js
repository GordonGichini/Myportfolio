import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'yellow-turtle',

  projectId: '68d08ig9',
  dataset: 'don',

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
