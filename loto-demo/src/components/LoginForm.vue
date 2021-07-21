<template>
    <div class="text-center login-form">
        <form>
            <input type="text" v-model="usrId" />
            <br />
            <input type="passwd" v-model="passwd" />
            <br />
            <button type="submit">ログイン</button>
        </form>
    </div>
</template>

<style scoped>
    .login-form {
      background-color: #000;
      border: 1px solid;
      border-color: #aab4c4;
      font-weight: bold;
      padding: 0.75rem 1rem;
      border-radius: 0.5rem;
    }
</style>