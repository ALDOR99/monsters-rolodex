import { Component } from "react";

//-----------------------------------------------------------

class CardList extends Component {
  render() {
    console.log(this.props.monsters);
    console.log("render from Cardlist");
    //----------------------------------------------------
    const { monsters } = this.props; //Bu yapıyı oluşturmamın nedeni,bunu birden fazla yerde kullanmamız gerekirse, bunu yapmanın kolay yolu
    //----------------------------------------------------
    return (
      <div>
        {monsters.map((monster) => (
          <h1 key={monster.id}>{monster.name}</h1>
        ))}
      </div>
    ); // kapsül içinde birden fazla ana div olamaz
  }
}

export default CardList;
