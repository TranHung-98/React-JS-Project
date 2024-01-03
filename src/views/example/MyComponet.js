import React from 'react';


class MyComponent extends React.Component {

  /**
   *   Cú pháp JSX  có thể trả ra nhiều html ==> return block(là chỉ trả về 1 phần tử html)
   *
   * còn class của start  tagname là  className
   *
   * con muốn trả về many block thì sd :
   * <React.Fragment>
   * Code here
   * </React.Fragment>
   * hoặc
   * <>
   * code here
   * </>
   *
   * Sate(memory) là dữ liệu có thể thay dôi và ngay sau đó giao diện update lại mà không load lại trang
   *
  */

  state = {
    name: 'Trần Hưng',
    channel: 'Pratice'

  }


  handleOnchangeName = (event) => {
    this.setState({
      name: event.target.value
    })
  }


  handleClickButton = () => {
    alert('click me')
  }

  render() {

    return (
      <>

        <div className='first'>
          <input type="text"  value={this.state.name}
           onChange={(event) => this.handleOnchangeName(event)}
          />
          Hello Component, My name is {this.state.name}
        </div>
        <div className='seccon'>
          My name is {this.state.channel}
        </div>
        <div className='click'>
          <button type="submit" onClick={this.handleClickButton}>Click me</button>
        </div>
      </>

    )
  }
}


export default MyComponent;
