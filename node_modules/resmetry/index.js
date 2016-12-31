'use strict';
var mqtt=require('mqtt');
var mqtt_client;
//Events
var events = require('events');
var eventEmitter = new events.EventEmitter();
eventEmitter.setMaxListeners(0)
//Where topics are stored
var topicList=[];

class resmetry{
  constructor(){

  }
  connect(host,settings){
    mqtt_client= mqtt.connect(host,settings);
    mqtt_client.on('message',function(topic,message){
      var index=topicList.indexOf(topic);
      if(index!=-1)
      {
        eventEmitter.emit(topic,message.toString());
        mqtt_client.unsubscribe(topic);
        topicList.splice(index, 1);
      }
    });
  }
  getMQTTClient(){
    return mqtt_client;
  }
  request(topic,data,options,responseTopic,callback){
    mqtt_client.publish(topic,data,options,function(err){
      if(err)
        callback('null');
      else{
        mqtt_client.subscribe(responseTopic);
        topicList.push(responseTopic);
        eventEmitter.once(responseTopic, function(response){
          callback('null',response);
        });
      }
    });
  }
}
module.exports=resmetry;
