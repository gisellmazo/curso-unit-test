describe('main.js', function(){
    describe('calculate()', function(){
        it('validates expression when the first number is invalid', function(){

            const spy = spyOn(window, 'updateResult').and.stub();

            calculate('a+3');

            expect(spy).toHaveBeenCalled();
            expect(spy).toHaveBeenCalledWith('Operación no reconocida');
            expect(spy).toHaveBeenCalledTimes(1);
        });

        it('validates expression when the second number is invalid', function(){

            const spy = spyOn(window, 'updateResult')//and.stub(); is the default, can be omitted

            calculate('3+a');

            expect(spy).toHaveBeenCalled();
            expect(spy).toHaveBeenCalledWith('Operación no reconocida');
            expect(spy).toHaveBeenCalledTimes(1);

        });

        it('validates expression when operation is invalid', function(){

            const spy = spyOn(window, 'updateResult')//and.stub(); is the default, can be omitted

            calculate('3_4');

            expect(spy).toHaveBeenCalled();
            expect(spy).toHaveBeenCalledWith('Operación no reconocida');
            expect(spy).toHaveBeenCalledTimes(1);
        });

        it('calls add', function(){
            const spy = spyOn(Calculator.prototype, 'add');

            calculate('3+4');

            expect(spy).toHaveBeenCalledTimes(2);
            expect(spy).toHaveBeenCalledWith(3);
            expect(spy).toHaveBeenCalledWith(4);

        });

        it('calls subtract', function(){
            const spy = spyOn(Calculator.prototype, 'subtract');

            calculate('3-7');

            expect(spy).toHaveBeenCalled();
            expect(spy).toHaveBeenCalledWith(7);
            
        });
        it('calls multiply', function(){
            const spy = spyOn(Calculator.prototype, 'multiply');

            calculate('3*5');

            expect(spy).toHaveBeenCalled();
            expect(spy).toHaveBeenCalledWith(5);
            
        });
        it('calls divide', function(){
            const spy = spyOn(Calculator.prototype, 'divide');

            calculate('9/4');

            expect(spy).toHaveBeenCalled();
            expect(spy).not.toHaveBeenCalledWith(9);
            expect(spy).toHaveBeenCalledWith(4);
            
        });

        //example using and.callThrough
        it('calls updateResult using and.callThrough', function(){
            const spy = spyOn(window, 'updateResult');
            spyOn(Calculator.prototype, 'multiply').and.callThrough(); //para llamar la implementación real

            calculate('5*5');
            expect(spy).toHaveBeenCalled();
            expect(spy).toHaveBeenCalledWith(25);
        });

        //example using and.callFake
        it('calls updateResult using and.callFake', function(){
            const spy = spyOn(window, 'updateResult');

            //callFake cambiar la implementacion de la función o metodo que se llama
            spyOn(Calculator.prototype, 'multiply').and.callFake(function(number){
                return 'it works';
            });

            calculate('5*5');
            expect(spy).toHaveBeenCalled();
            expect(spy).toHaveBeenCalledWith('it works');
        });

        //example using returnValue
        it('calls updateResult using returnValue', function(){
            const spy = spyOn(window, 'updateResult');

            //cambia el valr que retorna la función
            spyOn(Calculator.prototype, 'multiply').and.returnValue('whatever [multiply] return');

            calculate('5*5');
            expect(spy).toHaveBeenCalled();
            expect(spy).toHaveBeenCalledWith('whatever [multiply] return');
        });

        //example using returnValues
        it('calls updateResult using returnValues', function(){
            const spy = spyOn(window, 'updateResult');

            //returnValues retorna varios valores
            spyOn(Calculator.prototype, 'add').and.returnValues(null, 'whatever [add] return');

            calculate('5+5');
            expect(spy).toHaveBeenCalled();
            expect(spy).toHaveBeenCalledWith('whatever [add] return');
        });

        //throwError
        it('does not handle errors', function(){
            const spy = spyOn(Calculator.prototype, 'multiply').and.throwError('error');

            expect(function(){calculate('5*5')}).toThrowError('error')

        })

    });

    describe('updateResult()', function(){
        beforeAll(function(){
            //executed just ONCE before all the speecs are executed
            const element = document.createElement('div');
            element.setAttribute('id', 'result');

            document.body.appendChild(element);

            this.element = element;

        })

        afterAll(function(){
            //executed just ONCE before all the speecs are executed
            const element = document.getElementById('result')
            document.body.removeChild(this.element);
        });

        it('adds result to DOM element', function(){

            updateResult('5');

            expect(this.element.innerText).toBe('5');
        });

    });

    describe('showVersion()', function(){
        it('calls cacularor.version', function(){
            spyOn(document, 'getElementById').and.returnValue({
                innerText: null
            });

            const spy = spyOnProperty(Calculator.prototype, 'version', 'get')

            showVersion();

            expect(spy).toHaveBeenCalled()
        });
    });
});