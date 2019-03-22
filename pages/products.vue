<template>
  <v-layout>
    <v-flex text-xs-center>

      <section class="container">
        <div>
          <a v-for="(item, i) in inspiredContent" :key="i" class="content">
            {{ item }}
          </a>
        </div>
      </section>

      <img
        src="/v.png"
        alt="Vuetify.js"
        class="mb-5"
      >
      <blockquote class="blockquote">
        &#8220;First, solve the problem. Then, write the code.&#8221;
        <footer>
          <small>
            <em>&mdash;John Johnson</em>
          </small>
        </footer>
      </blockquote>
    </v-flex>
  </v-layout>
</template>

<script>
import { mapGetters } from 'vuex'

const INSPIRE_ROUTE_NAME = 'inspire'

export default {
  middleware: 'content',
  computed: {
    ...mapGetters({
      'content': 'content/content'
    }),
    inspiredContent() {
      const inspiredContent = this.content.find( (content) => content.key === INSPIRE_ROUTE_NAME )
      if (inspiredContent) {
        return inspiredContent.items
      }
      return []
    }
  }
}
</script>
