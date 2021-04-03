window.addEventListener('load',()=>{
	var app = new Vue({
	  el: '#app',
	  data: {
	    where:"",
	    current:[],
	    icon:'',
	  },
	  methods:{
	  	getWeather:function(){
	  		if (this.where!="") {
		      fetch(`http://api.weatherapi.com/v1/current.json?key=4f969564b56c46c984f183131212603&q=${this.where}`)
		        .then((res)=>{ return res.json() })
		        .then((res)=> {
					this.current=res.current;
					this.icon=`http://${res.current.condition.icon}`;
					console.log(res);
	      		})
		      }
		      else{
		      	alert("Error, Lütfen "+this.where+" konumu kontrol ediniz!!!!");
		      }
      }
		},
	})
})		
	

//this.time=this.location.localtime;
//http://localhost:8000/data.json
//8fb14b4e99b443f2b1a162503181709
//{ "name": "Paris", "region": "Ile-de-France", "country": "France", "lat": 48.87, "lon": 2.33, "tz_id": "Europe/Paris", "localtime_epoch": 1537203464, "localtime": "2018-09-17 18:57" }
