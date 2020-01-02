
  export const companyRequest = function companyRequest(request,newdata,target,requestUrl) {
    return {
      type: request,
      target:target,
      url:requestUrl,
      newdata
    }
  }
  