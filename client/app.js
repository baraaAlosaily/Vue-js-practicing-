const vm= Vue.createApp({
    data(){
        return {
            firstName:"John",
            middleName:'',
            lastName:"Jones",
            url:"https://google.com",
            raw_url:'<a href="www.google.com" target="_blank">Google</a>',
            age:20,
            isPurple:false,
            size:150,
            transform:100,
            mode:1,
            birds:['Pigeons','Eagles','Doves'],
            people:[
                {name:'John',age:20},
                {name:'Rick',age:18},
                {name:'Amy',age:33},
            ]
        }
    },
    methods:{
      increamentAge(){
          this.age--;
      },
      updateLastName(msg,event){
          console.log(msg)
          this.lastName=event.target.value;
      },
      updateMiddleName(event){
          event.preventDefault()
          this.middleName=event.target.value;
      }
    },
    computed:{
        fullName(){
            console.log("first")
           return  `${this.firstName} ${this.middleName} ${this.lastName.toUpperCase()}`
        },

        circle_classes(){
            return {purpule: this.isPurple}
        }
    },
    watch:{
        age(newValue,oldValue){
            setTimeout(()=>{
                this.age=20;
            },2000)
        }
    }
}).mount("#app")

