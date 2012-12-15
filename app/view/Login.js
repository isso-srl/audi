
/*
 * @Autor: Pablo Garcia guaman
 * @Email: garcia_guaman_pablo@hotmail.com
 */

Ext.define('Audi.view.Login',{
        extend  :   'Ext.window.Window',
        alias   :   'widget.login',
        title   :   'Bienvenidos a !!!Audi!!!',
        layout  :   'fit',
        height  :   190,
        width   :   410,
        closable:   false,
        margins :   '5 5 5 5',
        modal   :   true,
        //frame   :   true,
        margin  : 2,
        headerPosition  : 'top',
        bbar: [{
          xtype: 'text',
          text: ' ©    2013 - present. iso',
          height  :   20,
          }],
        items   :   [{
                        xtype   :   'form',
                        //height  :   500,
                        //width   :   500,
                        bodyStyle: "background-image:url('data/dataimages/items/cables.jpg')",
                        //frame   : true,    
                        border  :   false,
                        items   :   [/*{
                                        xtype:'fieldset',
                                        columnWidth: 0.5,
                                        defaultType: 'textfield',
                                        defaults: {
                                            anchor: '100%',
                                            labelWidth:80
                                        },
                                        layout: 'anchor',
                                        height:150,
                                        border:false,
                                        padding: '20 10 0 10',
                                        items :[
                                                {	
                                                        xtype:'textfield',
                                                        fieldLabel: 'Usuario',
                                                        name: 'login',
                                                        allowBlank:false,
                                                        emptyText:'Usuario...',
                                                        labelCls : 'letralogin'
                                                }, {
                                                        xtype:'textfield',
                                                        inputType:'password',
                                                        fieldLabel: 'Password',
                                                        name: 'password',
                                                        allowBlank:false,
                                                        emptyText:'Password...',
                                                        labelCls : 'letralogin'
                                                }
                                                ]
					},*/
                    {
                            xtype   : 'fieldcontainer',
                            //flex    : 1,
                            //height  : 55,
                            
                            layout  : {
                                align   : 'stretch',
                                //pack    : 'center',
                                padding: '40 5 0 140',
                                type    : 'vbox'
                                
                            },
                            defaults: {
                                            anchor: '100%',
                                            labelWidth:70
                                        },
                            items   : [{    
                                                        xtype:'textfield',
                                                        fieldLabel: 'Usuario',
                                                        name: 'login',
                                                        allowBlank:false,
                                                        emptyText:'Usuario...',
                                                        labelCls : 'letralogin'
                                                }, {
                                                        xtype:'textfield',
                                                        inputType:'password',
                                                        fieldLabel: 'Password',
                                                        name: 'password',
                                                        allowBlank:false,
                                                        emptyText:'Password...',
                                                        labelCls : 'letralogin'
                                                }]
                        },
                    {
                            xtype   : 'fieldcontainer',
                            flex    : 1,
                            height  : 30,
                            layout  : {
                                align   : 'stretch',
                                pack    : 'end',
                                padding: '0 5 0 0',
                                type    : 'hbox'
                                
                            },
                            items   : [{
                                    xtype:'button',
                                    text:'Aceptar',
                                    scale:'large',
                                    //id:'acept',
                                    width:86,
                                    pressed:true,
                                    option:'aceptar',
                                    margin  : '0 5 0 0'
                                },{
                                    xtype:'button',
                                    text:'Cancelar',
                                    width:86,
                                    //scale:'large',
                                    pressed:true,
                                    option:'cancelar'
                                }]
                        }
                    ]
                        
                    }],
        /*dockedItems:[{
                        xtype:'toolbar',
                        dock:'right',
                        items:[{
                                    xtype:'button',
                                    text:'Aceptar',
                                    scale:'large',
                                    //id:'acept',
                                    width:100,
                                    pressed:true,
                                    option:'aceptar'
                                },{
                                    xtype:'button',
                                    text:'Cancelar',
                                    width:100,
                                    scale:'large',
                                    pressed:true,
                                    option:'cancelar'
                                }]
                    }],*/
       initComponent: function() {
           var me = this;
           
            
           me.callParent(arguments);
       }
});


