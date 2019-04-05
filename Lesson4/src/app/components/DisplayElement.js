import React from "react";

class DisplayElement extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: false
    };
  }

  render() {
    console.log('Метод render() вызван');

    let newsBlock;
    if (this.state.display) {
      newsBlock = (
        <div>
          <h3>Новости</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam
            aperiam ex tempora incidunt sit tenetur placeat harum quis esse illo
            illum exercitationem soluta, laborum alias dolores iste ad id
            tempore.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero
            praesentium rerum, expedita eaque nemo maiores dicta ullam. Sed eum
            dicta voluptatibus quis, cupiditate aperiam consequuntur adipisci
            sunt dolorem, error eos.
          </p>
        </div>
      );
    }

    return (
      <>
        <h2 className="link" onClick={() => {
          this.setState(prevState => {
           return {display: !prevState.display}
          })
        }}>Скрыть/показать блок</h2>
        {newsBlock}
      </>
    );
  }
}

export default DisplayElement;
