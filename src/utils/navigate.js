import { NavigationActions } from 'react-navigation';

export const navigate =(key,data)=>{ 
  console.log(`Navigate ${key}`)
  NavigationActions.navigate({
  routeName: key,

  params: {...data},

});}
 
  