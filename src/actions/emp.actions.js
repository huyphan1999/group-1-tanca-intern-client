export const empRequest = function empRequest(request,newdata,target,requestUrl) {
    return {
      type: request,
      target:target,
      url:requestUrl,
      newdata
    }
  }