<template>

<nav >
      <v-toolbar class="nav" app>
       <v-app-bar-nav-icon @click='toggleDrawer'></v-app-bar-nav-icon>
      <v-toolbar-title >
        <span class="font-weight-light">Midterm  </span>
        <span>Project</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>


      </v-toolbar>

    
     <v-navigation-drawer app v-model="drawer" 
      color="#152b56"
  >
       <v-list-item color="white"
          v-for="item in items"
          :key="item.title"
          router 
          :to="item.path" :prepend-icon="item.icon">
          <v-list-item-title>{{ item.title }}</v-list-item-title>
          
        </v-list-item>
      
     </v-navigation-drawer>
  </nav>


</template>



<script setup>
  import { ref } from 'vue'
    
  const drawer = ref(false)

  const  items =  ref([
           { title: 'About Me', icon: 'mdi-account', path: '/' },
           { title: 'Math', icon: 'mdi-alarm-panel-outline', path: '/basicMath' },
           { title: 'String App', icon: 'mdi-alphabetical-variant', path: '/stringApp'},
           { title: 'Quiz App', icon: 'mdi-omega', path: '/quiz'},
           { title: 'About Vuetify', icon: 'mdi-vuetify', path: '/vuetify'},
           { title: 'About App', icon: 'mdi-android', path: '/aboutapp'},
        ])

 function toggleDrawer(){
  return drawer.value = !drawer.value
 }

 
</script>
<style scoped>

.nav {
    background-color: rgb(34, 34, 38);
    color:aliceblue;
}


</style>