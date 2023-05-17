<template>
  <v-container>
    <v-card>
      <v-card-title>
        İçerikler
      </v-card-title>
      <v-card-text>
        <v-row>
          <v-col cols="12" sm="6" md="4" lg="3" v-for="blog in blogs" :key="blog.id">
            <v-card>
              <v-card-title>{{ blog.title }}</v-card-title>
              <v-card-text>{{ blog.description }}</v-card-text>
            </v-card>
          </v-col>
        </v-row>
        <v-pagination
          v-model="currentPage"
          :total-visible="5"
          :length="totalPages"
          @input="paginate"
        ></v-pagination>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: 'Icerikler',
  data() {
    return {
      blogs: [
        { id: 1, title: 'Dependency Injection', description: 'Dependency Injection hakkında yazı' },
        // Diğer bloglar buraya eklenebilir
      ],
      currentPage: 1,
      perPage: 5,
    };
  },
  computed: {
    totalPages() {
      return Math.ceil(this.blogs.length / this.perPage);
    },
  },
  methods: {
    paginate() {
      // Sayfalama işlemleri burada gerçekleştirilebilir
    },
  },
};
</script>

<style scoped>
/* İsteğe bağlı stillemeleri buraya ekleyebilirsiniz */
</style>