const tokenizer = require('./tokenizer');
const parser = require('./parser');
const transformer = require('./transformer');
const generateCode = require('./generateCode');

module.exports = function compiler(input){
    // 1. Lexical Analysis --
    //      Breaks the input code (string) into the basic syntax
    //      of the language (array of objects)
    const tokens = tokenizer(input);

    // 2. Syntactic Analysis
    //      Transforms the tokens (array of object) into an
    //      Abstract Syntax Tree which represents our program
    const lispAST = parser(tokens);

    // 3. Transformation - Transforms our original Lisp AST into
    //              our target Javascript AST
    const jsAST = transformer(lispAST);
    
    // 4. Code Generation
    const jsCode = generateCode(jsAST);

    return jsCode;
}