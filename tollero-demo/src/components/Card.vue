<template>
    <div class="card">
        <p class="card__body"  :class="isCheck ? 'card__active' : ''" >{{ title }}</p>
        <input 
          type="checkbox" 
          class="card__done" 
          v-model="isCheck"
        />
        <button class="card__delete" @click="removeCard">×</button>
    </div>
</template>

<script>
export default {
    data() {
      return {
        isCheck: false,
      };
    },
    props: {
        title: {
            type: String,
            required: true,
        },
        listIndex: {
            type: Number,
            required: true,
        },
    },
    methods: {
        removeCard() {
            if (confirm("カードを削除しますか？")) {
                this.$store.dispatch("removeCard", {
                    listIndex: this.listIndex,
                    cardIndex: this.cardIndex,
                });
            }
        },
    },
};
</script>

<style lang="scss" scoped>
  .card {
    position: relative;
    &:not(:first-child) {
      margin-top: 1rem;
    }
    &__body {
      background-color: #fff;
      border: 1px solid;
      border-color: #aab4c4;
      font-weight: bold;
      padding: 0.75rem 1rem;
      border-radius: 0.5rem;
    }
    &__active { 
      text-decoration: line-through;
      color: #777;
    }
    &__delete {
      position: absolute;
      right: 10px;
      top: 50%;
      transform: translateY(-50%);
      border: none;
      background-color: #fff;
      border-radius: 50%;
      color: red;
      width: 1rem;
      height: 1rem;
    }
    &__done {
      position: absolute;
      right: 30px;
      top: 50%;
      transform: translateY(-50%);
      border: none;
      background-color: #fff;
      border-radius: 50%;
      width: 1rem;
      height: 1rem;
    }
  }
</style>