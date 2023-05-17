<template>
    <v-container>
      <v-card>
        <v-card-text>
          <v-row align="center">
            <v-col cols="2">
              <v-avatar size="150">
                <img src="path/to/your/photo.jpg" alt="Your Photo">
              </v-avatar>
            </v-col>
            <v-col cols="10">
              <h1>İnstagram</h1>
              <v-btn icon href="https://www.instagram.com/your_instagram">
                <v-icon size="32">mdi-instagram</v-icon>
              </v-btn>
              <h1>Twitter</h1>
              <v-btn icon href="https://twitter.com/your_twitter">
                <v-icon size="32">mdi-twitter</v-icon>
              </v-btn>
              <h1>Facebook</h1>
              <v-btn icon href="https://www.facebook.com/your_facebook">
                <v-icon size="32">mdi-facebook</v-icon>
              </v-btn>
              <h1>Github</h1>
              <v-btn icon href="https://github.com/your_github">
                <v-icon size="32">mdi-github</v-icon>
              </v-btn>
            </v-col>
          </v-row>
        </v-card-text>
        <v-card-title>
          CV
        </v-card-title>
        <v-card-text>
          <v-row>
            <v-col cols="4">
              <v-img src="path/to/java_logo.png" alt="Java Logo"></v-img>
              <p>Java</p>
            </v-col>
            <v-col cols="4">
              <v-img src="path/to/python_logo.png" alt="Python Logo"></v-img>
              <p>Python</p>
            </v-col>
            <v-col cols="4">
              <v-img src="path/to/csharp_logo.png" alt="C# Logo"></v-img>
              <p>C#</p>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="4">
              <v-img src="path/to/vue_logo.png" alt="Vue Logo"></v-img>
              <p>Vue</p>
            </v-col>
            <v-col cols="4">
              <v-img src="path/to/vuetify_logo.png" alt="Vuetify Logo"></v-img>
              <p>Vuetify</p>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </v-container>
  </template>
  
  <script>
  export default {
    name: 'Anamenu'
  }
  </script>
  
  <style scoped>
  /* İsteğe bağlı stillemeleri buraya ekleyebilirsiniz */
  </style>