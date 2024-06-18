import React from 'react'

//Containerのpropsの型を定義します
type ContainerProps = {
    title:string
    children:React.ReactNode
}

//Containerは赤背景のボックスの中にタイトルと子要素を表示します
// const Container = (props: {title: string; children:React.ReactElement}) => {
//     const {title, children} = props
const Container = (props: ContainerProps): JSX.Element => {
    const {title,children} = props

    return (
        <div style={{background:'red'}} >
            <span>{title}</span>
            {/* propsのchildrenを埋め込むと、このコンポーネントの開始タグと閉じたタグで囲んだ要素を表示します */}
            <div>{children}</div>
        </div>
    )
}

const Parent = () => {
    return (
        //Containerを使用する際に,他の要素を囲って使用する  
        <Container title = "Hello">
            <p>この部分が背景で囲まれます</p>
        </Container>
    )
}

export default Parent