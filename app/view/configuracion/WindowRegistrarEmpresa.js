Ext.define('Audi.view.configuracion.WindowRegistrarEmpresa', {
    extend: 'Ext.window.Window',
    alias   : 'widget.windowregistrarempresa',
    //height: 210,
    width: 450,
    title: 'Registro de empresa',
	constrain           : true,
    constrainHeader : true,
    resizable   : false,
    closeAction     : 'destroy',
    layout: {
        type: 'fit'
    },
    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'form',

                    //height: 306,
                    bodyPadding: 10,
                    layout  : 'anchor',
                  
                    items: [
                        {
                            xtype: 'fieldset',
                            title: 'Datos generales',
                            items: [
                                {
                                    xtype: 'numberfield',
                                    anchor: '100%',
                                    fieldLabel: 'id_enterprise' ,
                                    name : 'id_enterprise',
                                    hideTrigger :true
                                }, {
                                    xtype: 'numberfield',
                                    anchor: '100%',
                                    fieldLabel: 'NIT',
                                    name    : 'enterprise_nit',
                                    allowBlank  : false,
                                    hideTrigger :true
                                },
                                {
                                    xtype: 'textfield',
                                    anchor: '100%',
                                    fieldLabel: 'Razon social',
                                    name    : 'bussiness_name',
                                    allowBlank  : false

                                },
                                {
                                    xtype: 'textfield',
                                    anchor: '100%',
                                    fieldLabel: 'Propietario',
                                    name    : 'legal_representative',
                                    allowBlank  : false
                                },
                                {
                                    xtype: 'textfield',
                                    anchor: '100%',
                                    fieldLabel: 'Direccion',
                                    name    : 'enterprise_address'
                                },
                                {
                                    xtype: 'textfield',
                                    anchor: '100%',
                                    fieldLabel: 'Codigo Postal',
                                    name    : 'enterprise_zip_code'
                                },
                                {
                                    xtype : 'checkbox',
                                    anchor  : '100%',
                                    fieldLabel : 'Activo',
                                    name: 'enterprise_active'
                                }
                                
                            ]
                        },
                        
                        {
                            xtype: 'button',
                            height: 30,
                            width: 114,
                            text: 'Registrar',
                            option  : 'btnregistrar'
                        },
                        {
                            xtype: 'button',
                            height: 31,
                            width: 112,
                            text: 'Nuevo',
                            option  : 'btnnuevo'
                        },
                        {
                            xtype: 'button',
                            height: 31,
                            width: 112,
                            text: 'Cancelar',
                            option  : 'btncancelar'
                        }
                    ]
                }
            ]
        });

        me.callParent(arguments);
    }

});