<template>
  <div class="container">
    <div class="nav-menu">
      <div class="menu-btn" @click="handleMenu()">
        <div v-if="menuOpen" class="close-menu">Menu &#9650;</div>
        <div v-else class="open-menu">Menu &#9660;</div>
      </div>
      <ul v-show="menuData">
        <li v-for="item in menuData" :key="item.id" @click="update(item.name, item.details, item.image)">
          {{ item.name }}
        </li>
      </ul>
    </div>
    <div class="selection">
      <h1>{{ itemName }}</h1>
      <img :src="itemImage" >
      <p>{{ itemDetails }}</p>
    </div>
    <div class="form-container">
      <div class="inc">Send us an inquiry</div>
      
      <UserForm />
    </div>
    
  </div>
</template>

<script>
import UserForm from './components/UserForm.vue'

export default {
  name: 'App',
  components: {
    UserForm
  },
  data () {
    return {
      menuData: [],
      itemDetails: 'Make a selection',
      itemImage: '',
      itemName: '',
      menuOpen: false
    }
  },
  mounted() {
    fetch('https://dev.menu.ninja/api/menu/156?key=8j5vfe%24*pfb**rzt&pretty=1')
    .then(res => res.json())
    .then(data => this.menuData = data.menu.items)
    .catch(err => console.log(err.message))
  },

  methods: {
    update (name, details, img) {
      this.itemDetails = details
      this.itemImage = img
      this.itemName = name
    },
    handleMenu () {
      this.menuOpen = !this.menuOpen
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0;
  /*background-color: #EBF3FB;*/
  height:100%;
}
.container {
  max-width:1200px;
  margin:0 auto;
}
.container img {
  max-width:100%;
}
.nav-menu {
  padding-top:120px;
  position:relative;
}
.menu-btn {
  display:none;
}
.nav-menu ul {
  margin:0;
  padding:0;
}
.nav-menu ul li {
  list-style: none;
  display: inline-block;
  padding:5px 10px;
  cursor: pointer;
  color:#eb9266;
  font-size:16px;
  font-weight:bold;
}
.selection {
  margin:60px auto 0;
  max-width:600px;
  background-color: #fff;
  padding:30px;
  border-radius:15px;
  text-align: center;
  box-shadow: 4px 11px 33px -4px rgba(0,0,0,0.49);
}
.selection p{
  font-size:20px;
}
.form-container {
  margin-top:100px;
}
.inc {
  font-size:24px;
  font-weight:bold;
  margin-bottom:20px;
}
@media (max-width: 820px) {
  .container {
    padding:0 30px;
  }
}
@media (max-width: 600px) {
  .nav-menu {
    padding-top:30px;
  }
  .menu-btn {
    display:block;
    font-size:30px;
    background-color:#eb9266;
  }
  .nav-menu ul {
    background-color: #fff;
    position:absolute;
    width:100%;
    box-sizing: border-box;
    margin:0;
    padding:20px;
    border-radius:4px;
    box-shadow: 1px 1px 3px rgba(0,0,0,0.49);
    display:none;
  }
  .nav-menu ul li {
    display:block;
    padding:10px 0;
  }
  .nav-menu:hover ul {display:block;}
}

</style>
