const counterPartial = () => {
    let count = 0
    return {
        increment: () => count++,
        decrement: () => count--,
    }
}

const counter = counterPartial()

const result1 = counter.increment()
console.log(result1)

const result2 = counter.decrement()
console.log(result2)
