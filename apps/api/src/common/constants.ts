import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo'
// GraphQL
export const SCHEMAS_PATH = 'src/**/*.graphql'
export const GRAPHQL_MODULE_CONFIG: ApolloDriverConfig = {
  typePaths: [SCHEMAS_PATH],
  driver: ApolloDriver
}
