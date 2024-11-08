
export const fetchData = async (apiRoute , method  , data , type = 'json') =>{
  const headerJson = {
    "Accept": "application/json",
    "Content-Type": "application/json",
  }

  const headerForm = {
    "Accept": "application/json",
    "Content-Type": "multipart/form-data",
  }
  // console.log(data.values())
  return await fetch(`http://localhost:8000/api${apiRoute}` , {
        method: method,
        body: type == 'json' ? JSON.stringify(data) : data,
        credentials: "include",
        headers: type == 'json' ? headerJson : headerForm
    })

}