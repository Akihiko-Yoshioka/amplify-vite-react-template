import React from 'react'

//名前を入力するためのテキストボックスを返す
const Name = () => {
    //input 要素のonclickイベントに対するコールバック関数を定義します
    const onChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        //入力されたテキストをコンソールに表示する
        console.log(e.target.value)
    }

    return (
        //styleオブジェクトのキーはキャメルケースになります 
        <div style={{padding:'16px',backgroundColor:'grey'}}>
            {/*for の代わりに htmlForを使います*/}
            <label htmlFor="name">名前</label>
            {/* classやonchangeの代わりに classNameやonChangeを使います */}
            <input id="name" className="input-name" type="text" onChange={onChange} />
        </div>
    )
}

export default Name