package com.web.portfolio.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/portfolio")
public class PortfolioController {

    @RequestMapping("/name")
    public String greet() {
        return "Porfolio API Controller";
    }

}
