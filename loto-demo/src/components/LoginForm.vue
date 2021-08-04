<template>
    <div class="container">
        <div class="header">ヘッダー</div>
        <div class="content">コンテント</div>
        <div class="login-form">ログインフォーム</div>
    </div>
</template>

<style scoped>
    .container {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-rows: 1fr 1fr 1fr;
        gap: 0px 0px;
        grid-auto-flow: row;
    }

    .header { 
        grid-area: 1 / 1 / 2 / 4; 
        position: sticky;
        top: 0;
        background-color: #1876d1;
        padding: 1rem 3rem;
        z-index: 999;
        display: flex;
        align-items: center;
        text-align: center;
    }

    .content { grid-area: 2 / 1 / 4 / 4; }

    .login-form { grid-area: 2 / 2 / 3 / 3; }

</style>