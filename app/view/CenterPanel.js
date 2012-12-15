

/*
 * @Autor: Pablo Garcia guaman
 * @Email: garcia_guaman_pablo@hotmail.com
 */

Ext.define('Audi.view.CenterPanel',{
    extend:'Ext.panel.Panel',
    alias:'widget.centerpanel',
    split:true,
    region: 'center',
    margins:'0 8 8 8',

    items: [],
    initComponet:function(){
        this.callParent(arguments);
    }
});


