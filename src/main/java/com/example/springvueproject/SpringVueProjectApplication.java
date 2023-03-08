package com.example.springvueproject;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;

@SpringBootApplication(exclude={DataSourceAutoConfiguration.class})
public class SpringVueProjectApplication {

    public static void main(String[] args) {
        SpringApplication.run(SpringVueProjectApplication.class, args);
    }

}
