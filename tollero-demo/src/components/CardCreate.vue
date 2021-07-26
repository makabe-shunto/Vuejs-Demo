<template>
    <form 
        class="card-create" 
        @submit.prevent="addCard"
        :class="[active || bodyExists ? 'active' : '']"
    >
        <input 
            type="text"
            class="card-create__input"
            v-model="title"
            :placeholder="palaceholder"
            @focusin="focusIn"
            @focusout="focusOut"
        />
        <button 
            type="submit" 
            class="card-create__button"
            v-if="active || bodyExists"
        >
            カードを追加
        </button>
    </form>
</template>

<script>
export default {
     props: {
        listIndex: {
            type: Number,
            required: true,
        },
    },
    data() {
        return {
            title: "",
            palaceholder: "新しいカードを追加",
            active: false,
        };
    },
    methods: {
        addCard() {
            if (!this.title) {
                return;
            }
            this.$store.dispatch("addCard", {
                listIndex: this.listIndex,
                title: this.title,
            });
            this.title = "";
        },
        focusIn() {
            this.active = true;
            this.palaceholder = "カードのタイトルを入力...";
        },
        focusOut() {
            this.active = false;
            this.palaceholder = "新しいカードを追加";
        },
    },
    computed: {
        bodyExists() {
            return this.title.length > 0;
        },
    },
};
</script>

<style lang="scss" scoped>
  .card-create {
    $this: &;
    margin-top: 0.5rem;
    border-radius: 0.5rem;
    &__input {
      border-radius: 0.5rem;
      width: 100%;
      background-color: inherit;
      border: none;
      font-size: 1rem;
      padding: 0.75rem 1rem;
      outline: none;
      &::placeholder {
        color: #043979;
      }
    }
    &__button {
      border: none;
      background-color: #59ac44;
      padding: 0.5rem 1rem;
      border-radius: 0.5rem;
      margin-top: 0.5rem;
      color: #fff;
    }
    &.active {
      background-color: #ebecf0;
      padding-top: 0.5rem;
      padding-bottom: 0.5rem;
      #{$this}__input {
        border: 1px solid #aab4c4;
        color: #333;
        background-color: #fff;
        font-weight: bold;
        &::placeholder {
          color: #5e6d83;
        }
      }
    }
  }
</style>