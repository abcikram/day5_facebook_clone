# day5_facebook_clone

# day6_RailYatri :-

1. we needed 


 2. passengerSchema = {
    name:{
        type: String,
        required:true,
    },
    phone:{
        type:String,
        required:true 
    },
    email:{
        type:String,
        required:true
    },
    password :{
        type:String,
        required:true,
    }

 } 

 collection name :- passenger


 3.
    citySchema={
    name :{
        type:String,
        required :true
    },
    trainStation :[{
        trainstationId : {
            type: ObjectId,
            ref: "trainstation",
        }
    }],

    busStop:[{
        bustopId : {
            type: ObjectId,
            ref: "busstop",
        }
    }],
     
 }

collection name :- city

4. busSchema = {
    name :{ type:String ,required:true },

    smartBus :  { type :Boolean , required : true}
    
    time : { from : Number , to : Number },
    
    Luxuarytype:{  type: String , enum : ["AC", "Non Ac"] }
    
    seatype :{ type: String , enum :["SLEEPER","SEATER"] },

    price:{ type:Number , required : true},

    typeOfbus : { type :String , enum : ["day","night"], required : true },

    image : { type :String , required : true },

    review : [{
        passengerId :{
           type: ObjectId ,
           required : true,
        }, 
        rating:{
            type:Number,
            required:true
        },
        message:{type:String}
    }],

    dayAvaibility :{
        sunday : Boolean,
        Monday : Boolean,
        Tuesday : Boolean,
        Weddnesay : Boolean,
        Thrusday : Boolean,
        Friday : Boolean,
        Saturday : Boolean,
    }, 
    stops :[{
        busStops: {
            type : ObjectId,
            ref:"busstop"
        },
        city:{
            type : ObjectId,
            ref:'city'
        }
    }]
}

collection Name : - bus 

5. 
busStationSchema = {
    name : {type:String, required: true},
}
collection name : busstop 


6. trainStationSchema = {
    name : {type:String, required: true}, 
    numberOfPlatform : {type :Number , required : true},
}

collection name :- trainstation
1. 
 trainSchema = {
       name :{
           type :String,
           required:true
       },
       
       dayAvaibility :{
        sunday : Boolean,
        Monday : Boolean,
        Tuesday : Boolean,
        Weddnesay : Boolean,
        Thrusday : Boolean,
        Friday : Boolean,
        Saturday : Boolean,
       },

       trainNumber : {
        type:Number,
        unique:true,
        required:true 
       },

       boggie : [{
          boggieId :{
            type:ObjectId,
            ref:'boggie'
          },
          quantity:{
            type:Number,
            default:1,
          }
       }],
        stops :[{
        trainStops: {
            type : ObjectId,
            ref:"trainstop"
        },
        city:{
            type : ObjectId,
            ref:'city'
        }
    }]
 } 

collection name :- train


8. boggieSchema = {
    coachName :{
        type : String ,
        enum :['SL','3A','2A','1A','EC','CC','2S']
    } 
    coachType :{
        type :String,
        enum:["AC","NON AC"]
    }
    numberOfUpper :{
        type:Number,
    },
    numberOfLower :{
        type:Number, 
    },
    numberOfMiddle :{
        type:Number, 
    },
    numberOfSideUpper:{
        type:Number, 
    },
    numberofSideLower :{
        type:Number, 
    },
    numberofSeats :{
        type:Number, 
    },
}

collection name :- boggie 

trainBookingSchema = {
    userId : {type :ObjectId , ref : 'user'},
    bogieId: { type:ObjectId , ref: 'bogie'},
    status : { type : String , enum :['pending' ,'rejects', 'fullfield' ]}
}



# API LIST


## 1. Authentication API 

- User register
- User login
- User verify the OTP 
- User Update his/her profile .
- User logout 


## 2. city API :-
- create the city 
- update the city

## 3. busstop API :- 
- creating busstop .
- update busstop

## 4. trainStation API :- 
- creating trainstation 
- update trainstation 


## 2. bogie API 
- Creating the bogie .
- user can check the bogie , how many seats available,
- Update the bogie when user booking . 

## 3. Train  API 

- After the creating the bogie , we use the bogieId  to the train ,for creating the train .
- we are getting the train using get Method and here we using all of the the filter , query , all of that.
 we are searching we I will go and where I am from .
-  we are find the particular train .
- After user put the token to verify himself and then he continue to payment .
   

## Booking API :-
- After the train the booking , by using booking schema we are creating bookingId .
- The user will get booking Id is see the data .

## 

## Bus API :-
- Creating the bus , 
- we are getting the bus and the we using filtering method . from where, to where we need to go .
- we are going into particular bus Id .
