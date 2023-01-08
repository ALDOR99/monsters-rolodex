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
      searchField: "",
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

    const filteredMonsters = this.state.monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(this.state.searchField);
    });

    return (
      <div className="App">
        <input
          className="search-box"
          type="search"
          placeholder="search monsters"
          onChange={(event) => {
            const searchField = event.target.value.toLowerCase(); //toLowerCase ,tüm diziler üzerinde ,hepsini küçük harfe dönüştüren bir yöntemdir.

            this.setState(() => {
              return {
                searchField,
              };
            });
          }}
        />
        {
          //dizi yönetimi "map" = dizinin içinde,soldan sağa doğru her bir öğe üzerinde,
          //yineleme yapmamızı sağlayan bir yöntemdir.Ve size yeni bir dizi ,geriye verir.
          filteredMonsters.map((monster) => {
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
