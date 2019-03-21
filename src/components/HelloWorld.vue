<template>
  <div class="hello">
    <button @click="testM()">{{ msg }}</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
	methods:{
		testM(){
			console.info('test................');
			this.axios
			  // .get('https://api.coindesk.com/v1/bpi/currentprice.json')
				.post('http://localhost:9001/testsAspect/')
			  .then(response => (
				console.info(response.data)
				));
				
				//当前请求对应后台的代码,注意更换自己的端口
// @RestController
// @CrossOrigin  //解决跨域.如果注解controller上,表示这个类下的所有接口都支持跨域.如果是在方法上.表示当前方法支持跨域
// public class TestsAspectController {
// 
//     @RequestMapping(path = "/testsAspect")
//     public Object testsAspect(@RequestHeader HttpHeaders headers) {
					 // String token = headers.get("token").get(0);
//         JSONObject jsonObject = new JSONObject();
//         jsonObject.put("result","0000");
//         return jsonObject;
//     }
// }
		}
	}
}

// this.axios
//   .get('https://api.coindesk.com/v1/bpi/currentprice.json')
//   .then(response => (this.info = response.data.bpi))
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
