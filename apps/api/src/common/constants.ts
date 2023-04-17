import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo'

// Events
export const LIST_CREATED = 'list:created'
export const CARD_CREATED = 'card:created'

// GraphQL
export const SCHEMAS_PATH = 'src/**/*.graphql'
export const GRAPHQL_MODULE_CONFIG: ApolloDriverConfig = {
  typePaths: [SCHEMAS_PATH],
  driver: ApolloDriver
}
