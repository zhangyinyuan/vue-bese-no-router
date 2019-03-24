<template>
  <div class="hello">
    <button @click="testM()">{{ msg }}</button>
		
			<el-form :inline="true" :model="formInline" class="demo-form-inline" ref="myFirsVueForm">
		 <el-form-item label="审批人" prop="user">
		    <el-input v-model="formInline.user" placeholder="审批人"></el-input>
		  </el-form-item>
		  <el-form-item label="活动区域" prop="region">
		    <el-select v-model="formInline.region" placeholder="活动区域">
		      <el-option label="区域一" value="shanghai"></el-option>
		      <el-option label="区域二" value="beijing"></el-option>
		    </el-select>
		  </el-form-item>
		  <el-form-item>
		    <el-button type="primary" @click="onSubmit">查询</el-button> 
				<el-button type="btn repeat" @click="reset()">重置</el-button> 
		  </el-form-item> 
		</el-form>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
	data() {
		return {
			formInline: {
				user: '',
				region: ''
			}
		}
  },
  props: {
    msg: String
  },
	methods:{
		testM(){
			console.info('test................');
			this.axios
				.post('http://localhost:9001/testsAspect/')
			  .then(response => (
				console.info(response.data)
				));
		},
		onSubmit() {
        console.log('submit!');
    },
		reset(){
			console.info("重置！！！");
			 this.$refs.myFirsVueForm.resetFields()
		}
	}
}
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
