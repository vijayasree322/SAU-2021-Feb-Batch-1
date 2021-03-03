package com.techprimers.kafka.springbootkafkaproducerexample.resource;


import com.techprimers.kafka.springbootkafkaproducerexample.model.OrderDetails;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("kafka")
public class UserResource {

    @Autowired
    KafkaTemplate<String, OrderDetails> kafkaTemplate;
    private  static  final  String TOPIC = "Kafka_Example";

    @GetMapping("/publish/{name}")
    public String post(@PathVariable("name") final String message)
    {
        kafkaTemplate.send(TOPIC,new OrderDetails("Vijaya","Pizza",1,300));
        return "Published Successfully";
    }

}
