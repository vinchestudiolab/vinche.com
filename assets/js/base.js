  
  

  
  
  
  
  	// logo -webkit- grid-img getElementsByClassName("example")
  	window.onscroll = function() { scrollFunction() };

	function scrollFunction() {
	  if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
		document.getElementById("logo").style.width = "30%";
		//document.querySelectorAll(".grid-img").filter = "grayscale(0%)";
		//document.getElementsByClassName("grid-img").-webkit-filter = "grayscale(0%)";
		//let imagenes = document.querySelectorAll("a > img")
		//imagenes.style.filter = 'grayscale(0%)';
		
		//recorre todas las img
		var el = document.querySelectorAll('img');
			for(var i=0;i<el.length;i++){
  			el[i].style.filter = 'grayscale(0%)';
		}
		
		//const note = document.querySelector('.grid-img');
		//note.style.filter = 'grayscale(0%)';

	  } else {
		document.getElementById("logo").style.width = "40%";
		//document.querySelectorAll(".grid-img").filter = "grayscale(100%)";
		//document.getElementsByClassName("grid-img").-webkit-filter = "grayscale(100%)";
		//const note = document.querySelector('.grid-img');
		//note.style.filter = 'grayscale(100%)';
		
		//recorre todas las img
		var el = document.querySelectorAll('img');
			for(var i=0;i<el.length;i++){
  			el[i].style.filter = 'grayscale(100%)';
		}

	  }
	}
	
	










  	// diseño texto
	$(document).ready(function() {	
		//12 proyectos
	  $(window).on("load scroll", function() {
		var parallaxElement = $(".product-page-year-text-holder"),
		  parallaxQuantity = parallaxElement.length;
		window.requestAnimationFrame(function() {
		  for (var i = 0; i < parallaxQuantity; i++) {
			var currentElement = parallaxElement.eq(i),
			  windowTop = $(window).scrollTop(),
			  elementTop = currentElement.offset().top,
			  elementHeight = currentElement.height(),
			  viewPortHeight = window.innerHeight * 0.07 - elementHeight * 0.07,
			  scrolled = windowTop - elementTop + viewPortHeight;
			currentElement.css({
			  transform: "translate3d(" + scrolled * -0.3 + "px, 1.8rem, 0)"
			});
		  }
		});
	  });
		
  		//parallax scroll
	  $(window).on("load scroll", function() {
		var parallaxElement = $(".category-h1"),
		  parallaxQuantity = parallaxElement.length;
		window.requestAnimationFrame(function() {
		  for (var i = 0; i < parallaxQuantity; i++) {
			var currentElement = parallaxElement.eq(i),
			  windowTop = $(window).scrollTop(),
			  elementTop = currentElement.offset().top,
			  elementHeight = currentElement.height(),
			  viewPortHeight = window.innerHeight * 0.07 - elementHeight * 0.07,
			  scrolled = windowTop - elementTop + viewPortHeight;
			currentElement.css({
			  transform: "translate3d(0," + scrolled * -0.3 + "px, 0)"
			});
		  }
		});
	  });
	
  		//parallax scroll proyectos
	  $(window).on("load scroll", function() {
		var parallaxElement = $(".parallax_scroll"),
		  parallaxQuantity = parallaxElement.length;
		window.requestAnimationFrame(function() {
		  for (var i = 0; i < parallaxQuantity; i++) {
			var currentElement = parallaxElement.eq(i),
			  windowTop = $(window).scrollTop(),
			  elementTop = currentElement.offset().top,
			  elementHeight = currentElement.height(),
			  viewPortHeight = window.innerHeight * 0.01 - elementHeight * 0.01,
			  scrolled = windowTop - elementTop + viewPortHeight;
			currentElement.css({
			  transform: "translate3d(0," + scrolled * -0.01 + "px, 0)"
			});
		  }
		});
	  });
	  
	  //parallax scroll proyectos
	  $(window).on("load scroll", function() {
		var parallaxElement = $(".parallax_scroll-"),
		  parallaxQuantity = parallaxElement.length;
		window.requestAnimationFrame(function() {
		  for (var i = 0; i < parallaxQuantity; i++) {
			var currentElement = parallaxElement.eq(i),
			  windowTop = $(window).scrollTop(),
			  elementTop = currentElement.offset().top,
			  elementHeight = currentElement.height(),
			  viewPortHeight = window.innerHeight * 0.01 - elementHeight * 0.01,
			  scrolled = windowTop - elementTop + viewPortHeight;
			currentElement.css({
			  transform: "translate3d(0," + scrolled * +0.08 + "px, 0)"
			});
		  }
		});
	  });
	});
	
	
	
	
	
	
	
	
	
	
	

 
	// proyecto tomamos los valores de get y de db.js
    function getGET()
    {
        // capturamos la url
        var loc = document.location.href;
        // si existe el interrogante
        if(loc.indexOf('?')>0)
        {
            // cogemos la parte de la url que hay despues del interrogante
            var getString = loc.split('?')[1];
            // obtenemos un array con cada clave=valor
            var GET = getString.split('&');
            var get = {};
            // recorremos todo el array de valores
            for(var i = 0, l = GET.length; i < l; i++){
                var tmp = GET[i].split('=');
                get[tmp[0]] = unescape(decodeURI(tmp[1]));
            }
            return get;
        }
    }
    window.onload = function()
    {
        
        // Cogemos los valores pasados por get
        var valores=getGET();
        
        var proyecto = valores['proyecto'];
        
        // pagina proyecto
        if(proyecto !== '')
        {
            //recogemos los valores que nos envia la URL en variables para trabajar 
            // hacemos un bucle para pasar por cada indice del array de valores db.js           
			var i = 1;
				array.forEach(object=>{	
	
					if(object.codigo == proyecto){
						
						document.getElementById('titulo').innerHTML = object.titulo;
						document.getElementById('descripcion').innerHTML = object.descripcion;
						document.getElementById('cliente').innerHTML = object.cliente;  
						document.getElementById('anio').innerHTML = object.anio; 
						document.getElementById('estudio').innerHTML = object.estudio; 
						document.getElementById('programas').innerHTML = object.programas; 
						document.getElementById('resumen').innerHTML = object.resumen; 
					
						if(object.fotos == 0){
							f1.style.display = "none";
							f2.style.display = "none";
							f3.style.display = "none";
							f4.style.display = "none";
							f5.style.display = "none";
							f6.style.display = "none";
							f7.style.display = "none";
							f8.style.display = "none";
							}
						if(object.fotos == 1){
							f2.style.display = "none";
							f3.style.display = "none";
							f4.style.display = "none";
							f5.style.display = "none";
							f6.style.display = "none";
							f7.style.display = "none";
							f8.style.display = "none";
							}
						if(object.fotos == 2){
							f3.style.display = "none";
							f4.style.display = "none";
							f5.style.display = "none";
							f6.style.display = "none";
							f7.style.display = "none";
							f8.style.display = "none";
							}
						if(object.fotos == 3){
							f4.style.display = "none";
							f5.style.display = "none";
							f6.style.display = "none";
							f7.style.display = "none";
							f8.style.display = "none";
							}
						if(object.fotos == 4){
							f5.style.display = "none";
							f6.style.display = "none";
							f7.style.display = "none";
							f8.style.display = "none";
							}
						if(object.fotos == 5){
							f6.style.display = "none";
							f7.style.display = "none";
							f8.style.display = "none";
							}
						if(object.fotos == 6){
							f7.style.display = "none";
							f8.style.display = "none";
							}
						if(object.fotos == 7){
							f8.style.display = "none";
							}									
					}	
					i++;
				});    
				
            //alert('Te llamas '+ proyecto);
            document.getElementById("imagen-00").src="assets/imagenes/" + proyecto + "-00.jpg";
            document.getElementById("imagen-01").src="assets/imagenes/" + proyecto + "-01.jpg";
            document.getElementById("imagen-02").src="assets/imagenes/" + proyecto + "-02.jpg";
            document.getElementById("imagen-03").src="assets/imagenes/" + proyecto + "-03.jpg";
            document.getElementById("imagen-04").src="assets/imagenes/" + proyecto + "-04.jpg";
            document.getElementById("imagen-05").src="assets/imagenes/" + proyecto + "-05.jpg";
            document.getElementById("imagen-06").src="assets/imagenes/" + proyecto + "-06.jpg";
            document.getElementById("imagen-07").src="assets/imagenes/" + proyecto + "-07.jpg";
            document.getElementById("imagen-08").src="assets/imagenes/" + proyecto + "-08.jpg";

        }else{
            // no se ha recibido ningun parametro por GET
            //document.write("No se ha recibido ningún parámetro");
            window.location.replace("http://www.vinche.com");
        }
    }





		// ancla
		 $(function(){
		   $("a.ancla").off().on("click", function(e){
			  e.preventDefault();
			  var ancla = $(this).attr("href");
			  $("html,body").animate({
				   scrollTop: $(ancla).offset().top
			  });
		   });
	   });

	
	
	
	
	
