<template>
  <v-app>
    <v-card class="mt-5">
      <v-card-title>
        <h1 class="display-1">抽選設定</h1>
      </v-card-title>
      <v-container>
        <v-row justify-center style="height: auto;">
          <v-col cols="12" sm="8" md="6" lg="6" xl="3">
            <v-card-text>
              <p>
                一度当選した人
              </p>
              <v-checkbox
                v-model="hitExcludeFg"
                label="除外する"
                value="0"
              />
              <v-checkbox
                v-model="hitExcludeFg"
                label="除外しない"
                value="1"
              />
            </v-card-text>
          </v-col>
          <v-col cols="12" sm="8" md="6" lg="6" xl="3">
            <v-card-text>
              <p>
                抽選結果発表時の演出
              </p>
              <v-checkbox
                v-model="lottoShowFg"
                label="なし"
                value="0"
              />
              <v-checkbox
                v-model="lottoShowFg"
                label="ドラムロール"
                value="1"
              />
              <v-checkbox
                v-model="lottoShowFg"
                label="カウントダウン"
                value="2"
              />
            </v-card-text>
          </v-col>
        </v-row>
        <v-row>
           <v-col>
              <v-card-text>
                <v-form>
                  <v-card-actions>
                    <v-btn class="info center" @click="submit">抽選開始</v-btn>
                  </v-card-actions>
                </v-form>
              </v-card-text>
            </v-col>
        </v-row>
      </v-container>
    </v-card>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    hitExcludeFg: "",
    lottoShowFg: "",
  }),
  methods: {
    submit() {
      this.hitExcludeFg = this.hitExcludeFg == "" ? 0 : this.hitExcludeFg;
      this.lottoShowFg = this.lottoShowFg == "" ? 0 : this.lottoShowFg;
      console.log(this.hitExcludeFg,this.lottoShowFg)
      this.$router.push('/loto');
    }
  },

}
</script>

<style scoped>
  .center {
    margin: 0 auto;
  }
</style>
