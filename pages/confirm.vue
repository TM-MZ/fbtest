<template>
  <div class="confirm">
    <div v-if="isAuth">
      <h1>ログイン完了！！</h1>
      <p>{{ name }}</p>
      <p>{{ email }}</p>
      <button @click="logout">ログアウトする</button>
    </div>
  </div>
</template>

<script>
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
export default {
  data() {
    return {
      isAuth: false,
      name: "",
      email: "",
    };
  },
  methods: {
    checkLogin() {
      const auth = getAuth();
      onAuthStateChanged(auth, (user) => {
        if (user) {
          this.name = user.displayName;
          this.email = user.email;
          this.isAuth=true;
        } else {
          this.$router.replace("/");
        }
      });
    },
    logout() {
      const auth = getAuth();
      signOut(auth).then(() => {
        alert("ログアウトしました");
        this.isAuth = false;
        this.$router.replace("/");
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
