import { ApolloServer } from 'apollo-server';

import typeDefs from './schema';
import resolvers from './resolvers';

const server = new ApolloServer({
    typeDefs: typeDefs,
    resolvers: resolvers,
    cors: {
        origin: 'https://cryptic-waters-16902.herokuapp.com',
        credentials: true
    }
});

server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
});