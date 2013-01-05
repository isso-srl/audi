/*
 * @Autor: Pablo Garcia guaman
 * @Email: garcia_guaman_pablo@hotmail.com
 */
Ext.Loader.setConfig({
    enabled: true
});
Ext.Loader.setPath('Audi.helper', 'app/helper/');
Ext.require(
    ['Audi.helper.Constants',
     'Audi.helper.Tools'//,
   //  'Erp.helper.ComboAutoCompletado'
    ]
    );

Ext.application({
    name: 'Audi',
    appFolder: 'app',
    autoCreateViewport: false,
    controllers:[
		'ControllerLogin',
        'Principal',
        'configuracion.ControllerRegistrarEmpresa',
        'configuracion.ControllerRegistrarUsuario'/*
        'ControllerPlanCuentas',
        'configuraciones.ControllerPlanCuentas',
                
        'plancuentas.ControllerCuentasAsociadas',
        'finanzas.ControllerTipoCambio',
        
        'almacenes.item.ControllerItemWindow',
        'almacenes.item.ControllerItemList',
        'almacenes.ControllerListaPrecios',
        'almacenes.ControllerItemDatosGenerales',
        'almacenes.ControllerItemDatosAdicionales',
        'almacenes.ControllerCategoria',
        'almacenes.item.unit.ControllerUnit',

        'almacenes.proveedores.ControllerProveedores',

        'configuraciones.ControllerAlmacenes',

        'almacenes.maestroalmacen.ControllerMaestroAlmacen',
        
        'almacenes.transacciones.ControllerListaCompras',
        'almacenes.transacciones.ControllerCondicionPago',
        'almacenes.transacciones.ControllerDocImage',
        'almacenes.transacciones.ControllerTxnCompras',
        'almacenes.transacciones.ControllerListaEntradas',
        'almacenes.transacciones.ControllerTxnEntradas',
        'almacenes.transacciones.ControllerListaSalidas',
        'almacenes.transacciones.ControllerListaTransferencias',
        'almacenes.transacciones.ControllerTxnTransferencias',
        'almacenes.transacciones.ControllerListaRecepcionTransferencias',

        'almacenes.transacciones.ControllerTxnRecepcionTransferencias',
        'almacenes.transacciones.ControllerTxnSalidas',
        'almacenes.kardex.ControllerKardexItem',
        'rrhh.contratacion.ControllerDatosContratacion',
        //RRHH
        'rrhh.organigrama.ControllerOrganigrama',
        'rrhh.personal.ControllerListaPersonal',
        'rrhh.personal.ControllerPersonal',
        'rrhh.cargos.ControllerCargos',
        'rrhh.planilla.ControllerPlanilla',
        'rrhh.kardex.ControllerKardex',
        'rrhh.documentos.ControllerEmisionDocumentos',
        'rrhh.documentos.ControllerDocumentos',
        'rrhh.documentos.ControllerTemplates',
        'rrhh.rciva.ControllerWindowRciva',
        'configuraciones.ControllerConfigRrhh',
        'rrhh.costosalarialtotal.ControllerCostoSalarialTotal',
        'rrhh.transacciones.ControllerWindowPrestamos',
        'rrhh.transacciones.ControllerListaPrestamos',
        //Control de Asistencia
        'rrhh.controlasistencia.ControllerSchedules'*/


    ],
    //views:['Principal'],
    launch: function() {
        
		var hideMask = function () {
		  Ext.get('loading').remove();
		  Ext.fly('loading-mask').animate({
			opacity : 0,
			remove  : true
		  });
                  
                  Ext.Ajax.request({
                        url:'data/classes/sis_audi_user.php',
                        params:{xaction:'isLoged'},
                        success:function(response){
                            var result=Ext.JSON.decode(response.responseText);
                            if (!result.success) {
                                var winLogin=Ext.create('Audi.view.Login',{
                                        
                                }).show();
                            }else{
                                
                                
                                var headmenu=Ext.create('Audi.view.HeadMenu',{
                                    items:[{text:result.login,
                                            iconCls:'icon-user',
                                            option:'usuario'},
                                            {text:result.enterprise,
                                            iconCls:'icon-empresa',
                                            option:'empresa'},
											{
                                            xtype: 'splitbutton',
                                            text: 'Configuracion',
											iconCls:'icon-config',
                                            //width:198,
                                            menuAlign:'bl',
                                            menu: {
                                                xtype: 'menu',
                                                //width: 198,
															items: [
																{
                                                                    xtype: 'menuitem',
                                                                    option:'btnempresa',
                                                                    text: 'Registrar Empresa'
                                                                },{
																	xtype: 'menuitem',
																	option:'btnusuario',
																	text: 'Registrar Usuario'
																},
																{
																	xtype: 'menuitem',
																	option      : 'btnBG',
																	text        : 'Registrar B.G.'
																} ,   
																		
																{
																	xtype       : 'menuitem',
																	option      : 'btnER',
																	text        : 'Registrar E.R.'

																}
															]
														}
											},
											/*{text:'Configuracion',
                                            tooltip:'Salir del Sistema',
                                            iconCls:'icon-config',
                                            option:'legPla'},*/
											{text:'Legajo de Planificacion',
                                            tooltip:'Salir del Sistema',
                                            iconCls:'icon-legajos',
                                            option:'legPla'},
											{text:'Legajo de Ejecucion',
                                            tooltip:'Salir del Sistema',
                                            iconCls:'icon-legajos',
                                            option:'lege'},
											{text:'Comunicacion de Resultados',
                                            tooltip:'Salir del Sistema',
                                            iconCls:'icon-legajos',
                                            option:'legr'},
                                            {text:'Salir',
                                            tooltip:'Salir del Sistema',
                                            iconCls:'icon-logout',
                                            option:'salir'}
                                    ]
                                });
                                var head=Ext.create('Audi.view.HeadPanel',{
                                    tbar:[headmenu]
                                });

                                var viewport=Ext.create('Audi.view.Principal',{
                                    login:result.login,
                                    enterprise:result.enterprise
                                });
                                viewport.add(head);
                                
                            }

                        }

                    });
                  
		};
		Ext.defer(hideMask, 1000);
  }
    
});


