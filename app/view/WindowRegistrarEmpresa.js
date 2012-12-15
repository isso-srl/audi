Ext.define('Audi.view.WindowRegistrarEmpresa', {
    extend: 'Ext.window.Window',

    height: 210,
    width: 626,
    title: 'Registro de empresa',
	constrain           : true,
    constrainHeader : true,
    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'form',
                    height: 306,
                    bodyPadding: 10,
                    title: '',
                    items: [
                        {
                            xtype: 'fieldset',
                            title: 'Datos generales',
                            items: [
                                {
                                    xtype: 'numberfield',
                                    anchor: '100%',
                                    fieldLabel: 'NIT'
                                },
                                {
                                    xtype: 'textfield',
                                    anchor: '100%',
                                    fieldLabel: 'Razon social'
                                },
                                {
                                    xtype: 'textfield',
                                    anchor: '100%',
                                    fieldLabel: 'Propietario'
                                }
                            ]
                        },
                        {
                            xtype: 'button',
                            height: 30,
                            width: 114,
                            text: 'Registrar'
                        },
                        {
                            xtype: 'button',
                            height: 31,
                            width: 112,
                            text: 'Cancelar'
                        }
                    ]
                }
            ]
        });

        me.callParent(arguments);
    }

});