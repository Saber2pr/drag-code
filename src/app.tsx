import 'normalize.css'
import './app.less'

import React from 'react'
import ReactDOM from 'react-dom'

import { Container, DragItem } from './components'

export const App = () => {
  const components = [
    {
      title: '容器节点',
      data: <Container width={180} height={60} />,
    },
    {
      title: '文本节点',
      data: (
        <DragItem
          node={{
            type: 'text',
            props: {
              text: '内容',
            },
          }}
        />
      ),
    },
  ]

  const getAst = () => {}

  return (
    <div className="app debug flex flex-direction-column">
      <header className="header flex align-items-center">
        菜单栏(尝试点击左侧组件拖到中间容器~)
        <span className="tip">完整程序还在编写中~</span>
      </header>
      <main className="container flex flex-grow">
        <div className="container-left">
          <div className="info">组件列表</div>
          <ul className="list">
            {components.map(({ title, data }, i) => (
              <li className="list-item" key={i}>
                <div className="list-item-title">
                  {i + 1}.{title}
                </div>
                <div className="list-item-data">{data}</div>
              </li>
            ))}
          </ul>
        </div>
        <div className="container-main flex-grow">
          <div className="info">屏幕尺寸：375x667 缩放：0.75</div>
          <div className="content">
            <Container
              draggable={false}
              flexDirection="column"
              width={375}
              height={667}
              scale={0.75}
            />
          </div>
        </div>
        <div className="container-right">
          <div className="info">
            属性编辑器
            {/* <button onClick={() => console.log(getAst())}>get ast</button> */}
          </div>
        </div>
      </main>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
