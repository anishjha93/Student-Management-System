/**
 * 
 */
 var app = angular.module('myApp', ['ngRoute','ui.bootstrap']);
    
	app.config(function($routeProvider,$httpProvider,$locationProvider) {
		  $routeProvider

		  .when('/', {
		    templateUrl : 'home.html',
		    controller  : 'HomeController'
		  })

		  .when('/form', {
		    templateUrl : 'form.html',
		    controller  : 'AddController'
		  })
		  
		  .when('/update', {
		    templateUrl : 'update.html',
		    controller  : 'updateController'
		  })

		  .when('/load', {
		    templateUrl : 'load.html',
		    controller  : 'displayController'
		  })

		  .otherwise({redirectTo: '/'});
		  
		  //$httpProvider.defaults.headers.common["X-Requested-With"] = 'XMLHttpRequest';
		  
		  $locationProvider.html5Mode(true);
		  
		});
		
		app.controller('HomeController', function($scope) {
			 // $scope.message = 'Hello from HomeController';	  
			});
		
		
		/////////////////???????????????????????????????????*************Add Detail****************?????????????????????/////////////////////////
		app.controller('AddController', function($scope,$http) {
			  $scope.message = 'Hello from BlogController';
			  $scope.formShowStatus=true;
			  $scope.responseData="";
			  $scope.myForm={};
			  $scope.idAvailability=true;
			  $scope.checkUserId=function(){
				  if(isNaN($scope.myForm.id))
					  {
					  	$scope.idStatus="Id should be only in digit";
					  	$scope.idColors='red';
					  	$scope.idClass="";
					  }
				  else{
					    
				  $http({
		              method:'GET',
		              url:'loads?id='+parseInt($scope.myForm.id,10)
		          }).then(function(response){
		              $scope.st=response.data;
		              if($scope.st==""){
		            	  $scope.idClass="glyphicon glyphicon-ok";
		            	  $scope.idColors='green';
		            	  $scope.idStatus="";
		            	  $scope.idAvailability=true;
		              }
		              else{
		            	  $scope.idColors='red';
		            	  $scope.idClass="";
		            	  $scope.idStatus=$scope.myForm.id+" is not Available";
		            	  $scope.idAvailability=false;
		              }
		            
		          },function errorCallback(response){
		          });
			  	}
			  }
			  
			  $scope.myForm.submitForm=function(){
				  $scope.nameStatus="";
				  $scope.nameColors='';
				  $scope.sectionStatus="";
				  $scope.sectionColors='';
				  $scope.addressStatus="";
				  $scope.addressColors='';
				  $scope.cityStatus="";
				  $scope.cityColors='';
				  if($scope.myForm.id=="" ||$scope.myForm.id==undefined){
					  $scope.idStatus="Id Cant be Blank";
					  $scope.idColors='red';
					  return false;
				  }
				  else if(isNaN($scope.myForm.id)){
					  $scope.idStatus="Please Correct id is not in format";
					  $scope.idColors='red';
					  return false;
				  }
				  else if($scope.idAvailability===false){
					  $scope.idStatus="Please Chhose another id";
					  $scope.idColors='red';
					  return false;
				  }
				  else if($scope.myForm.name=="" || $scope.myForm.name==undefined){
					  $scope.nameStatus="Name Cant be Blank";
					  $scope.nameColors='red';
					  return false;
				  }
				  else if($scope.myForm.section=="" || $scope.myForm.section==undefined){
					  $scope.sectionStatus="Section cant be Blank";
					  $scope.sectionColors='red';
					  return false;
				  }
				  else if($scope.myForm.address=="" || $scope.myForm.address==undefined){
					  $scope.addressStatus="Address cant be Blank";
					  $scope.addressColors='red';
					  return false;
				  }
				  else if($scope.myForm.city=="" || $scope.myForm.city==undefined){
					  $scope.cityStatus="City cant be Blank";
					  $scope.cityColors='red';
				  }
				  else
					  {
					  $http.post('formss',$scope.myForm,{
						  headers:{
							  'Content-type': 'application/json'
						  }
					  }).
					  then(function(response){
						  $scope.st=response.data;
						  $scope.formShowStatus=false;
						  $scope.responseData="Details Added";
					  },function errorCallback(response){
						  alert(response);
					  })
				  };
					  }
			});
		
		/////////////?????????????*********************Update And Delete***************************???????????????????/////////
		
		app.controller('updateController', function($scope,$http) {
		  $scope.message = 'Hello from updateController';
		  $scope.updateShow=false;
		  $scope.deleteShow=false;
		  $scope.update=false;
		  $scope.deletes=false;
		  $scope.modelValue="";
		  //To get Which Model is called
		  $scope.deleteModel=function(){
			  $scope.modelValue=1;
		  }
		  $scope.updateModel=function(){
			  $scope.modelValue=0;
		  }
		  
		  
		  //Function to get value using id
		  
		  $scope.callfunc=function(){
			  //alert($scope.modelValue);
			  if($scope.modelValue===0){
				  $scope.updateShow=true;
	        	  $scope.update=true;
	        	  $scope.deleteShow=false;
	        	  $scope.deletes=false;
			  }
			  else
				  {
				  $scope.updateShow=false;
	        	  $scope.update=false;
	        	  $scope.deleteShow=true;
	        	  $scope.deletes=true;
				  }
			  
        	  $scope.responseData="";
	          if($scope.srching===undefined || $scope.srching==="")
	        	  {
	        	  	alert("You have not enter Id..Please Enter");
	        	  	if($scope.modelValue===0)
	        	  		{
	        	  			$scope.updateShow=false;
	        	  			$scope.update=false;
	        	  		}
	        	  	else
	        	  		{
	        	  		$scope.deleteShow=false;
	        	  		$scope.deletes=false;
	        	  		}
	        	  	
	          
	        	  }
	          else{
	        	  $http({
		              method:'GET',
		              url:'loads?id='+$scope.srching
		          }).then(function(response){
		              $scope.st=response.data;
		              if($scope.st==""){
		            	  if($scope.modelValue===0)
		        	  		{
		        	  			$scope.updateShow=false;
		        	  			$scope.update=false;
		        	  		}
		        	  	else
		        	  		{
		        	  		$scope.deleteShow=false;
		        	  		$scope.deletes=false;
		        	  		}
		            	  $scope.responseData="There is no record associated with id="+$scope.srching;
		              }
		            
		          },function errorCallback(response){
		              alert(response);
		          })
			  };
          }
		  
		 
		  
		  //Function on Modal close
		  
		  $scope.closeModal =function(){
			  $scope.srching="";
			  $scope.updateShow=false;
			  $scope.deleteShow=false;
			  $scope.deletes=false;
			  $scope.update=false;
			  $scope.responseData="";
		  }
		  
		  $scope.updateDetails=function(){
			  var datJson= {
	            	  id:$scope.st.id,
	            	  name: $scope.st.name,
	            	  section:$scope.st.section,
	            	  address:$scope.st.address,
	            	  city: $scope.st.city
	          };
			  $http.put('updateDetails',datJson,
	          {
	        	  headers : {
	                    'Content-Type': 'application/json'
	                }
	            }
			  ).
	          then(function(response){
	              $scope.st=response.data;
	              $scope.updateShow=false;
	              $scope.update=false;
	              $scope.responseData="Details Updated"
	          },function errorCallback(response){
	              alert(response);
	          })
		  };
		  
		  
		  //Delete Function
		  
		  $scope.deleteDetails=function(){
			  $scope.deleteId=$scope.st.id;
			  $http.delete('deleteDetails?id='+$scope.st.id,
					  {
	        	  headers : {
	                    'Content-Type': 'application/json'
	                }
	            })
			  .then(function(response){
				  $scope.sta=response.data;
				  $scope.deleteShow=false;
				  $scope.deletes=false;
				  $scope.responseData="Details Deleted"
	          },function errorCallback(response){
	        	  $scope.deleteShow=false;
				  $scope.deletes=false;
	        	  $scope.responseData="Details Deleted"
	          })
		  };
		  
		  
		});
		
		
			/////////////////?????????????*********************Display***************************???????????????????/////////

		app.controller('displayController', function($scope,$http) {
		  $scope.message = 'Hello from AboutController';
		  $scope.arr=['id','name','section','address','city'];
		  $scope.pageSize=5;
		  $scope.currentPage = 1;
		  $scope.selectSortBy="id";
		  $http({
	              method:'GET',
	              url:'loadsss'
	          }).then(function(response){
	              $scope.stdnt=response.data;
	          },function errorCallback(response){
	              alert(response);
	          }) ;
		  
		  
	          $scope.callfunc=function(){
	        	  $scope.tableHeadStatus=true;
	        	  $scope.responseData="";
		          if($scope.srching===undefined || $scope.srching==="")
		        	  {
		        	  	alert("You have not enter Id..Please Enter");
		        	  	$scope.tableHeadStatus=false;
		        	  }
		          else{
		        	  $http({
			              method:'GET',
			              url:'loads?id='+$scope.srching
			          }).then(function(response){
			              $scope.stdn=response.data;
			              if($scope.stdn==""){
			            	  $scope.tableHeadStatus=false;
			            	  $scope.responseData="There is no record associated with id="+$scope.srching;
			              }
			            
			          },function errorCallback(response){
			              alert(response);
			          })
				  };
	          }
	          $scope.closeModal =function(){
					  $scope.srching="";
					  $scope.tableHeadStatus=false;
	          }
	          
	        //Sorting Method
	          $scope.sortData=function(sortValue){
	        	  $scope.sortKey=sortValue;
	        	  $scope.reverse= !$scope.reverse;
	        	  if($scope.reverse)
	        		  $scope.loadIcon="glyphicon glyphicon-chevron-up";
	        	  else
	        		  $scope.loadIcon="glyphicon glyphicon-chevron-down";
	          }

		});
		
		
		
		
		
		
		