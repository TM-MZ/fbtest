<template>
  <div class="login">
    <div>
      <button @click="login">googleアカウントでログイン</button>
    </div>
  </div>
</template>

<script>
import {getAuth,GoogleAuthProvider,signInWithPopup} from 'firebase/auth';
export default {
  data(){
    return {
      user:{
      name:"",
      email:"",
      }

    }
  },
  methods:{
    async login(){
      const auth=getAuth();
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth,provider).then((user)=>{
        if(user){
          this.name="user.displayName";
          this.email="user.email";
          $router.push({name:'/confirm',params:this.user});
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
