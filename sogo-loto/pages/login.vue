<template>
  <v-app>
    <v-card width="400px" class="mx-auto mt-5">
      <v-card-title>
        <h1 class="display-1">ログイン</h1>
      </v-card-title>
      <v-card-text>
        <v-form>
          <v-text-field
            prepend-icon="mdi-account-circle"
            label="ユーザ名"
            v-model="name"
          />
          <v-text-field
            v-bind:type="showPassword ? 'text' : 'password'"
            @click:append="showPassword = !showPassword"
            prepend-icon="mdi-lock"
            v-bind:append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
            label="パスワード"
            v-model="password"
          />
          <v-card-actions>
            <v-btn class="info center" @click="login">ログイン</v-btn>
          </v-card-actions>
        </v-form>
      </v-card-text>
    </v-card>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    showPassword: false,
    name: "",
    password: "",
  }),
  methods: {
    login() {
      this.$router.push('/lotoSetting');
    }
  },
}
</script>

<style scoped>
  .center {
    margin: 0 auto;
  }
</style>
