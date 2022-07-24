import React from 'react';
//import pic from './logo.svg';

import pic from './mypic.jpg';


const Home = () => {

   const imagestyle = {
        border: '1px solid #ddd',
        borderRadius: '4px',
        padding: '5px',
        width: '100%',
        height: '400px'
        }
        

        /*const wrap={

         
        }*/
        
        const contentwrapup={

         marginLeft:'50px',
         
         marginRight:'50px',

        }

    return (
     
      
       <div style={contentwrapup}>
         

         <img style={imagestyle}src={pic} />

         

            <h1>The Main objective of the Web</h1>
    
<p >HTML is the standard markup language for creating Web pages. HTML describes the structure of a Web page, and consists of a series of elements. HTML elements tell the browser how to display the content.</p>



<p>CSS is a language that describes how HTML elements are to be displayed on screen, paper, or in other media. CSS saves a lot of work, because it can control the layout of multiple web pages all at once.</p>



<p>JavaScript is the programming language of HTML and the Web. JavaScript can change HTML content and attribute values. JavaScript can change CSS. JavaScript can hide and show HTML elements, and more.</p>
<p>JavaScript is the programming language of HTML and the Web. JavaScript can change HTML content and attribute values. JavaScript can change CSS. JavaScript can hide and show HTML elements, and more.</p>
<p>JavaScript is the programming language of HTML and the Web. JavaScript can change HTML content and attribute values. JavaScript can change CSS. JavaScript can hide and show HTML elements, and more.</p>
<p>JavaScript is the programming language of HTML and the Web. JavaScript can change HTML content and attribute values. JavaScript can change CSS. JavaScript can hide and show HTML elements, and more.</p>
<p>JavaScript is the programming language of HTML and the Web. JavaScript can change HTML content and attribute values. JavaScript can change CSS. JavaScript can hide and show HTML elements, and more.</p>
           
       </div>

     
       
    );
}
 
export default Home;