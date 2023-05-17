<!-- <template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <v-img
          :src="require('../assets/logo.svg')"
          class="my-3"
          contain
          height="200"
        />
      </v-col>

      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">
          Welcome to Vuetify
        </h1>

        <p class="subheading font-weight-regular">
          For help and collaboration with other Vuetify developers,
          <br>please join our online
          <a
            href="https://community.vuetifyjs.com"
            target="_blank"
          >Discord Community</a>
        </p>
      </v-col>

      <v-col
        class="mb-5"
        cols="12"
      >
        <h2 class="headline font-weight-bold mb-3">
          What's next?
        </h2>

        <v-row justify="center">
          <a
            v-for="(next, i) in whatsNext"
            :key="i"
            :href="next.href"
            class="subheading mx-3"
            target="_blank"
          >
            {{ next.text }}
          </a>
        </v-row>
      </v-col>

      <v-col
        class="mb-5"
        cols="12"
      >
        <h2 class="headline font-weight-bold mb-3">
          Important Links
        </h2>

        <v-row justify="center">
          <a
            v-for="(link, i) in importantLinks"
            :key="i"
            :href="link.href"
            class="subheading mx-3"
            target="_blank"
          >
            {{ link.text }}
          </a>
        </v-row>
      </v-col>

      <v-col
        class="mb-5"
        cols="12"
      >
        <h2 class="headline font-weight-bold mb-3">
          Ecosystem
        </h2>

        <v-row justify="center">
          <a
            v-for="(eco, i) in ecosystem"
            :key="i"
            :href="eco.href"
            class="subheading mx-3"
            target="_blank"
          >
            {{ eco.text }}
          </a>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'HelloWorld',

    data: () => ({
      ecosystem: [
        {
          text: 'vuetify-loader',
          href: 'https://github.com/vuetifyjs/vuetify-loader',
        },
        {
          text: 'github',
          href: 'https://github.com/vuetifyjs/vuetify',
        },
        {
          text: 'awesome-vuetify',
          href: 'https://github.com/vuetifyjs/awesome-vuetify',
        },
      ],
      importantLinks: [
        {
          text: 'Documentation',
          href: 'https://vuetifyjs.com',
        },
        {
          text: 'Chat',
          href: 'https://community.vuetifyjs.com',
        },
        {
          text: 'Made with Vuetify',
          href: 'https://madewithvuejs.com/vuetify',
        },
        {
          text: 'Twitter',
          href: 'https://twitter.com/vuetifyjs',
        },
        {
          text: 'Articles',
          href: 'https://medium.com/vuetify',
        },
      ],
      whatsNext: [
        {
          text: 'Explore components',
          href: 'https://vuetifyjs.com/components/api-explorer',
        },
        {
          text: 'Select a layout',
          href: 'https://vuetifyjs.com/getting-started/pre-made-layouts',
        },
        {
          text: 'Frequently Asked Questions',
          href: 'https://vuetifyjs.com/getting-started/frequently-asked-questions',
        },
      ],
    }),
  }
</script> -->
<!-- <template>
  <v-container>
    <v-toolbar color="primary" dark>
      <v-toolbar-title>Ana Sayfa</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn text to="/About">About</v-btn>
        <v-btn text to="/Communication">Communication</v-btn>
        <v-btn text to="/AnamenuHome">AnamenuHome</v-btn>
        <v-btn text to="/Blogs">Blogs</v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-main>
      <v-parallax
      height="300"
      src="https://cdn.vuetifyjs.com/images/parallax/material2.jpg"
  >
  <h1>Merhaba!</h1>
      <p>Hoş geldiniz!</p>
  
</v-parallax>
      
    </v-main>
  
</v-container>
</template>

<script>
export default {
  data: () => ({
    links: [
      'About',
      'Communication',
      'AnamenuHome',
      'Blogs',
    ],
  }),
}
</script> -->

<template>
  <v-container>
    <v-toolbar color="primary" dark>
      <v-toolbar-title>Ana Sayfa</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn text to="/About">Hakkımda</v-btn>
        <v-btn text to="/Communication">İletişim</v-btn>
        <v-btn text to="/AnamenuHome">Menü</v-btn>
        <v-btn text to="/Blogs">İçerikler</v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-main>
      <v-parallax
        height="300"
        src="https://cdn.vuetifyjs.com/images/parallax/material2.jpg"
      >
        <v-container class="fill-height">
          <v-row align="center" justify="center">
            <v-col cols="12" sm="6" md="4" lg="3">
              <v-avatar size="150">
                <img src="path/to/your/photo.jpg" alt="Your Photo">
              </v-avatar>
            </v-col>
            <v-col cols="12" sm="6" md="8" lg="9">
              <h1>Merhaba, Benim Adım John Doe</h1>
              <p>Buraya kendiniz hakkında bilgileri ekleyebilirsiniz.</p>
              <p>Örneğin, tecrübeleriniz, ilgi alanlarınız veya yetenekleriniz hakkında bilgi verebilirsiniz.</p>
            </v-col>
          </v-row>
        </v-container>
      </v-parallax>
    </v-main>
  </v-container>
</template>

<script>
export default {
  name: 'HelloWorld'
}
</script>

<style scoped>
/* İsteğe bağlı stillemeleri buraya ekleyebilirsiniz */
</style>