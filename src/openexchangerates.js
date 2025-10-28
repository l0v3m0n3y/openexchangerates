class openexchangerates{
    constructor(app_id){
        this.api = "https://openexchangerates.org/api"
        this.app_id=app_id
        this.headers={"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36 Edg/126.0.0.0","content-type":"application/json; charset=UTF-8"}
    }
    async last_rates(){
        let req=await fetch(`${this.api}/latest.json?app_id=${this.app_id}`,{method:"GET",headers: this.headers});
        return await req.json();
    }
    async history_rates(data){
        let req=await fetch(`${this.api}/historical/${data}.json?app_id=${this.app_id}`,{method:"GET",headers: this.headers});
        return await req.json();
    }
    async time_series(){
        let req=await fetch(`${this.api}/time-series.json?app_id=${this.app_id}`,{method:"GET",headers: this.headers});
        return await req.json();
    }
    async currencies_list(url){
        let req=await fetch(`${this.api}/currencies.json?app_id=${this.app_id}`,{method:"GET",headers: this.headers});
        return await req.json();
    }
    async convert_info(coin_from,coin_to){
        let req=await fetch(`${this.api}/convert/${coin_from}/${coin_to}?app_id=${this.api_id}`,{method:"GET",headers: this.headers});
        return await req.json();
    }
    async ohlc_info(start,period,base,crypto){
        let req=await fetch(`${this.api}/ohlc.json?app_id=${this.api_id}&start=${start}&period=${period}&base=${base}&symbols=${crypto}`,{method:"GET",headers: this.headers});
        return await req.json();
    }
    async usage_info(){
        let req=await fetch(`${this.api}/usage.json?app_id=${this.api_id}`,{method:"GET",headers: this.headers});
        return await req.json();
    }
}
module.exports = {openexchangerates};