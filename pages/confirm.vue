<template>
  <div class="confirm">
    <div>
      <h1>ログイン完了！！</h1>
      <p>{{name}}</p>
      <p>{{email}}</p>
    </div>
  </div>
</template>

<script>
import { getAuth, onAuthStateChanged } from "firebase/auth";
export default {
  data() {
    return {
      name: "a",
      email: "a",
    };
  },
  methods: {
    checkLogin() {
      const auth = getAuth();
      onAuthStateChanged(auth, (user) => {
        if (user) {
          this.name = user.displayName;
          this.email = user.email;
        }else{
            $router.replace('/');
        }
      });
    },
  },
  created() {
    this.checkLogin();
  },
};
</script>

<style scoped>
.confirm {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
