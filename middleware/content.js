import axios from 'axios'
// import graphqlClient from '~/plugins/apollo.js'

export default async ({ env, route, store }) => {
    const content = store.getters['content/content'].find( (item) => item.key === route.name )
    if (!content) {
        try {
            const response = await axios.get(`${process.env.CONTENT_API_ENDPOINT}&content_type=course&select=fields.shortDescription,fields.title,sys.id`)
            /*const response = await graphqlClient.query({
                query: gql`
                    query BookList {
                        bookList {
                            id
                            title
                            author
                            description
                        }
                    }
                `,
            })*/
            /**
             * Make call for content based on the route, i.e:
             *  "index" = Home Page content
             *  "about" = About Us content
             **/
            store.commit('content/storeContent', {
                key: route.name,
                items: response.data.items
            })
        } catch(e) {
            console.log('Error thrown finding content: ' + e)
        }
    }
}