<template>
  <div class="login-wrap">
    <a-form
      ref="ruleForm"
      :model="form"
      :rules="rules"
      :label-col="labelCol"
      :wrapper-col="wrapperCol"
    >
      <a-form-item ref="userName" label="账号" name="userName">
        <a-input v-model:value="form.userName" />
      </a-form-item>
      <a-form-item ref="password" label="密码" name="password">
        <a-input v-model:value="form.password" />
      </a-form-item>
      <a-form-item :wrapper-col="{ span: 14, offset: 7 }">
        <a-button type="primary" @click="onSubmit">
          登录
        </a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<script>
import { reactive, ref, onMounted } from "vue";
export default {
  name: "Login",
  setup() {
    const data = reactive({
      labelCol: { span: 4 },
      wrapperCol: { span: 14 },
      // 表单字段
      form: {
        userName: "",
        password: ""
      },
      // 表单校验规则
      rules: {
        userName: [
          {
            required: true,
            message: "请输入账号",
            trigger: "blur"
          },
          {
            len: 11,
            message: "请输入正确的账号",
            trigger: "blur"
          }
        ],
        password: [
          {
            required: true,
            message: "请输入密码",
            trigger: "blur"
          },
          {
            min: 6,
            max: 20,
            message: "密码长度6位至20位",
            trigger: "blur"
          }
        ]
      }
    });

    const methods = {
      onSubmit() {
        //
        this.$refs.ruleForm
          .validate()
          .then(() => {
            console.log("values", this.form);
          })
          .catch(error => {
            console.log("error", error);
          });
      }
    };

    const ruleForm = ref(null);
    onMounted(() => {
      // Logs: `Headline`
      console.log(ruleForm.value.textContent);
    });
    return {
      ruleForm,
      ...data,
      ...methods
    };
  }
};
</script>

<style lang="scss" scoped>
.login-wrap {
  margin: 0 auto;
  padding-top: 10%;
  width: 30%;
  color: #fff;
}
</style>
