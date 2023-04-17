import { GraphQLDefinitionsFactory } from '@nestjs/graphql'
import { join } from 'node:path'
import { SCHEMAS_PATH } from './constants'

const TYPINGS_PATH = 'src/common/graphql.ts'
const definitionsFactory = new GraphQLDefinitionsFactory()

definitionsFactory.generate({
  typePaths: [SCHEMAS_PATH],
  path: join(process.cwd(), TYPINGS_PATH),
  enumsAsTypes: true
})
