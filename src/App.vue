<template>
<body>
   <v-app>
    <v-main>
       <Navbar/>
       <router-view></router-view>
    </v-main>
   </v-app>
</body>
   </template>

<script setup>
  import Navbar from '@/components/NavBar.vue';
</script>


