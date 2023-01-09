//jedna grupa testova koja ima 1 test u sebi
//sastoje se iz 2 dijela sjut(grupa testova) i spec (jedan pojedinacni test)
//za grupu ide describe
describe ("compare() function", function (){  //imamo 2 parametra prvi je naziv funkcije koju cemo testirati
    it ("Should be able to comapare two numbers, when second number is greater", function(){  ///imamo 2 parametra...prvi je opis testa, a drugi je anonimna funkcija kojom ce se obavii test 
        expect(compare(5, 8)).toEqual (-1);    //testiranje se vrsi sa expect pa pozivamo funckiju compare i damo vrijednosti npr 5 i 8 i korisimo toequal da bude rezultat -1
        //ovo je jedan test u grupi
        
    });
    it ("Should be able to comapare two numbers, when first number is greater", function(){  
        expect(compare(8, 5)).toEqual (1);    
    });
    it ("Should be able to comapare two numbers in string form", function(){  
        expect(compare('8', '5')).toEqual (1);  
    });
    it (" Should be able to comapare two numbers, when one is negative ", function(){  
        expect(compare(-8, 5)).toEqual (-1);   
    });
    it ("Should be able to comapare two equal number", function(){ 
        expect(compare(5, 5)).toEqual (0);    
    });

    //it ("Should be able to comapare two equal number", function(){ 
    //     expect(compare("sdsadasf", "sdsahadf")).toEqual (0);    
    // });

    it ("TESTIRANJE KADA SE JEDNA OD VRIJEDNOSTI NE MOZE CONVERT U BROJ", function(){ 
        expect(function(){
            compare("dsadasga", 5)
        }).toThrowError(TypeError)       ///funkcija u jasmine tothrowerror
     });

});