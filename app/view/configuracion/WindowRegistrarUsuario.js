Ext.define('Audi.view.configuracion.WindowRegistrarUsuario', {
    alias   : 'widget.windowregistrarusuario',
    constrain           : true,
    constrainHeader : true,
    resizable   : false,
    closeAction     : 'destroy',
    extend: 'Ext.window.Window',
//    height: 500,
    width: 500,
    layout: {
        type: 'fit'
    },
    title: 'Datos Usuario',

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'form',
                    frame: true,
                    items: [
                        {
                            xtype: 'textfield',
                            anchor: '50%',
                            fieldLabel: 'iduser'
                        },
                        {
                            xtype: 'fieldset',
                            defaults: {
                                anchor: '95%',
                                labelWidth: 120,
                                allowBlank  : false,
                                msgTarget : 'side'
                            },
                            title: 'Datos Personales',
                            items: [
                                {
                                    xtype: 'textfield',
                                    fieldLabel: 'Nombres'
                                },
                                {
                                    xtype: 'textfield',
                                    fieldLabel: 'Apellido Paterno'
                                },
                                {
                                    xtype: 'textfield',
                                    fieldLabel: 'Apellido Materno'
                                },
                                {
                                    xtype: 'fieldcontainer',
                                    layout: {
                                        type: 'column'
                                    },
                                    items: [
                                        {
                                            xtype: 'numberfield',
                                            fieldLabel: 'CI',
                                            labelWidth: 120,
                                            hideTrigger: true
                                        },
                                        {
                                            xtype: 'combobox',
                                            margin: '0 0 0 20',
                                            width: 80
                                        }
                                    ]
                                },
                                {
                                    xtype: 'textfield',
                                    fieldLabel: 'Profesion'
                                },
                                {
                                    xtype: 'textfield',
                                    anchor: '80%',
                                    fieldLabel: 'email'
                                },
                                {
                                    xtype: 'textfield',
                                    fieldLabel: 'Direccion'
                                },
                                {
                                    xtype: 'fieldcontainer',
                                    layout: {
                                        type: 'column'
                                    },
                                    items: [
                                        {
                                            xtype: 'numberfield',
                                            columnWidth: 0.5,
                                            fieldLabel: 'Telefono',
                                            labelWidth: 120,
                                            hideTrigger: true
                                        },
                                        {
                                            xtype: 'numberfield',
                                            columnWidth: 0.5,
                                            margin: '0 0 0 20',
                                            fieldLabel: 'Celular',
                                            labelWidth: 80,
                                            hideTrigger: true
                                        }
                                    ]
                                },
                                {
                                    xtype: 'datefield',
                                    anchor: '50%',
                                    fieldLabel: 'Fecha Nac.'
                                }
                            ]
                        },
                        {
                            xtype: 'fieldset',
                            defaults: {
                                anchor: '80%',
                                labelWidth: 120
                            },
                            title: 'Datos Cuenta',
                            items: [
                                {
                                    xtype: 'textfield',
                                    fieldLabel: 'Nombre de usuario'
                                },
                                {
                                    xtype: 'textfield',
                                    fieldLabel: 'Contraseña'
                                }
                            ]
                        },
                        {
                            xtype: 'fieldcontainer',
                            layout: {
                                align: 'stretch',
                                pack: 'end',
                                type: 'hbox'
                            },
                            items: [
                                {
                                    xtype: 'button',
                                    flex: 1,
                                    margin: '0 10',
                                    maxWidth: 80,
                                    width: 80,
                                    text: 'Cancelar'
                                },
                                {
                                    xtype: 'button',
                                    margin: '0 10',
                                    width: 80,
                                    text: 'Guardar'
                                }
                            ]
                        }
                    ]
                }
            ]
        });

        me.callParent(arguments);
    }

});