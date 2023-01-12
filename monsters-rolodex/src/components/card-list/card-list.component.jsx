import { Component } from "react";
import "./card-list.styles.css";

//-----------------------------------------------------------

class CardList extends Component {
  render() {
    //----------------------------------------------------

    console.log(this.props.monsters);
    console.log("render from Cardlist");

    //----------------------------------------------------

    const { monsters } = this.props; //Bu yapıyı oluşturmamın nedeni,bunu birden fazla yerde kullanmamız gerekirse, bunu yapmanın kolay yolu
    //----------------------------------------------------

    //alt = alt metni erişilebilirlik içindir ve esasen ekran okuyucularında bunun ne olduğu belirtecektir
    return (
      <div className="card-list">
        {monsters.map((monster) => {
          const { name, email, id } = monster; // Küçük bir optimizasyon

          return (
            <div key={id} className="card-container">
              <img
                alt={`monster ${name}`}
                src={`https://robohash.org/${monster.id}?set=set2&size=180x180`}
              />

              <h2>{name}</h2>

              <p>{email}</p>
            </div>
          );
        })}
      </div>
    ); // kapsül içinde birden fazla ana div olamaz
  }
}

//-----------------------------------------------------------

export default CardList;
