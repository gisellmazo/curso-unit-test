describe('Calculator', function(){

    //SPECS
    it('should add numbers to total', function(){
        const calculator = new Calculator();
        calculator.add(5);
        //expect total to be 5
        expect(calculator.total).toBe(5);
    });

    it('should substract numbers to total', function(){
        const calculator = new Calculator();
        calculator.total = 30;
        calculator.subtract(5);

        expect(calculator.total).toBe(25);
    });

    it('should multiply total by number', function(){
        const calculator = new Calculator();
        calculator.total = 100;
        calculator.multiply(2);

        expect(calculator.total).toBe(200);
    });

    it('should divide total by number', function(){
        const calculator = new Calculator();
        calculator.total = 200;
        calculator.divide(2);

        expect(calculator.total).toBe(100);
    });

    //MATCHERS

    //toBe
    it('should initialize the total', function(){
        const calculator = new Calculator();

        expect(calculator.total).toBe(0);
        expect(calculator.total).toBeFalsy;
    });

    //toEqual
    //deep equality
    it('has constructor', function(){
        const calculator = new Calculator();
        const calculator2 = new Calculator();

        expect(calculator).toEqual(calculator2);
    });

    //toBeTruthy 
    it('can be intasiated', function(){
        const calculator = new Calculator();
        const calculator2 = new Calculator();

        expect(calculator).toBeTruthy();
        expect(calculator).toEqual(calculator2);
        //toContain
        expect(calculator.constructor.name).toContain('Calcul')
    });

   //negar
    it('intasiates unique object', function(){
        const calculator = new Calculator();
        const calculator2 = new Calculator();

        expect(calculator).not.toBe(calculator2);
    });

    //Undefined or defined
    it('has common operations', function(){
        const calculator = new Calculator();
        const calculator2 = new Calculator();

        expect(calculator.add).toBeDefined();  //not.toBeUndefined();
        expect(calculator.subtract).toBeDefined();  //not.toBeUndefined();
        expect(calculator.multiply).toBeDefined();  //not.toBeUndefined();
        expect(calculator.divide).toBeDefined();  //not.toBeUndefined();
    });

    //null
    it('can overwrite total', function(){
        const calculator = new Calculator();
        calculator.total = null;

        expect(calculator.total).toBeNull();
    });

    //toBeNaN
    it('does not handle NaN', function(){
        const calculator = new Calculator();
        calculator.total = 20;
        calculator.multiply('a')

        expect(calculator.total).toBeNaN();
    });

    //toThrow, toThrowError
    it('handles divide by zero', function(){
        const calculator = new Calculator();
        calculator.total = 20;
        calculator.multiply('a')

        expect(calculator.total).toThrow();
    });



});