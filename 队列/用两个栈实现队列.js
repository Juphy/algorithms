class Queue{
    stack1 = []
    stack2 = []
    constructor(){}

    push(val){
        stack1.push(val)
    }

    pop(){
        if(!stack2.length){
            while(stack1.length){
                stack2.push(stack1.pop())
            }
            return stack2.pop()
        }
        return stack2.pop()
    }
}