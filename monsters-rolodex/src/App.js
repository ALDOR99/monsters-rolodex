import { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

//--------------------------------------------------------------------

class App extends Component {
  //------------------------------------------------------------------------------------------------------------------

  constructor() {
    //inşaatçi // yapıcı metod
    super();
    this.state = {
      monsters: [],
    };
    console.log("constructor");
  }

  //------------------------------------------------------------------------------------------------------------------

  componentDidMount() {
    //[yaşam döngüsü yöntemi  = lifecycle method]
    console.log("componentDidMount");
    fetch("https://jsonplaceholder.typicode.com/users") //Jsonu alıyorum ,[ fetch = gidip getirmek ]
      .then((response) => response.json())
      .then((users) =>
        this.setState(
          () => {
            return { monsters: users };
          },
          () => {
            console.log(this.state);
          }
        )
      );
  }

  //------------------------------------------------------------------------------------------------------------------

  render() {
    console.log("render");
    // Render ne gösterileceğini belirler. Kullanıcının arayüzünün ne olacağını belirler.
    return (
      <div className="App">
        <input
          className="search-box"
          type="search"
          placeholder="search monsters"
          onChange={(event) => {
            console.log(event.target.value);

            const searchString = event.target.value.toLowerCase(); //toLowerCase ,tüm diziler üzerinde ,hepsini küçük harfe dönüştüren bir yöntemdir.

            const filteredMonsters = this.state.monsters.filter((monster) => {
              return monster.name.toLowerCase().includes(searchString);
            });

            this.setState(() => {
              return {
                monsters: filteredMonsters,
              };
            });
          }}
        />
        {
          //dizi yönetimi "map" = dizinin içinde,soldan sağa doğru her bir öğe üzerinde,
          //yineleme yapmamızı sağlayan bir yöntemdir.Ve size yeni bir dizi ,geriye verir.
          this.state.monsters.map((monster) => {
            return (
              <div key={monster.id}>
                <h1>{monster.name}</h1>
              </div>
            ); //monster parametresini geriye return et, h etiketi içerisinde
          })
        }
        <button onClick></button>
      </div>
    );
  }
}

//--------------------------------------------------------------------
export default App;
