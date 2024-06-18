//Hello はクリックするとアラートを出すテキストを返します。
const Hello = () => {
    //クリック関数
    const onClick = () => {
        //アラートを出す
        alert('Hello')
    }


const text = 'Hello, React'

//テキストを子にもつdiv要素を返す
return (
    //divのonClickにコースバック関数を返す
    <div onClick = {onClick}>
        {text}
    </div>
)
}

//外部からHelloを読み込めるようにエクスポートする
export default Hello