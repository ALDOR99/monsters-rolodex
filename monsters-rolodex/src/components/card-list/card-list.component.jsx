import { Component } from "react";
import "./card-list.styles.css";
import Card from "../card/card.component";

//-----------------------------------------------------------

class CardList extends Component {
  render() {
    //----------------------------------------------------

    console.log(this.props.monsters);

    //----------------------------------------------------

    const { monsters } = this.props; //Bu yapıyı oluşturmamın nedeni,bunu birden fazla yerde kullanmamız gerekirse, bunu yapmanın kolay yolu
    //----------------------------------------------------

    //alt = alt metni erişilebilirlik içindir ve esasen ekran okuyucularında bunun ne olduğu belirtecektir
    return (
      <div className="card-list">
        {monsters.map((monster) => {
          return <Card monster={monster} />;
        })}
      </div>
    ); // kapsül içinde birden fazla ana div olamaz
  }
}

//-----------------------------------------------------------

export default CardList;
