# openexchangerates
JavaScript library for openexchangerates.org
# main
```js
async function main(){
    const {openexchangerates} = require('./openexchangerates');
    const changerates= new openexchangerates("app_id");
    let req=await changerates.time_series()
    console.log(req)
}
main()
```
