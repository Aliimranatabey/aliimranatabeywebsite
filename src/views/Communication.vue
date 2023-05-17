<template>
    <v-container>
      <v-card>
        <v-card-title>
          İletişim
        </v-card-title>
        <v-card-text>
          <!-- İletişim bilgilerini buraya ekleyebilirsiniz -->
          <h1>Instagram</h1>
          <v-btn icon href="https://www.instagram.com/your_instagram">
            <v-icon size="32">mdi-instagram</v-icon>
          </v-btn>
          <h1>Twitter</h1>
          <v-btn icon href="https://twitter.com/your_twitter">
            <v-icon size="32">mdi-twitter</v-icon>
          </v-btn>
          <!-- İletişim formu buraya eklenebilir -->
          <h1>Bize Ulaşın</h1>
          <v-text-field label="İsim"></v-text-field>
          <v-text-field label="Soyisim"></v-text-field>
          <v-text-field label="E-posta"></v-text-field>
          <v-textarea label="Mesajınız"></v-textarea>
          <v-btn color="primary">Gönder</v-btn>
        </v-card-text>
      </v-card>
    </v-container>
  </template>
  
  <script>
  export default {
    name: 'Iletisim'
  }
  </script>
  
  <style scoped>
  /* İsteğe bağlı stillemeleri buraya ekleyebilirsiniz */
  </style>