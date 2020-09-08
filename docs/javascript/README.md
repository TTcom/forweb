### 算法题一
1、题目描述：使用以下函数计算出所有数字的和
//add(1)(2,3)(4).sumOf()
//add(...)(...)(4).sumOf()
//add(...)(...)...(4).sumOf()
```js
function del(){
    let array = [...arguments]
     function ispro(){
        array.push(...arguments)
        return ispro
    }
    ispro.sumof = ()=>{
        return array.reduce((prev,next)=>{
            return prev + next
        })
    }
    return ispro
    
}
console.log(del(1,5,3)(2,4)(4,6,8)(1,2)(1,2)(1,2)(1,2)(1,2)(1,2).sumof()
```
