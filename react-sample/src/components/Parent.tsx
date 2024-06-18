import React, {memo,useState} from 'react'

type FizzProps = {
    isFizz:boolean
}

//reducerが受け取るactionの型を定義します
// type Action = 'DECREMENT'|'INCREMENT'|'DOUBLE'|'RESET'

// //現在の状態とActionにもとづいて次の状態を返します
// const reducer = (currentCount:number,action:Action) => {
//     switch(action) {
//         case 'INCREMENT':
//             return currentCount+1
//         case 'DECREMENT':
//             return currentCount-1
//         case 'DOUBLE':
//             return currentCount*2
//         case 'RESET':
//             return 0
//         default:
//             return currentCount
//     }
// }

//Fizzは通常の関数コンポーネント
//isFizzがtrueの場合はFizzと表示し、それ以外は何も表示しない
//isFizzの変化に関わらず、親が再描画されるとFizzも再描画される
const Fizz = (props:FizzProps) => {
    const {isFizz} = props
    console.log(`Fizzが再描画されました。isFizz=${isFizz}`)
    return <span>{isFizz? 'Fizz':''} </span>
}

type BuzzProps = {
    isBuzz:boolean
}

//Buzzはメモ化した関数コンポーネント
//isBuzzがtrueの場合はBuzzと表示し、それ以外は何も表示しない
//親コンポーネントが再描画されても、isBuzzが変化しない限りはBuzzは再描画しない
const Buzz = memo<BuzzProps>((props) => {
    const {isBuzz} = props
    console.log(`Buzzが再描画されました。isBuzz=${isBuzz}`)
    return (
        <span>
            {isBuzz? 'Buzz':''}
        </span>
    )
})

//この形式でExportしたときはimports{parent} from...で読み込む
export const Parent = () => {
    const [count,setCount] = useState(1)
    const isFizz = count % 3 === 0
    const isBuzz = count % 5 === 0

    console.log(`parentが再描画されました。count=${count}`)
    return (
        <div>
            <button onClick={()=>setCount((c)=>c+1)}>+1</button>
            <p>{`現在のカウント: ${count}`}</p>
            <p>
                <Fizz isFizz={isFizz} />
                <Buzz isBuzz={isBuzz} />
            </p>
        </div>
    )
}

export default Parent