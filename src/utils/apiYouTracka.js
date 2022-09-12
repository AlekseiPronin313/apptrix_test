import axios from "axios"

export const getContent = async () => {
  return await axios.get('/youtrack/api/users?fields=id,login,name,email&$top=100',
{  
   headers: {
    'Authorization': 'Bearer perm:cm9vdA==.NDktNQ==.U9qYToWJGGM0yfVz5wjeYYas7FDvGL' }
})
.then(res => res.data)
.catch(erro => console.log(erro))
}