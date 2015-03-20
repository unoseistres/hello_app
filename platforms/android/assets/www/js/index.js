/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

 
/////////////////////////


////////////////////////


$(document).on("pagecreate","#section1",function(){
  $("#section1").on("swipeleft",function(){
  	console.log("section1 left"); 
    $.mobile.changePage("#section2",{transition:"slide"});
       
  }); 
  
  
  
  
});


$(document).on("pagecreate","#section2",function(){
  $("#section2").on("swiperight",function(){
    $.mobile.changePage("#section1",{transition:"slide", reverse:true
	    
    });
    

  }); 
  
  console.log("section2 right"); 
});


$(document).on("pagecreate","#section2",function(){
  $("#section2").on("swipeleft",function(){
    $.mobile.changePage("#section3",{transition:"slide", 
	    
    });
  });  
});


$(document).on("pagecreate","#section3",function(){
  $("#section3").on("swiperight",function(){
    $.mobile.changePage("#section2",{transition:"slide", reverse:true
	    
    });
  });  
});

$(document).on("pagecreate","#section3",function(){
  $("#section3").on("swipeleft",function(){
    $.mobile.changePage("#section4",{transition:"slide",
	    
    });
  });  
});

$(document).on("pagecreate","#section4",function(){
  $("#section4").on("swiperight",function(){
    $.mobile.changePage("#section3",{transition:"slide", reverse:true
	    
    });
  });  
});

$(document).on("pagecreate","#section4",function(){
  $("#section4").on("swipeleft",function(){
    $.mobile.changePage("#section5",{transition:"slide", 
	    
    });
  });  
});

$(document).on("pagecreate","#section5",function(){
  $("#section5").on("swiperight",function(){
    $.mobile.changePage("#section4",{transition:"slide", reverse:true
	    
	    
    });
  });  
});
////////////////////////////////////////////////////external panel

var panel = '<div data-role="panel" id="mypanel" data-position="right" data-display="overlay" data-position-fixed="true"></div>';

$(document).one('pagebeforecreate', function () {
  $.mobile.pageContainer.prepend(panel);
  $("#mypanel").panel();
     
});




//slider
		  function showValue(newValue)
		  {
		y=newValue;

		}
		
/////draggable img

 
	
		
////////////////save picture 


function save(dataURL){
	alert("do you want to save?");
	// console.log(dataURL);

    window.canvas2ImagePlugin.saveImageDataToLibrary(
        function(msg){//the file of the images
            console.log(msg);
            $('#mypanel').prepend('<img id="theImg" src="'+msg+'"/>');//path of new images and appending them to panel 
   
  			$(function() {
	  			
  				 //Counter
  				 counter = 0;
  				 //Make element draggable
  				 $("#theImg").draggable({
  				 helper: 'clone',
  				 containment: 'can',
  				 //When first dragged
  				 stop: function (ev, ui) {

  				 var pos = $(ui.helper).offset();
  				 objName = "#clonediv" + counter
  				 $(objName).css({
  				 "left": pos.left,
  				 "top": pos.top
            });
            	// $(objName).removeAttr('id');
            	$(objName).removeAttr("theImg");
				//When an existiung object is dragged
				$(objName).draggable({
                containment: 'can',
                stop: function (ev, ui) {
                    var pos = $(ui.helper).offset();
                }
            		});
        				}
    		});
				//Make element droppable
				$("#can").droppable({
				drop: function (ev, ui) {
				if (ui.helper.attr('id').search(/drag[0-9]/) != -1) {
                counter++;
                var element = $(ui.draggable).clone();
                element.addClass("tempclass");
                $(this).append(element);
                $(".tempclass").attr("id", "clonediv" + counter);
                $("#clonediv" + counter).removeClass("tempclass");
                //Get the dynamically item id
                draggedNumber = ui.helper.attr('id').search(/drag([0-9])/)
                itemDragged = "dragged" + RegExp.$1
                console.log(itemDragged)
                $("#clonediv" + counter).addClass(itemDragged);
            					}
        					}
    				});
  			});
  
  	
       
        },
        
        function(err){
            console.log(err);
            
        },
       
        document.getElementById('can')
    );
    	alert("hi");
}







 



