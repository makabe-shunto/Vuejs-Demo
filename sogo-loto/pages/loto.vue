<template>
  <v-app>
    <v-card width="auto" class="mt-5">
      <v-card-title>
        <h1 class="display-1">抽選</h1>
      </v-card-title>
      <v-img :src="imgSrc" class="center" width="640px" height="360px"></v-img>
      <v-container>
        <v-row style="height: auto;">
          <v-col cols="12" sm="8" md="6" lg="4" xl="3">
            <v-col>
              <v-card-text>
                <v-form>
                  <v-card-actions>
                    <v-btn class="info center" @click="back">戻る</v-btn>
                  </v-card-actions>
                </v-form>
              </v-card-text>
            </v-col>
          </v-col>
          <v-col cols="12" sm="8" md="6" lg="4" xl="3">
            <v-col>
              <v-card-text>
                <v-form>
                  <v-card-actions>
                    <v-btn class="info center" @click="getImg">スタート</v-btn>
                  </v-card-actions>
                </v-form>
              </v-card-text>
            </v-col>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    imgSrc: "",
  }),
  methods: {
    getImg() {
      this.imgSrc = "img_ex.png";
    },
    back() {
      this.$router.push('/lotoSetting');
    }
  }
}
</script>

<style scoped>
  .center {
    margin: 0 auto;
  }
</style>
