/*
 * GET home page.
 */
import express = require('express');
import azurepricing = require('../azurepricing');

export function index(req: express.Request, res: express.Response) {
    res.render('index', { title: 'Express' });
};

export function webSites(req: express.Request, res: express.Response) {
    azurepricing.getAzureWebSitesPricing((data) => {
        res.send({ 'data': data });
    });   
}

export function mobileService(req: express.Request, res: express.Response) {
    azurepricing.getAzureMobileService((data) => {
        res.send({ 'data': data });
    });
}

export function virtualMachine(req: express.Request, res: express.Response) {
    azurepricing.getAzureVirtualMachine((data) => {
        res.send({ 'data': data });
    });
}