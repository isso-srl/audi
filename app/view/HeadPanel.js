
/*
 * @Autor: Pablo Garcia guaman
 * @Email: garcia_guaman_pablo@hotmail.com
 */

Ext.define('Audi.view.HeadPanel', {
    extend: 'Ext.panel.Panel',
    alias:'widget.headpanel',
    height: 70,
    frame:true,
    region: 'north',
    collapsible : true,
    collapseMode:'mini',
    margins:'5 5 0 5',
    border:false,
    split:true,
    hideCollapseTool:true,
    header:false,
    //placeholder:{hidden:true},    //funciona pero no vuelve a mostrar
    //html:'<h1 style:"text-align:center;color:#04408C;"><b>ERP - INFINITYs</b></h1>',
    titleAlign:'center',
    title:'                   ::: Audi ISSO :::',
    
    initComponet:function(){

    }
});