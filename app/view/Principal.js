

/*
 * @Autor: Pablo Garcia guaman
 * @Email: garcia_guaman_pablo@hotmail.com
 */

Ext.define('Audi.view.Principal', {
    extend: 'Ext.container.Viewport',
    alias:'widget.principal',
    layout: {
        type: 'border'
    },
    suspendLayout: false,

    initComponent: function() {
        Ext.applyIf(this, {
            items: [
                //Ext.create('Erp.view.HeadPanel',{}),
                Ext.create('Audi.view.MenuPanel',{}),
                Ext.create('Audi.view.CenterPanel',{id:'center-panel'}),
            ]
        });

        this.callParent(arguments);
    }

});