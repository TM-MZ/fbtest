<template>
  <div class="login">
    <div>
      <button @click="login">googleアカウントでログイン</button>
      <p v-if="isAuth">{{name}}</p>

    </div>
  </div>
</template>

<script>
import {getAuth,GoogleAuthProvider,signInWithPopup} from 'firebase/auth';
export default {
  data(){
    return {
      name:"",
      email:"",
      isAuth:false

    }
  },
  methods:{
    async login(){
      const auth=getAuth();
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth,provider).then((user)=>{
        if(user){
          if (!this.isAuth){
            this.isAuth=true;
          }
          this.name="user.displayName";
          this.email="user.email";
          $router.replace('/confirm');
        }else{
          alert(ログインできませんでした);
        }
      })

    }
  }
}
</script>
<style scoped>
.login {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
