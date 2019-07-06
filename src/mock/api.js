const Mock = require('mockjs')

Mock.mock('/getList', 'post', {data: [{
  name: 'Amelia',
  introduce: '我叫艾米莉亚, 擅长魔法'
},
{
  name: 'Broniya',
  introduce: '我叫布洛尼亚, 擅长机械'
},
{
  name: 'Cris',
  introduce: '我叫克里斯, 擅长战斗'
}]})

Mock.mock('/login', 'post', (option) => {
  console.log(option.body)
  return 'success'
})
export default Mock
