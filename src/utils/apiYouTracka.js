import axios from "axios"

const token = 'perm:cm9vdA==.NDktNQ==.U9qYToWJGGM0yfVz5wjeYYas7FDvGL'

export const getContent = async () => {
  return await axios.get('/youtrack/api/users?fields=id,login,name,email&$top=100',{  
   headers: {
    'Authorization': `Bearer ${token}`}
})
.catch(err => console.log(err))
}

export const getTasks = async () => {
  return await axios.get('/youtrack/api/issues?fields=id,summary,project(name)', {
    headers: {
      'Authorization': `Bearer ${token}`}
  })
  .catch(err => console.log(err))
}