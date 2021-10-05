const express = require('express');

class HomeController{
    getHome = (req, res) => {
        res.render('home/home')
    }
}

module.exports = new HomeController();