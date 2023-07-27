
// This is a anonumus funciton, uska koi name nahi hoga.
// aa function banavathi teni andar lakhelo code dabba ma fit thay jase. Teni bahar no code condlict nahi Kare. Aa same technic node.js internally use kre chhe.
(function (){

    let socials_var = document.querySelectorAll('.social div'); //social class ni andar jetla pn div chhe te badha select they jse, km k queryselectorAll chhe. 
    // social variable banavyo che e array type banse so tene loop krvo padse.

    socials_var.forEach(function(deep , index){     //function ni andar parameter aapelu chhe jene game e name aapi sakai chhe. 
        deep.style.animation = `mymove .6s cubic-bezier(.51,.92,.24,1.15) forwards ${index/7     + 0.2}s ` //forward pachi j seconds chhe te delay ni chhe. vadhare delay karva mate index/7.
        //first div ne delay krva mate index/7 ma + 0.2 add kari didha.

        //ease-in-out ni jagya a google pr thi effect lidheli chhe. jenathi div aagla jai thodak pachhla jump krse
        
        // delay karya pchi div bydefault to tya j dekhase j aapde jotu nathi tena mate css ma div ne target karine opacity 0 kri nakhvi and @keyframes ma "to" ma opacity 1, km k animationend thay tyare j dekhavu joia.
    })





    let navigation = document.querySelectorAll('.nav-links');

    navigation.forEach(function(temp , index){
        temp.style.animation = `navmove .6s cubic-bezier(.51,.92,.24,1.15) forwards ${index}s`;
    }) 


    // LINE ANIMAITON:-
    
    let rocketPieces = document.querySelectorAll('.rocket-body span');

    let rocket = document.querySelector(".rocket")  //  rocket class a rocket vala section no class che... means k Rocket valo pure puro section select karyo chhe.

    let triggerStart = window.innerHeight / 5; //  divide by 5 na kriye to screen dekhase tyare tart j animatio trigger thay jse...so divide by 5 karvathi section(screen) thodok aagal vadhse pachi trigger thase

    let rocketOffsetTop = rocket.offsetTop;         

    let thirdOffsetTop =  rocketPieces[2].offsetTop;

    document.addEventListener('scroll', () =>{          // jyare scroll thase tyare 1 funciton call krvanu thasse ()=>{}, function ni andar e malse j eventlistner che te.
        if(window.scrollY > (rocketOffsetTop - triggerStart)){
            rocketPieces[0].classList.add('active');
            rocketPieces[1].classList.add('active');
        }
        else{
            rocketPieces[0].classList.remove('active');
            rocketPieces[1].classList.remove('active');
        }

        if(window.scrollY > (thirdOffsetTop - triggerStart)){
            rocketPieces[2].classList.add('active');
        }else{
            rocketPieces[2].classList.remove('active');
        }
    })


        


}())