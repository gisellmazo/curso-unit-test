describe('Calculator.js', function(){
    

    describe('Calculator', function(){
       let calculator;
       let calculator2;
        //beforeEach
        beforeEach(function(){
          //anything inside this block executes before each spec (it) inside this describe
          calculator = new Calculator();
          calculator2 = new Calculator();


        });

        afterEach(function(){
           //anything inside this block executes after each spec (it) inside this describe
           

        });

        //MATCHERS

        //toBe
        it('should initialize the total', function(){
            expect(calculator.total).toBe(0);
            expect(calculator.total).toBeFalsy;
        });

        //negar
        it('intasiates unique object', function(){

            expect(calculator).not.toBe(calculator2);
        });

        //Undefined or defined
        it('has common operations', function(){

            expect(calculator.add).toBeDefined();  //not.toBeUndefined();
            expect(calculator.subtract).toBeDefined();  //not.toBeUndefined();
            expect(calculator.multiply).toBeDefined();  //not.toBeUndefined();
            expect(calculator.divide).toBeDefined();  //not.toBeUndefined();
        });

        //null
        it('can overwrite total', function(){
            calculator.total = null;

            expect(calculator.total).toBeNull();
        });

        //toEqual
        //deep equality
        it('has constructor', function(){

            expect(calculator).toEqual(calculator2);
        });

        //toBeTruthy 
        it('can be intasiated', function(){
            //para registrar custom mastcher en jasmine
            jasmine.addMatchers(customMatchers);

            expect(calculator).toBeCalculator();
            expect(calculator).toBeTruthy();
            expect(calculator).toEqual(calculator2);
            //toContain
            expect(calculator.constructor.name).toContain('Calcul')
        });

        //ADD
        describe('add()', function(){

            //SPECS
           it('should add numbers to total', function(){
               calculator.add(5);
               //expect total to be 5
               expect(calculator.total).toBe(5);
           });

           //toMatch() expects the value to match a regular expression
            it('returns total', function(){
                calculator.total = 50;

                expect(calculator.add(20)).toBe(70)
                expect(typeof calculator.total).toMatch('number');
                //third party matchers

                //asymmetric matchers -not equal in each side
                expect(calculator.total).toEqual(jasmine.anything());
            });
    
        })

        //SUBTRACT
        describe('subtract()', function(){

            it('should substract numbers to total', function(){
                calculator.total = 30;
                calculator.subtract(5);
        
                expect(calculator.total).toBe(25);
            });
            
        })

        //MULTIPLY
        describe('multiply()', function(){
            
            it('should multiply total by number', function(){
                calculator.total = 100;
                calculator.multiply(2);
        
                expect(calculator.total).toBe(200);
            });

            //toBeNaN
            it('does not handle NaN', function(){
                calculator.total = 20;
                calculator.multiply('a')

                expect(calculator.total).toBeNaN();
            });
        })

        //DIVIDE
        describe('divide()', function(){
            
            it('should divide total by number', function(){
                calculator.total = 200;
                calculator.divide(2);
        
                expect(calculator.total).toBe(100);
            });

            //toThrow, toThrowError
            it('handles divide by zero', function(){

                expect(function(){calculator.divide(0)}).toThrow();
                expect(function(){calculator.divide(0)}).toThrowError(Error);
                expect(function(){calculator.divide(0)}).toThrowError(Error, 'No se puede dividir por cero');
            });
        })

    })

});