/* for resizing icon on mouseHover  */

function ingredientsHover(){document.getElementById("ingredients").style.fontSize = "300%"; /* see id on index.html */
		}
function ingredientsNormal(){
    document.getElementById("ingredients").style.fontSize = "100%"; /* see id on index.html */
        }
    	
        
function preparationHover(){
    document.getElementById("preparation").style.fontSize = "300%";   /* see id on index.html */
    	}
function preparationNormal(){
    document.getElementById("preparation").style.fontSize = "100%"; /* see id on index.html */
    	}



/* can also trace the child element by using firstElementChild */
 /* assuming that the target Element is Child of another element */
/* function ingredientsHover(){
    document.getElementById("ingredients").firstElementChild.firstElementChild.style.fontSize = "300%"; 
}  */