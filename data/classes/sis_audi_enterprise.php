<?php session_start(); ?>
<?php
/*
 * 
 */

require_once '../include.php';
    class sis_audi_enterprise 
    {
        public $_iduser;
        public $_tablename;

        public function __construct($iduser) {
            $this->_iduser=$iduser;
            $this->_tablename=  audi_enterprise::table_name();
        }
        public function __call($option,$att) {
            $datos=$att[0];
            $yaction=$datos['yaction'];
            switch ($option)
            {   
                case 'read':

                break;

                case 'save':
                    switch ($yaction) {
                        case 'insertenterprise':
                           
                           $dataenterprise=Array();

                           (isset($datos['enterprise_active'])?$dataenterprise['enterprise_active']='true':$dataenterprise['enterprise_active']='false');

                           foreach ($datos as $key => $value) {
                               if($key!=xaction && $key!=yaction && $key!=id_enterprise && $key!=enterprise_active)
                                    $dataenterprise[$key]=$value;
                           }

                           try{

                              $enterprise=audi_enterprise::create($dataenterprise);

                              if ($enterprise) {
                                  echo '{"success":true,"title":"Correcto:","msg":"Se guardo correctamente!!","id_enterprise":'.$enterprise->id_enterprise.'}';
                                
                              }else{
                                  echo '{"success":false,"title":"Error:","msg":"No se pudo guardar, intente nuevamente"}';
                              }

                           }catch(Exception $exc){
                              echo '{"success":false,"title":"Error:","msg":"No se pudo guardar losdatos!!","error":"'.addslashes($exc->getMessage()).'"}';
                           }
                        break;
                        
                    
                    }

                break;

                
            }
        }
    }
    
    $iduser=isset($_SESSION['audi']['id_user'])?$_SESSION['audi']['id_user']:0;
    $xaction=$_POST['xaction'];
    $enterprise=new sis_audi_enterprise($iduser);
    $enterprise->$xaction($_POST);
?>
