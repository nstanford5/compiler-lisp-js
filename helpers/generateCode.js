// generates JS code from LISP ast

module.exports = function generateCode(node) {
    // handle numbers
    if (node.type === 'NumericLiteral') {
        return node.value;
    };
    // handle identifiers
    if (node.type === 'Identifier') {
        return node.name;
    };
    // handle call expressions
    if (node.type === 'CallExpression') {
        // name(arg1, arg2, arg3)
        return `${generateCode(node.callee)}(${node.arguments.map(generateCode).join(', ')})`;
    };
    // handle expressions
    if (node.type === 'ExpressionStatement') {
        return `${generateCode(node.expression)};`;
    };
    // handle root node
    if (node.type === 'Program') {
        return node.body.map(generateCode).join('\n');
    };
}