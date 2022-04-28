<template>
    <div>
        <el-form :model="loginForm" ref="ldyLoginForm" :rules="loginRules" class="loginContainer">
            <h3 class="loginTitle">系统登录-deyi 日常</h3>
            <el-form-item prop="username">
                <el-input type="text" v-model="loginForm.username" autocomplete="off" placeholder="请输入用户名"></el-input>
            </el-form-item>
            <el-form-item prop="password">
                <el-input type="password" v-model="loginForm.password" autocomplete="off"
                          placeholder="请输入密码"></el-input>
            </el-form-item>
            <el-form-item prop="code">
                <el-input type="password" v-model="loginForm.code" autocomplete="off" placeholder="点击图片更换验证码"
                          style="width: 250px;margin-right: 5px"></el-input>
                <img :src="captchaUrl" @click="updateCaptcha">
            </el-form-item>
            <el-checkbox v-model="checked" class="loginRemember">记住我</el-checkbox>
            <el-button type="primary" style="width: 100%" @click="submitLogin">登录</el-button>
        </el-form>
    </div>
</template>


<script>
    export default {
        name: "Login",
        data() {
            return {
                // 点击更新验证码
                captchaUrl: '/captcha?time=' + new Date(),
                loginForm: {
                    username: 'admin',
                    password: '123456',
                    code: ''
                },
                checked: true,
                loginRules: {
                    username: [{required: true, message: '请输入用户名', trigger: 'blur'}],
                    password: [{required: true, message: '请输入密码', trigger: 'blur'}],
                    code: [{required: true, message: '请输入验证码', trigger: 'blur'}]
                }
            }
        },
        methods: {
            updateCaptcha(){
                this.captchaUrl = 'captcha?time=' + new Date();
            },
            submitLogin() {
                this.$refs.ldyLoginForm.validate((valid) => {
                    if (valid) {
                        this.$message({
                            message: '登录成功',
                            type: 'success'
                        });
                    } else {
                        this.$message.error('错了哦，请输入所有字段');
                        return false;
                    }
                });
            }
        }
    }
</script>

<style>
    .loginContainer {
        /*大的边框*/
        border-radius: 15px;
        /*背景*/
        background-clip: border-box;
        margin: 180px auto;
        width: 350px;
        padding: 15px 35px 15px 35px;
        background: #85eab7;
        border: 1px solid #eaeaea;
        /*阴影*/
        box-shadow: 0 0 25px #cac6c6;
    }

    .loginTitle {
        margin: 0px auto 40px auto;
        text-align: center;
    }

    .loginRemember {
        text-align: left;
        margin: 0px 0px 15px 0px;
    }

    .el-form-item__content{
        display: flex;
        align-items: center;
    }
</style>